const express = require("express");
const async = require("async");
const tools = require("../../common/util");
const {
  query
} = require("express");
const _ejs = require("ejs");
const {
  verify_authority
} = require("../../common/util");
const multiparty = require("multiparty");
const router = express.Router();

const search_default_params = {
    key: "*",
    hs: "*",
    sort: "default",
    // sort: "bill_count",
    start: 0,
    size: 10,
    company_type: 0,
    country: "*",
    search_type: 2,
    search_language: 0,
    search_relation: 0,
    off_line_counties: "*",
    is_add_log: false,
  },
  filter_default_params = {
    filter_bill_count_min: 0,
    filter_bill_count_max: 0,
    filter_weight: "default",
    filter_date_start: "*",
    filter_date_end: "*",
    trade_countries: "*",
    buyer_ports: "*",
    seller_ports: "*",
    company_mark: "*",
  };

router.buyer_list = function (req, res) {
  res.locals.wglobals.nav_active = "buyer";
  res.locals.wglobals.path = req.path;
  return company(req, res, 0);
};

router.supplier_list = function (req, res) {
  res.locals.wglobals.nav_active = "supplier";
  res.locals.wglobals.path = req.path;
  return company(req, res, 1);
};

router.company_search = function (req, res) {
  async.waterfall(
    [
      function (callback) {
        search_company(req, res, {}, callback, null, null);
      },
    ],
    function (err, results) {
      res.wrender(
        "./company/child/search_list.ejs", {
          results: results
        },
        function (err, str) {
          if (err) {
            return res.status(404).send("error");
          }
          res.send({
            content: str,
            total: results.search_data.hits || 0,
          });
        }
      );
    }
  );
};

/** 统一公司搜索入口 **/
function company(req, res, type) {
  var key = req.params.key || "*",
    country = req.params.country || "*",
    results = {
      company_type: type,
      country_data: {}
    },
    now_date = new Date(),
    filter_date = new Date(now_date.setDate(now_date.getDate() - 1)).format(
      "yyyy-MM-dd"
    ),
    start_time = filter_date + " 00:00:00",
    end_time = filter_date + " 23:59:59";
  req.query["is_add_log"] = true;

  async.waterfall(
    [
      // 验证国家
      function (callback) {
        if (country && country != "*") {
          tools.getMasterApiQuery(
            "/common/country/by-name", {
              name: country
            },
            req,
            res,
            function (result) {
              var data = result.state == 0 ? result.data : {};
              // 传递的国家关键词不是国家则作为关键词传递
              if (Object.keys(data).length === 0) {
                if (!key) {
                  // 此时的国家作为key使用
                  res.redirect(
                    301,
                    "/buy-" + country + "?" + req.url.split("?")[1]
                  );
                } else {
                  res.status(404).render("error");
                }
              } else {
                country = data.country_en.toLowerCase();
                results.country_data = data;
                callback(null, results);
              }
            }
          );
        } else {
          callback(null, 1);
        }
      },
      function (data, callback) {
        search_company(req, res, results, callback, country, type);
      },
    ],
    function (err, _results) {
      return res.wrender("./company/company_list.ejs", {
        results: _results,
      });
    }
  );
}

/*
统一公司搜索
 */
function search_company(req, res, results, callback, country, company_type) {
  var key = req.params.key,
    search_params = {},
    size = 30,
    _user = tools.unity_merger_user(res),
    country_list = country && country != "*" ? country.split("|") : [];
  for (let fix_key in search_default_params) {
    // 存在则为合法参数
    if (fix_key in req.query) {
      search_params[fix_key] = req.query[fix_key];
    } else {
      search_params[fix_key] = search_default_params[fix_key];
    }
  }
  if (!_user.id && search_params.start > 0) return res.send({});

  if (tools.verify_authority(_user, "yd")) {
    for (let fix_key in filter_default_params) {
      // 存在则为合法参数
      if (fix_key in req.query) {
        search_params[fix_key] = req.query[fix_key];
      } else {
        search_params[fix_key] = filter_default_params[fix_key];
      }
    }
  } else {
    search_params = Object.assign(search_params, filter_default_params);
  }

  if (
    country &&
    country != "*" &&
    (!search_params["country"] || search_params["country"] == "*")
  ) {
    search_params["country"] = country;
  }

  search_params["country"] = search_params["country"].toLowerCase();
  if (key) {
    search_params["key"] = key.toLowerCase();
  }
  search_params["size"] = size;
  if (company_type != null) {
    search_params["company_type"] = company_type;
  } else if (search_params.company_type == null) {
    search_params["company_type"] = 2; // 默认为产品搜索
  }
  if (search_params.search_type == 3) {
    search_params.hs =
      search_params.hs && search_params.hs != "*" ?
      search_params.hs :
      search_params.key;
    search_params.key = "*";
  } else if (search_params.search_type == 1) {
    search_params.search_relation = 1;
  } else {
    search_params.hs = "*";
  }

  if (search_params["key"] && search_params["key"] != "*") {
    search_params["key"] = search_params["key"].toClear();
    results.search_key = search_params["key"];
  }
  if (search_params["hs"] && search_params["hs"] != "*") {
    results.search_hs = search_params["hs"];
  }

  // 离线国家
  search_params["off_line_counties"] = "*";
  tools.country_offline(
    res,
    null,
    "company_search",
    function (result, params) {
      results = Object.assign({}, results, result);
      if (results.screen == "india") {
        if (country_list.length == 1 && country == "india")
          return callback(null, 1);

        if (country_list.length > 1) {
          let _index = country_list.indexOf(results.screen);
          country_list.slice(_index);
          params.country = country_list.join("|");
        }
      }
      // if (country == 'india' && results.screen == 'india') return callback(null, results)
      search_params = Object.assign({}, search_params, params);
      // 为了缓存效率，   提单为 0 的都设置为 *
      let bill_count_min = search_params["filter_bill_count_min"],
        bill_count_max = search_params["filter_bill_count_max"];
      search_params["filter_bill_count_min"] =
        bill_count_min == "0" || bill_count_min == 0 ? "*" : bill_count_min;
      search_params["filter_bill_count_max"] =
        bill_count_max == "0" || bill_count_max == 0 ? "*" : bill_count_max;
      search_params["wreload"] = "2022091605"; // 重建缓存
      // search_params['creload'] = 1  // 重建缓存
      results.search_type = search_params.search_type;
      tools.getMasterApiQuery(
        "/company/search/list",
        search_params,
        req,
        res,
        function (result) {
          results.search_data = result.state == 0 ? result.data : {};
          results.country = country ? country : "*";
          results.search_data.size = size;
          callback(null, results);
        }
      );
    },
    "company_search"
  );
}

router.company_follow_bulk = function (req, res) {
  let user = tools.unity_merger_user(res);
  if (!tools.verify_authority(user, "yd", false)) return res.status(404).send();

  if (res.locals.wglobals.device == "mobile") {
    async.waterfall(
      [
        function (callback) {
          let tag_list = [],
            company_list = req.body.company_list
          tools.postMasterApiQuery(
            "/company/follow/bulk", {
              company_list: company_list,
              tag_list: tag_list,
              source: 0,
            },
            req,
            res,
            function (result) {
              callback(null, result);
            }, {
              is_json: true,
            }
          );
        },
      ],
      function (err, results) {
        return res.send(results);
      }
    );
  } else {
    async.waterfall(
      [
        function (callback) {
          let form = new multiparty.Form();
          form.parse(req, function (err, fields) {
            let tags = fields.tags || [],
              tag_list = [1],
              company_list = (fields.fget("company_id") || "").split("|");
            if (tags.length > 0) {
              tag_list = tags.map((a) => parseInt(a));
            }
            tools.postMasterApiQuery(
              "/company/follow/bulk", {
                company_list: company_list,
                tag_list: tag_list,
                source: 0,
              },
              req,
              res,
              function (result) {
                callback(null, result);
              }, {
                is_json: true,
              }
            );
          });
        },
      ],
      function (err, results) {
        return res.send(results);
      }
    );
  }
};

/**
 * 历史搜索词
 * @param req
 * @param res
 */
router.historyKeys = function (req, res) {
  let _user = tools.unity_merger_user(res),
    results = {
      list: []
    },
    params = {
      top_count: 6
    },
    search_type = req.query.search_type;

  if (search_type != null) params["search_type"] = search_type;

  async.waterfall(
    [
      function (callback) {
        if (_user.id) {
          tools.getMasterApiQuery(
            "/company/search-log/recent/keys",
            params,
            req,
            res,
            function (result) {
              let _list = (result.data || {}).list || [];
              if (_list.length > 0) {
                results.list = _list;
              }
              callback(null, 0);
            }
          );
        } else {
          callback(null, 0);
        }
      },
    ],
    function (err, _) {
      res.send(results);
    }
  );
};

router.autocomplete = function (req, res) {
  let prefix = req.query.term || "",
    results = [];
  if (!prefix) return res.send({});
  async.waterfall(
    [
      function (callback) {
        tools.getMasterApiQuery(
          "/company/search/autocomplete", {
            top_count: 30,
            prefix: prefix
          },
          req,
          res,
          function (result) {
            let _list = (result.data || {}).list || [];
            if (_list.length > 0) {
              results = _list;
            }
            callback(null, 0);
          }
        );
      },
    ],
    function (err, _) {
      res.send(results);
    }
  );
};

router.hotKeys = function (req, res) {
  let results = {};
  async.waterfall(
    [
      function (callback) {
        tools.getMasterApiQuery(
          "/company/search-log/hot/keys", {
            top_count: 6
          },
          req,
          res,
          function (result) {
            results.list = (result.data || {}).list || [];
            callback(null, 0);
          }
        );
      },
    ],
    function (err, _) {
      res.send(results);
    }
  );
};
router.recommend_products_similar = function (req, res) {
  let results = {},
    keyword = req.query.key,
    country = req.query.country;
  async.waterfall(
    [
      function (callback) {
        tools.getMasterApiQuery(
          "/company/search/recommend/similar", {
            keyword: keyword,
            size: 5,
            country: country
          },
          req,
          res,
          function (result) {
            results = result;
            callback(null, 0);
          }
        );
      },
    ],
    function (err, _) {
      res.send(results);
    }
  );
};

module.exports = router;