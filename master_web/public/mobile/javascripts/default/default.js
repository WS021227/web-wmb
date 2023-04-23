/*! layer mobile-v2.0 弹层组件移动版 The MIT License */ ;
! function (a) {
    "use strict";
    var b = document,
        c = "querySelectorAll",
        d = "getElementsByClassName",
        e = function (a) {
            return b[c](a)
        },
        f = {
            type: 0,
            shade: !0,
            shadeClose: !0,
            fixed: !0,
            anim: "scale"
        },
        g = {
            extend: function (a) {
                var b = JSON.parse(JSON.stringify(f));
                for (var c in a) b[c] = a[c];
                return b
            },
            timer: {},
            end: {}
        };
    g.touch = function (a, b) {
        a.addEventListener("click", function (a) {
            b.call(this, a)
        }, !1)
    };
    var h = 0,
        i = ["layui-m-layer"],
        j = function (a) {
            var b = this;
            b.config = g.extend(a), b.view()
        };
    j.prototype.view = function () {
        var a = this,
            c = a.config,
            f = b.createElement("div");
        a.id = f.id = i[0] + h, f.setAttribute("class", i[0] + " " + i[0] + (c.type || 0)), f.setAttribute("index", h);
        var g = function () {
                var a = "object" == typeof c.title;
                return c.title ? '<h3 style="' + (a ? c.title[1] : "") + '">' + (a ? c.title[0] : c.title) + "</h3>" : ""
            }(),
            j = function () {
                "string" == typeof c.btn && (c.btn = [c.btn]);
                var a, b = (c.btn || []).length;
                return 0 !== b && c.btn ? (a = '<span yes type="1">' + c.btn[0] + "</span>", 2 === b && (a = '<span no type="0">' + c.btn[1] + "</span>" + a), '<div class="layui-m-layerbtn">' + a + "</div>") : ""
            }();
        if (c.fixed || (c.top = c.hasOwnProperty("top") ? c.top : 100, c.style = c.style || "", c.style += " top:" + (b.body.scrollTop + c.top) + "px"), 2 === c.type && (c.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (c.content || "") + "</p>"), c.skin && (c.anim = "up"), "msg" === c.skin && (c.shade = !1), f.innerHTML = (c.shade ? "<div " + ("string" == typeof c.shade ? 'style="' + c.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (c.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (c.skin ? "layui-m-layer-" + c.skin + " " : "") + (c.className ? c.className : "") + " " + (c.anim ? "layui-m-anim-" + c.anim : "") + '" ' + (c.style ? 'style="' + c.style + '"' : "") + ">" + g + '<div class="layui-m-layercont">' + c.content + "</div>" + j + "</div></div></div>", !c.type || 2 === c.type) {
            var k = b[d](i[0] + c.type),
                l = k.length;
            l >= 1 && layer.close(k[0].getAttribute("index"))
        }
        document.body.appendChild(f);
        var m = a.elem = e("#" + a.id)[0];
        c.success && c.success(m), a.index = h++, a.action(c, m)
    }, j.prototype.action = function (a, b) {
        var c = this;
        a.time && (g.timer[c.index] = setTimeout(function () {
            layer.close(c.index)
        }, 1e3 * a.time));
        var e = function () {
            var b = this.getAttribute("type");
            0 == b ? (a.no && a.no(), layer.close(c.index)) : a.yes ? a.yes(c.index) : layer.close(c.index)
        };
        if (a.btn)
            for (var f = b[d]("layui-m-layerbtn")[0].children, h = f.length, i = 0; h > i; i++) g.touch(f[i], e);
        if (a.shade && a.shadeClose) {
            var j = b[d]("layui-m-layershade")[0];
            g.touch(j, function () {
                layer.close(c.index, a.end)
            })
        }
        a.end && (g.end[c.index] = a.end)
    }, a.layer = {
        v: "2.0",
        index: h,
        open: function (a) {
            var b = new j(a || {});
            return b.index
        },
        close: function (a) {
            var c = e("#" + i[0] + a)[0];
            c && (c.innerHTML = "", b.body.removeChild(c), clearTimeout(g.timer[a]), delete g.timer[a], "function" == typeof g.end[a] && g.end[a](), delete g.end[a])
        },
        closeAll: function () {
            for (var a = b[d](i[0]), c = 0, e = a.length; e > c; c++) layer.close(0 | a[0].getAttribute("index"))
        }
    }, "function" == typeof define ? define(function () {
        return layer
    }) : function () {
        var a = document.scripts,
            c = a[a.length - 1],
            d = c.src,
            e = d.substring(0, d.lastIndexOf("/") + 1),
            fff=d.substring(0, d.indexOf("javascripts"))
        console.log(d,e)
        c.getAttribute("merge") || document.head.appendChild(function () {
            var a = b.createElement("link");
            return a.href = fff + "css/mobile/layui_mobile/layer.css", a.type = "text/css", a.rel = "styleSheet", a.id = "layermcss", a
        }())
    }()
}(window);

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
    var n,
        r,
        i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function (e, t) {
            return new x.fn.init(e, t, r);
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function (e, t) {
            return t.toUpperCase();
        },
        q = function (e) {
            (a.addEventListener ||
                "load" === e.type ||
                "complete" === a.readyState) &&
            (_(), x.ready());
        },
        _ = function () {
            a.addEventListener
                ? (a.removeEventListener("DOMContentLoaded", q, !1),
                    e.removeEventListener("load", q, !1))
                : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
        };
    (x.fn = x.prototype =
        {
            jquery: f,
            constructor: x,
            init: function (e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (
                        ((i =
                            "<" === e.charAt(0) &&
                            ">" === e.charAt(e.length - 1) &&
                            e.length >= 3
                                ? [null, e, null]
                                : N.exec(e)),
                        !i || (!i[1] && n))
                    )
                        return !n || n.jquery
                            ? (n || r).find(e)
                            : this.constructor(n).find(e);
                    if (i[1]) {
                        if (
                            ((n = n instanceof x ? n[0] : n),
                                x.merge(
                                    this,
                                    x.parseHTML(
                                        i[1],
                                        n && n.nodeType ? n.ownerDocument || n : a,
                                        !0
                                    )
                                ),
                            k.test(i[1]) && x.isPlainObject(n))
                        )
                            for (i in n)
                                x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this;
                    }
                    if (((o = a.getElementById(i[2])), o && o.parentNode)) {
                        if (o.id !== i[2]) return r.find(e);
                        (this.length = 1), (this[0] = o);
                    }
                    return (this.context = a), (this.selector = e), this;
                }
                return e.nodeType
                    ? ((this.context = this[0] = e), (this.length = 1), this)
                    : x.isFunction(e)
                        ? r.ready(e)
                        : (e.selector !== t &&
                        ((this.selector = e.selector), (this.context = e.context)),
                            x.makeArray(e, this));
            },
            selector: "",
            length: 0,
            toArray: function () {
                return g.call(this);
            },
            get: function (e) {
                return null == e
                    ? this.toArray()
                    : 0 > e
                        ? this[this.length + e]
                        : this[e];
            },
            pushStack: function (e) {
                var t = x.merge(this.constructor(), e);
                return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function (e, t) {
                return x.each(this, e, t);
            },
            ready: function (e) {
                return x.ready.promise().done(e), this;
            },
            slice: function () {
                return this.pushStack(g.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            },
            map: function (e) {
                return this.pushStack(
                    x.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: h,
            sort: [].sort,
            splice: [].splice,
        }),
        (x.fn.init.prototype = x.fn),
        (x.extend = x.fn.extend =
            function () {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for (
                    "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (l = 2)),
                    "object" == typeof s || x.isFunction(s) || (s = {}),
                    u === l && ((s = this), --l);
                    u > l;
                    l++
                )
                    if (null != (o = arguments[l]))
                        for (i in o)
                            (e = s[i]),
                                (r = o[i]),
                            s !== r &&
                            (c && r && (x.isPlainObject(r) || (n = x.isArray(r)))
                                ? (n
                                    ? ((n = !1), (a = e && x.isArray(e) ? e : []))
                                    : (a = e && x.isPlainObject(e) ? e : {}),
                                    (s[i] = x.extend(c, a, r)))
                                : r !== t && (s[i] = r));
                return s;
            }),
        x.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            noConflict: function (t) {
                return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? x.readyWait++ : x.ready(!0);
            },
            ready: function (e) {
                if (e === !0 ? !--x.readyWait : !x.isReady) {
                    if (!a.body) return setTimeout(x.ready);
                    (x.isReady = !0),
                    (e !== !0 && --x.readyWait > 0) ||
                    (n.resolveWith(a, [x]),
                    x.fn.trigger && x(a).trigger("ready").off("ready"));
                }
            },
            isFunction: function (e) {
                return "function" === x.type(e);
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return "array" === x.type(e);
                },
            isWindow: function (e) {
                return null != e && e == e.window;
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                        ? c[y.call(e)] || "object"
                        : typeof e;
            },
            isPlainObject: function (e) {
                var n;
                if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                    return !1;
                try {
                    if (
                        e.constructor &&
                        !v.call(e, "constructor") &&
                        !v.call(e.constructor.prototype, "isPrototypeOf")
                    )
                        return !1;
                } catch (r) {
                    return !1;
                }
                if (x.support.ownLast) for (n in e) return v.call(e, n);
                for (n in e);
                return n === t || v.call(e, n);
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            error: function (e) {
                throw Error(e);
            },
            parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && ((n = t), (t = !1)), (t = t || a);
                var r = k.exec(e),
                    i = !n && [];
                return r
                    ? [t.createElement(r[1])]
                    : ((r = x.buildFragment([e], t, i)),
                    i && x(i).remove(),
                        x.merge([], r.childNodes));
            },
            parseJSON: function (n) {
                return e.JSON && e.JSON.parse
                    ? e.JSON.parse(n)
                    : null === n
                        ? n
                        : "string" == typeof n &&
                        ((n = x.trim(n)),
                        n && E.test(n.replace(A, "@").replace(j, "]").replace(S, "")))
                            ? Function("return " + n)()
                            : (x.error("Invalid JSON: " + n), t);
            },
            parseXML: function (n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser
                        ? ((i = new DOMParser()), (r = i.parseFromString(n, "text/xml")))
                        : ((r = new ActiveXObject("Microsoft.XMLDOM")),
                            (r.async = "false"),
                            r.loadXML(n));
                } catch (o) {
                    r = t;
                }
                return (
                    (r &&
                        r.documentElement &&
                        !r.getElementsByTagName("parsererror").length) ||
                    x.error("Invalid XML: " + n),
                        r
                );
            },
            noop: function () {},
            globalEval: function (t) {
                t &&
                x.trim(t) &&
                (
                    e.execScript ||
                    function (t) {
                        e.eval.call(e, t);
                    }
                )(t);
            },
            camelCase: function (e) {
                return e.replace(D, "ms-").replace(L, H);
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    a = M(e);
                if (n) {
                    if (a) {
                        for (; o > i; i++) if (((r = t.apply(e[i], n)), r === !1)) break;
                    } else for (i in e) if (((r = t.apply(e[i], n)), r === !1)) break;
                } else if (a) {
                    for (; o > i; i++) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
                } else for (i in e) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
                return e;
            },
            trim:
                b && !b.call("\ufeff\u00a0")
                    ? function (e) {
                        return null == e ? "" : b.call(e);
                    }
                    : function (e) {
                        return null == e ? "" : (e + "").replace(C, "");
                    },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                    (M(Object(e))
                        ? x.merge(n, "string" == typeof e ? [e] : e)
                        : h.call(n, e)),
                        n
                );
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (m) return m.call(t, e, n);
                    for (
                        r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
                        r > n;
                        n++
                    )
                        if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function (e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
                else while (n[o] !== t) e[i++] = n[o++];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                var r,
                    i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++) (r = !!t(e[o], o)), n !== r && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i = 0,
                    o = e.length,
                    a = M(e),
                    s = [];
                if (a)
                    for (; o > i; i++)
                        (r = t(e[i], i, n)), null != r && (s[s.length] = r);
                else for (i in e) (r = t(e[i], i, n)), null != r && (s[s.length] = r);
                return d.apply([], s);
            },
            guid: 1,
            proxy: function (e, n) {
                var r, i, o;
                return (
                    "string" == typeof n && ((o = e[n]), (n = e), (e = o)),
                        x.isFunction(e)
                            ? ((r = g.call(arguments, 2)),
                                (i = function () {
                                    return e.apply(n || this, r.concat(g.call(arguments)));
                                }),
                                (i.guid = e.guid = e.guid || x.guid++),
                                i)
                            : t
                );
            },
            access: function (e, n, r, i, o, a, s) {
                var l = 0,
                    u = e.length,
                    c = null == r;
                if ("object" === x.type(r)) {
                    o = !0;
                    for (l in r) x.access(e, n, l, r[l], !0, a, s);
                } else if (
                    i !== t &&
                    ((o = !0),
                    x.isFunction(i) || (s = !0),
                    c &&
                    (s
                        ? (n.call(e, i), (n = null))
                        : ((c = n),
                            (n = function (e, t, n) {
                                return c.call(x(e), n);
                            }))),
                        n)
                )
                    for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
            },
            now: function () {
                return new Date().getTime();
            },
            swap: function (e, t, n, r) {
                var i,
                    o,
                    a = {};
                for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i;
            },
        }),
        (x.ready.promise = function (t) {
            if (!n)
                if (((n = x.Deferred()), "complete" === a.readyState))
                    setTimeout(x.ready);
                else if (a.addEventListener)
                    a.addEventListener("DOMContentLoaded", q, !1),
                        e.addEventListener("load", q, !1);
                else {
                    a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement;
                    } catch (i) {}
                    r &&
                    r.doScroll &&
                    (function o() {
                        if (!x.isReady) {
                            try {
                                r.doScroll("left");
                            } catch (e) {
                                return setTimeout(o, 50);
                            }
                            _(), x.ready();
                        }
                    })();
                }
            return n.promise(t);
        }),
        x.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
            ),
            function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase();
            }
        );
    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e)
            ? !1
            : 1 === e.nodeType && t
                ? !0
                : "array" === n ||
                ("function" !== n &&
                    (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
    }
    (r = x(a)),
        (function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g,
                m,
                y,
                v,
                b = "sizzle" + -new Date(),
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function (e, t) {
                    return e === t ? ((S = !0), 0) : 0;
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F =
                    H.indexOf ||
                    function (e) {
                        var t = 0,
                            n = this.length;
                        for (; n > t; t++) if (this[t] === e) return t;
                        return -1;
                    },
                B =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ =
                    "\\[" +
                    P +
                    "*(" +
                    R +
                    ")" +
                    P +
                    "*(?:([*^$|!~]?=)" +
                    P +
                    "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
                    W +
                    ")|)|)" +
                    P +
                    "*\\]",
                I =
                    ":(" +
                    R +
                    ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
                    $.replace(3, 8) +
                    ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        P +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        P +
                        "*(?:([+-]|)" +
                        P +
                        "*(\\d+)|))" +
                        P +
                        "*\\)|)",
                        "i"
                    ),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp(
                        "^" +
                        P +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        P +
                        "*((?:-\\d)?\\d*)" +
                        P +
                        "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n
                        ? t
                        : 0 > r
                            ? String.fromCharCode(r + 65536)
                            : String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r));
                };
            try {
                M.apply((H = O.call(w.childNodes)), w.childNodes),
                    H[w.childNodes.length].nodeType;
            } catch (ot) {
                M = {
                    apply: H.length
                        ? function (e, t) {
                            _.apply(e, O.call(t));
                        }
                        : function (e, t) {
                            var n = e.length,
                                r = 0;
                            while ((e[n++] = t[r++]));
                            e.length = n - 1;
                        },
                };
            }
            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if (
                    ((t ? t.ownerDocument || t : w) !== f && p(t),
                        (t = t || f),
                        (n = n || []),
                    !e || "string" != typeof e)
                )
                    return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if ((o = Z.exec(e)))
                        if ((s = o[1])) {
                            if (9 === l) {
                                if (((a = t.getElementById(s)), !a || !a.parentNode)) return n;
                                if (a.id === s) return n.push(a), n;
                            } else if (
                                t.ownerDocument &&
                                (a = t.ownerDocument.getElementById(s)) &&
                                v(t, a) &&
                                a.id === s
                            )
                                return n.push(a), n;
                        } else {
                            if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if (
                                (s = o[3]) &&
                                r.getElementsByClassName &&
                                t.getElementsByClassName
                            )
                                return M.apply(n, t.getElementsByClassName(s)), n;
                        }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (
                            ((m = d = b),
                                (y = t),
                                (x = 9 === l && e),
                            1 === l && "object" !== t.nodeName.toLowerCase())
                        ) {
                            (c = mt(e)),
                                (d = t.getAttribute("id"))
                                    ? (m = d.replace(nt, "\\$&"))
                                    : t.setAttribute("id", m),
                                (m = "[id='" + m + "'] "),
                                (u = c.length);
                            while (u--) c[u] = m + yt(c[u]);
                            (y = (V.test(e) && t.parentNode) || t), (x = c.join(","));
                        }
                        if (x)
                            try {
                                return M.apply(n, y.querySelectorAll(x)), n;
                            } catch (T) {
                            } finally {
                                d || t.removeAttribute("id");
                            }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i);
            }
            function st() {
                var e = [];
                function t(n, r) {
                    return (
                        e.push((n += " ")) > o.cacheLength && delete t[e.shift()],
                            (t[n] = r)
                    );
                }
                return t;
            }
            function lt(e) {
                return (e[b] = !0), e;
            }
            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t);
                } catch (n) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
            }
            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) o.attrHandle[n[r]] = t;
            }
            function pt(e, t) {
                var n = t && e,
                    r =
                        n &&
                        1 === e.nodeType &&
                        1 === t.nodeType &&
                        (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n) while ((n = n.nextSibling)) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function ft(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e;
                };
            }
            function dt(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                };
            }
            function ht(e) {
                return lt(function (t) {
                    return (
                        (t = +t),
                            lt(function (n, r) {
                                var i,
                                    o = e([], n.length, t),
                                    a = o.length;
                                while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                            })
                    );
                });
            }
            (s = at.isXML =
                function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1;
                }),
                (r = at.support = {}),
                (p = at.setDocument =
                    function (e) {
                        var n = e ? e.ownerDocument || e : w,
                            i = n.defaultView;
                        return n !== f && 9 === n.nodeType && n.documentElement
                            ? ((f = n),
                                (d = n.documentElement),
                                (h = !s(n)),
                            i &&
                            i.attachEvent &&
                            i !== i.top &&
                            i.attachEvent("onbeforeunload", function () {
                                p();
                            }),
                                (r.attributes = ut(function (e) {
                                    return (e.className = "i"), !e.getAttribute("className");
                                })),
                                (r.getElementsByTagName = ut(function (e) {
                                    return (
                                        e.appendChild(n.createComment("")),
                                            !e.getElementsByTagName("*").length
                                    );
                                })),
                                (r.getElementsByClassName = ut(function (e) {
                                    return (
                                        (e.innerHTML =
                                            "<div class='a'></div><div class='a i'></div>"),
                                            (e.firstChild.className = "i"),
                                        2 === e.getElementsByClassName("i").length
                                    );
                                })),
                                (r.getById = ut(function (e) {
                                    return (
                                        (d.appendChild(e).id = b),
                                        !n.getElementsByName || !n.getElementsByName(b).length
                                    );
                                })),
                                r.getById
                                    ? ((o.find.ID = function (e, t) {
                                        if (typeof t.getElementById !== j && h) {
                                            var n = t.getElementById(e);
                                            return n && n.parentNode ? [n] : [];
                                        }
                                    }),
                                        (o.filter.ID = function (e) {
                                            var t = e.replace(rt, it);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }))
                                    : (delete o.find.ID,
                                        (o.filter.ID = function (e) {
                                            var t = e.replace(rt, it);
                                            return function (e) {
                                                var n =
                                                    typeof e.getAttributeNode !== j &&
                                                    e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        })),
                                (o.find.TAG = r.getElementsByTagName
                                    ? function (e, n) {
                                        return typeof n.getElementsByTagName !== j
                                            ? n.getElementsByTagName(e)
                                            : t;
                                    }
                                    : function (e, t) {
                                        var n,
                                            r = [],
                                            i = 0,
                                            o = t.getElementsByTagName(e);
                                        if ("*" === e) {
                                            while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                            return r;
                                        }
                                        return o;
                                    }),
                                (o.find.CLASS =
                                    r.getElementsByClassName &&
                                    function (e, n) {
                                        return typeof n.getElementsByClassName !== j && h
                                            ? n.getElementsByClassName(e)
                                            : t;
                                    }),
                                (m = []),
                                (g = []),
                            (r.qsa = K.test(n.querySelectorAll)) &&
                            (ut(function (e) {
                                (e.innerHTML =
                                    "<select><option selected=''></option></select>"),
                                e.querySelectorAll("[selected]").length ||
                                g.push("\\[" + P + "*(?:value|" + B + ")"),
                                e.querySelectorAll(":checked").length ||
                                g.push(":checked");
                            }),
                                ut(function (e) {
                                    var t = n.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("t", ""),
                                    e.querySelectorAll("[t^='']").length &&
                                    g.push("[*^$]=" + P + "*(?:''|\"\")"),
                                    e.querySelectorAll(":enabled").length ||
                                    g.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        g.push(",.*:");
                                })),
                            (r.matchesSelector = K.test(
                                (y =
                                    d.webkitMatchesSelector ||
                                    d.mozMatchesSelector ||
                                    d.oMatchesSelector ||
                                    d.msMatchesSelector)
                            )) &&
                            ut(function (e) {
                                (r.disconnectedMatch = y.call(e, "div")),
                                    y.call(e, "[s!='']:x"),
                                    m.push("!=", I);
                            }),
                                (g = g.length && RegExp(g.join("|"))),
                                (m = m.length && RegExp(m.join("|"))),
                                (v =
                                    K.test(d.contains) || d.compareDocumentPosition
                                        ? function (e, t) {
                                            var n = 9 === e.nodeType ? e.documentElement : e,
                                                r = t && t.parentNode;
                                            return (
                                                e === r ||
                                                !(
                                                    !r ||
                                                    1 !== r.nodeType ||
                                                    !(n.contains
                                                        ? n.contains(r)
                                                        : e.compareDocumentPosition &&
                                                        16 & e.compareDocumentPosition(r))
                                                )
                                            );
                                        }
                                        : function (e, t) {
                                            if (t)
                                                while ((t = t.parentNode)) if (t === e) return !0;
                                            return !1;
                                        }),
                                (A = d.compareDocumentPosition
                                    ? function (e, t) {
                                        if (e === t) return (S = !0), 0;
                                        var i =
                                            t.compareDocumentPosition &&
                                            e.compareDocumentPosition &&
                                            e.compareDocumentPosition(t);
                                        return i
                                            ? 1 & i ||
                                            (!r.sortDetached &&
                                                t.compareDocumentPosition(e) === i)
                                                ? e === n || v(w, e)
                                                    ? -1
                                                    : t === n || v(w, t)
                                                        ? 1
                                                        : c
                                                            ? F.call(c, e) - F.call(c, t)
                                                            : 0
                                                : 4 & i
                                                    ? -1
                                                    : 1
                                            : e.compareDocumentPosition
                                                ? -1
                                                : 1;
                                    }
                                    : function (e, t) {
                                        var r,
                                            i = 0,
                                            o = e.parentNode,
                                            a = t.parentNode,
                                            s = [e],
                                            l = [t];
                                        if (e === t) return (S = !0), 0;
                                        if (!o || !a)
                                            return e === n
                                                ? -1
                                                : t === n
                                                    ? 1
                                                    : o
                                                        ? -1
                                                        : a
                                                            ? 1
                                                            : c
                                                                ? F.call(c, e) - F.call(c, t)
                                                                : 0;
                                        if (o === a) return pt(e, t);
                                        r = e;
                                        while ((r = r.parentNode)) s.unshift(r);
                                        r = t;
                                        while ((r = r.parentNode)) l.unshift(r);
                                        while (s[i] === l[i]) i++;
                                        return i
                                            ? pt(s[i], l[i])
                                            : s[i] === w
                                                ? -1
                                                : l[i] === w
                                                    ? 1
                                                    : 0;
                                    }),
                                n)
                            : f;
                    }),
                (at.matches = function (e, t) {
                    return at(e, null, null, t);
                }),
                (at.matchesSelector = function (e, t) {
                    if (
                        ((e.ownerDocument || e) !== f && p(e),
                            (t = t.replace(Y, "='$1']")),
                            !(!r.matchesSelector || !h || (m && m.test(t)) || (g && g.test(t))))
                    )
                        try {
                            var n = y.call(e, t);
                            if (
                                n ||
                                r.disconnectedMatch ||
                                (e.document && 11 !== e.document.nodeType)
                            )
                                return n;
                        } catch (i) {}
                    return at(t, f, null, [e]).length > 0;
                }),
                (at.contains = function (e, t) {
                    return (e.ownerDocument || e) !== f && p(e), v(e, t);
                }),
                (at.attr = function (e, n) {
                    (e.ownerDocument || e) !== f && p(e);
                    var i = o.attrHandle[n.toLowerCase()],
                        a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                    return a === t
                        ? r.attributes || !h
                            ? e.getAttribute(n)
                            : (a = e.getAttributeNode(n)) && a.specified
                                ? a.value
                                : null
                        : a;
                }),
                (at.error = function (e) {
                    throw Error("Syntax error, unrecognized expression: " + e);
                }),
                (at.uniqueSort = function (e) {
                    var t,
                        n = [],
                        i = 0,
                        o = 0;
                    if (
                        ((S = !r.detectDuplicates),
                            (c = !r.sortStable && e.slice(0)),
                            e.sort(A),
                            S)
                    ) {
                        while ((t = e[o++])) t === e[o] && (i = n.push(o));
                        while (i--) e.splice(n[i], 1);
                    }
                    return e;
                }),
                (a = at.getText =
                    function (e) {
                        var t,
                            n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
                            } else if (3 === i || 4 === i) return e.nodeValue;
                        } else for (; (t = e[r]); r++) n += a(t);
                        return n;
                    }),
                (o = at.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: lt,
                        match: Q,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": { dir: "parentNode", first: !0 },
                            " ": { dir: "parentNode" },
                            "+": { dir: "previousSibling", first: !0 },
                            "~": { dir: "previousSibling" },
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return (
                                    (e[1] = e[1].replace(rt, it)),
                                        (e[3] = (e[4] || e[5] || "").replace(rt, it)),
                                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                        e.slice(0, 4)
                                );
                            },
                            CHILD: function (e) {
                                return (
                                    (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || at.error(e[0]),
                                                (e[4] = +(e[4]
                                                    ? e[5] + (e[6] || 1)
                                                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                                                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && at.error(e[0]),
                                        e
                                );
                            },
                            PSEUDO: function (e) {
                                var n,
                                    r = !e[5] && e[2];
                                return Q.CHILD.test(e[0])
                                    ? null
                                    : (e[3] && e[4] !== t
                                        ? (e[2] = e[4])
                                        : r &&
                                        J.test(r) &&
                                        (n = mt(r, !0)) &&
                                        (n = r.indexOf(")", r.length - n) - r.length) &&
                                        ((e[0] = e[0].slice(0, n)), (e[2] = r.slice(0, n))),
                                        e.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(rt, it).toLowerCase();
                                return "*" === e
                                    ? function () {
                                        return !0;
                                    }
                                    : function (e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t;
                                    };
                            },
                            CLASS: function (e) {
                                var t = N[e + " "];
                                return (
                                    t ||
                                    ((t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                                        N(e, function (e) {
                                            return t.test(
                                                ("string" == typeof e.className && e.className) ||
                                                (typeof e.getAttribute !== j &&
                                                    e.getAttribute("class")) ||
                                                ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = at.attr(r, e);
                                    return null == i
                                        ? "!=" === t
                                        : t
                                            ? ((i += ""),
                                                "=" === t
                                                    ? i === n
                                                    : "!=" === t
                                                        ? i !== n
                                                        : "^=" === t
                                                            ? n && 0 === i.indexOf(n)
                                                            : "*=" === t
                                                                ? n && i.indexOf(n) > -1
                                                                : "$=" === t
                                                                    ? n && i.slice(-n.length) === n
                                                                    : "~=" === t
                                                                        ? (" " + i + " ").indexOf(n) > -1
                                                                        : "|=" === t
                                                                            ? i === n || i.slice(0, n.length + 1) === n + "-"
                                                                            : !1)
                                            : !0;
                                };
                            },
                            CHILD: function (e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i
                                    ? function (e) {
                                        return !!e.parentNode;
                                    }
                                    : function (t, n, l) {
                                        var u,
                                            c,
                                            p,
                                            f,
                                            d,
                                            h,
                                            g = o !== a ? "nextSibling" : "previousSibling",
                                            m = t.parentNode,
                                            y = s && t.nodeName.toLowerCase(),
                                            v = !l && !s;
                                        if (m) {
                                            if (o) {
                                                while (g) {
                                                    p = t;
                                                    while ((p = p[g]))
                                                        if (
                                                            s
                                                                ? p.nodeName.toLowerCase() === y
                                                                : 1 === p.nodeType
                                                        )
                                                            return !1;
                                                    h = g = "only" === e && !h && "nextSibling";
                                                }
                                                return !0;
                                            }
                                            if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                                                (c = m[b] || (m[b] = {})),
                                                    (u = c[e] || []),
                                                    (d = u[0] === T && u[1]),
                                                    (f = u[0] === T && u[2]),
                                                    (p = d && m.childNodes[d]);
                                                while (
                                                    (p = (++d && p && p[g]) || (f = d = 0) || h.pop())
                                                    )
                                                    if (1 === p.nodeType && ++f && p === t) {
                                                        c[e] = [T, d, f];
                                                        break;
                                                    }
                                            } else if (
                                                v &&
                                                (u = (t[b] || (t[b] = {}))[e]) &&
                                                u[0] === T
                                            )
                                                f = u[1];
                                            else
                                                while (
                                                    (p = (++d && p && p[g]) || (f = d = 0) || h.pop())
                                                    )
                                                    if (
                                                        (s
                                                            ? p.nodeName.toLowerCase() === y
                                                            : 1 === p.nodeType) &&
                                                        ++f &&
                                                        (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                                        p === t)
                                                    )
                                                        break;
                                            return (f -= i), f === r || (0 === f % r && f / r >= 0);
                                        }
                                    };
                            },
                            PSEUDO: function (e, t) {
                                var n,
                                    r =
                                        o.pseudos[e] ||
                                        o.setFilters[e.toLowerCase()] ||
                                        at.error("unsupported pseudo: " + e);
                                return r[b]
                                    ? r(t)
                                    : r.length > 1
                                        ? ((n = [e, e, "", t]),
                                            o.setFilters.hasOwnProperty(e.toLowerCase())
                                                ? lt(function (e, n) {
                                                    var i,
                                                        o = r(e, t),
                                                        a = o.length;
                                                    while (a--)
                                                        (i = F.call(e, o[a])), (e[i] = !(n[i] = o[a]));
                                                })
                                                : function (e) {
                                                    return r(e, 0, n);
                                                })
                                        : r;
                            },
                        },
                        pseudos: {
                            not: lt(function (e) {
                                var t = [],
                                    n = [],
                                    r = l(e.replace(z, "$1"));
                                return r[b]
                                    ? lt(function (e, t, n, i) {
                                        var o,
                                            a = r(e, null, i, []),
                                            s = e.length;
                                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                                    })
                                    : function (e, i, o) {
                                        return (t[0] = e), r(t, null, o, n), !n.pop();
                                    };
                            }),
                            has: lt(function (e) {
                                return function (t) {
                                    return at(e, t).length > 0;
                                };
                            }),
                            contains: lt(function (e) {
                                return function (t) {
                                    return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
                                };
                            }),
                            lang: lt(function (e) {
                                return (
                                    G.test(e || "") || at.error("unsupported lang: " + e),
                                        (e = e.replace(rt, it).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do
                                                if (
                                                    (n = h
                                                        ? t.lang
                                                        : t.getAttribute("xml:lang") ||
                                                        t.getAttribute("lang"))
                                                )
                                                    return (
                                                        (n = n.toLowerCase()),
                                                        n === e || 0 === n.indexOf(e + "-")
                                                    );
                                            while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                );
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id;
                            },
                            root: function (e) {
                                return e === d;
                            },
                            focus: function (e) {
                                return (
                                    e === f.activeElement &&
                                    (!f.hasFocus || f.hasFocus()) &&
                                    !!(e.type || e.href || ~e.tabIndex)
                                );
                            },
                            enabled: function (e) {
                                return e.disabled === !1;
                            },
                            disabled: function (e) {
                                return e.disabled === !0;
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return (
                                    ("input" === t && !!e.checked) ||
                                    ("option" === t && !!e.selected)
                                );
                            },
                            selected: function (e) {
                                return (
                                    e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                                );
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                                        return !1;
                                return !0;
                            },
                            parent: function (e) {
                                return !o.pseudos.empty(e);
                            },
                            header: function (e) {
                                return tt.test(e.nodeName);
                            },
                            input: function (e) {
                                return et.test(e.nodeName);
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return ("input" === t && "button" === e.type) || "button" === t;
                            },
                            text: function (e) {
                                var t;
                                return (
                                    "input" === e.nodeName.toLowerCase() &&
                                    "text" === e.type &&
                                    (null == (t = e.getAttribute("type")) ||
                                        t.toLowerCase() === e.type)
                                );
                            },
                            first: ht(function () {
                                return [0];
                            }),
                            last: ht(function (e, t) {
                                return [t - 1];
                            }),
                            eq: ht(function (e, t, n) {
                                return [0 > n ? n + t : n];
                            }),
                            even: ht(function (e, t) {
                                var n = 0;
                                for (; t > n; n += 2) e.push(n);
                                return e;
                            }),
                            odd: ht(function (e, t) {
                                var n = 1;
                                for (; t > n; n += 2) e.push(n);
                                return e;
                            }),
                            lt: ht(function (e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; --r >= 0; ) e.push(r);
                                return e;
                            }),
                            gt: ht(function (e, t, n) {
                                var r = 0 > n ? n + t : n;
                                for (; t > ++r; ) e.push(r);
                                return e;
                            }),
                        },
                    }),
                (o.pseudos.nth = o.pseudos.eq);
            for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                o.pseudos[n] = ft(n);
            for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n);
            function gt() {}
            (gt.prototype = o.filters = o.pseudos), (o.setFilters = new gt());
            function mt(e, t) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (l = []), (u = o.preFilter);
                while (s) {
                    (!n || (r = X.exec(s))) &&
                    (r && (s = s.slice(r[0].length) || s), l.push((i = []))),
                        (n = !1),
                    (r = U.exec(s)) &&
                    ((n = r.shift()),
                        i.push({ value: n, type: r[0].replace(z, " ") }),
                        (s = s.slice(n.length)));
                    for (a in o.filter)
                        !(r = Q[a].exec(s)) ||
                        (u[a] && !(r = u[a](r))) ||
                        ((n = r.shift()),
                            i.push({ value: n, type: a, matches: r }),
                            (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
            }
            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r;
            }
            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first
                    ? function (t, n, i) {
                        while ((t = t[r])) if (1 === t.nodeType || o) return e(t, n, i);
                    }
                    : function (t, n, s) {
                        var l,
                            u,
                            c,
                            p = T + " " + a;
                        if (s) {
                            while ((t = t[r]))
                                if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                        } else
                            while ((t = t[r]))
                                if (1 === t.nodeType || o)
                                    if (((c = t[b] || (t[b] = {})), (u = c[r]) && u[0] === p)) {
                                        if ((l = u[1]) === !0 || l === i) return l === !0;
                                    } else if (
                                        ((u = c[r] = [p]), (u[1] = e(t, n, s) || i), u[1] === !0)
                                    )
                                        return !0;
                    };
            }
            function bt(e) {
                return e.length > 1
                    ? function (t, n, r) {
                        var i = e.length;
                        while (i--) if (!e[i](t, n, r)) return !1;
                        return !0;
                    }
                    : e[0];
            }
            function xt(e, t, n, r, i) {
                var o,
                    a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)
                    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a;
            }
            function wt(e, t, n, r, i, o) {
                return (
                    r && !r[b] && (r = wt(r)),
                    i && !i[b] && (i = wt(i, o)),
                        lt(function (o, a, s, l) {
                            var u,
                                c,
                                p,
                                f = [],
                                d = [],
                                h = a.length,
                                g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                                m = !e || (!o && t) ? g : xt(g, f, e, s, l),
                                y = n ? (i || (o ? e : h || r) ? [] : a) : m;
                            if ((n && n(m, y, s, l), r)) {
                                (u = xt(y, d)), r(u, [], s, l), (c = u.length);
                                while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
                            }
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        (u = []), (c = y.length);
                                        while (c--) (p = y[c]) && u.push((m[c] = p));
                                        i(null, (y = []), u, l);
                                    }
                                    c = y.length;
                                    while (c--)
                                        (p = y[c]) &&
                                        (u = i ? F.call(o, p) : f[c]) > -1 &&
                                        (o[u] = !(a[u] = p));
                                }
                            } else (y = xt(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, l) : M.apply(a, y);
                        })
                );
            }
            function Tt(e) {
                var t,
                    n,
                    r,
                    i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    p = vt(
                        function (e) {
                            return F.call(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    f = [
                        function (e, n, r) {
                            return (
                                (!a && (r || n !== u)) ||
                                ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                            );
                        },
                    ];
                for (; i > l; l++)
                    if ((n = o.relative[e[l].type])) f = [vt(bt(f), n)];
                    else {
                        if (((n = o.filter[e[l].type].apply(null, e[l].matches)), n[b])) {
                            for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
                            return wt(
                                l > 1 && bt(f),
                                l > 1 &&
                                yt(
                                    e
                                        .slice(0, l - 1)
                                        .concat({ value: " " === e[l - 2].type ? "*" : "" })
                                ).replace(z, "$1"),
                                n,
                                r > l && Tt(e.slice(l, r)),
                                i > r && Tt((e = e.slice(r))),
                                i > r && yt(e)
                            );
                        }
                        f.push(n);
                    }
                return bt(f);
            }
            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function (s, l, c, p, d) {
                        var h,
                            g,
                            m,
                            y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || (a && o.find.TAG("*", (d && l.parentNode) || l)),
                            k = (T += null == C ? 1 : Math.random() || 0.1);
                        for (w && ((u = l !== f && l), (i = n)); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while ((m = e[g++]))
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break;
                                    }
                                w && ((T = k), (i = ++n));
                            }
                            r && ((h = !m && h) && v--, s && x.push(h));
                        }
                        if (((v += b), r && b !== v)) {
                            g = 0;
                            while ((m = t[g++])) m(x, y, l, c);
                            if (s) {
                                if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y);
                            }
                            M.apply(p, y),
                            w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
                        }
                        return w && ((T = k), (u = C)), x;
                    };
                return r ? lt(s) : s;
            }
            l = at.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), (n = t.length);
                    while (n--) (o = Tt(t[n])), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r));
                }
                return o;
            };
            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n;
            }
            function kt(e, t, n, i) {
                var a,
                    s,
                    u,
                    c,
                    p,
                    f = mt(e);
                if (!i && 1 === f.length) {
                    if (
                        ((s = f[0] = f[0].slice(0)),
                        s.length > 2 &&
                        "ID" === (u = s[0]).type &&
                        r.getById &&
                        9 === t.nodeType &&
                        h &&
                        o.relative[s[1].type])
                    ) {
                        if (
                            ((t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0]), !t)
                        )
                            return n;
                        e = e.slice(s.shift().value.length);
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (((u = s[a]), o.relative[(c = u.type)])) break;
                        if (
                            (p = o.find[c]) &&
                            (i = p(
                                u.matches[0].replace(rt, it),
                                (V.test(s[0].type) && t.parentNode) || t
                            ))
                        ) {
                            if ((s.splice(a, 1), (e = i.length && yt(s)), !e))
                                return M.apply(n, i), n;
                            break;
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n;
            }
            (r.sortStable = b.split("").sort(A).join("") === b),
                (r.detectDuplicates = S),
                p(),
                (r.sortDetached = ut(function (e) {
                    return 1 & e.compareDocumentPosition(f.createElement("div"));
                })),
            ut(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
            ct("type|href|height|width", function (e, n, r) {
                return r
                    ? t
                    : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
            }),
            (r.attributes &&
                ut(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
            ct("value", function (e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase()
                    ? t
                    : e.defaultValue;
            }),
            ut(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            ct(B, function (e, n, r) {
                var i;
                return r
                    ? t
                    : (i = e.getAttributeNode(n)) && i.specified
                        ? i.value
                        : e[n] === !0
                            ? n.toLowerCase()
                            : null;
            }),
                (x.find = at),
                (x.expr = at.selectors),
                (x.expr[":"] = x.expr.pseudos),
                (x.unique = at.uniqueSort),
                (x.text = at.getText),
                (x.isXMLDoc = at.isXML),
                (x.contains = at.contains);
        })(e);
    var O = {};
    function F(e) {
        var t = (O[e] = {});
        return (
            x.each(e.match(T) || [], function (e, n) {
                t[n] = !0;
            }),
                t
        );
    }
    (x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n,
            r,
            i,
            o,
            a,
            s,
            l = [],
            u = !e.once && [],
            c = function (t) {
                for (
                    r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0;
                    l && o > a;
                    a++
                )
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break;
                    }
                (n = !1),
                l && (u ? u.length && c(u.shift()) : r ? (l = []) : p.disable());
            },
            p = {
                add: function () {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function (t, n) {
                                var r = x.type(n);
                                "function" === r
                                    ? (e.unique && p.has(n)) || l.push(n)
                                    : n && n.length && "string" !== r && i(n);
                            });
                        })(arguments),
                            n ? (o = l.length) : r && ((s = t), c(r));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        l &&
                        x.each(arguments, function (e, t) {
                            var r;
                            while ((r = x.inArray(t, l, r)) > -1)
                                l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
                        }),
                            this
                    );
                },
                has: function (e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
                },
                empty: function () {
                    return (l = []), (o = 0), this;
                },
                disable: function () {
                    return (l = u = r = t), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (u = t), r || p.disable(), this;
                },
                locked: function () {
                    return !u;
                },
                fireWith: function (e, t) {
                    return (
                        !l ||
                        (i && !u) ||
                        ((t = t || []),
                            (t = [e, t.slice ? t.slice() : t]),
                            n ? u.push(t) : c(t)),
                            this
                    );
                },
                fire: function () {
                    return p.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return p;
    }),
        x.extend({
            Deferred: function (e) {
                var t = [
                        ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", x.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return x
                                .Deferred(function (n) {
                                    x.each(t, function (t, o) {
                                        var a = o[0],
                                            s = x.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = s && s.apply(this, arguments);
                                            e && x.isFunction(e.promise)
                                                ? e
                                                    .promise()
                                                    .done(n.resolve)
                                                    .fail(n.reject)
                                                    .progress(n.notify)
                                                : n[a + "With"](
                                                    this === r ? n.promise() : this,
                                                    s ? [e] : arguments
                                                );
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? x.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                        x.each(t, function (e, o) {
                            var a = o[2],
                                s = o[3];
                            (r[o[1]] = a.add),
                            s &&
                            a.add(
                                function () {
                                    n = s;
                                },
                                t[1 ^ e][2].disable,
                                t[2][2].lock
                            ),
                                (i[o[0]] = function () {
                                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                                }),
                                (i[o[0] + "With"] = a.fireWith);
                        }),
                        r.promise(i),
                    e && e.call(i, i),
                        i
                );
            },
            when: function (e) {
                var t = 0,
                    n = g.call(arguments),
                    r = n.length,
                    i = 1 !== r || (e && x.isFunction(e.promise)) ? r : 0,
                    o = 1 === i ? e : x.Deferred(),
                    a = function (e, t, n) {
                        return function (r) {
                            (t[e] = this),
                                (n[e] = arguments.length > 1 ? g.call(arguments) : r),
                                n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                        };
                    },
                    s,
                    l,
                    u;
                if (r > 1)
                    for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)
                        n[t] && x.isFunction(n[t].promise)
                            ? n[t]
                                .promise()
                                .done(a(t, u, n))
                                .fail(o.reject)
                                .progress(a(t, l, s))
                            : --i;
                return i || o.resolveWith(u, n), o.promise();
            },
        }),
        (x.support = (function (t) {
            var n,
                r,
                o,
                s,
                l,
                u,
                c,
                p,
                f,
                d = a.createElement("div");
            if (
                (d.setAttribute("className", "t"),
                    (d.innerHTML =
                        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                    (n = d.getElementsByTagName("*") || []),
                    (r = d.getElementsByTagName("a")[0]),
                !r || !r.style || !n.length)
            )
                return t;
            (s = a.createElement("select")),
                (u = s.appendChild(a.createElement("option"))),
                (o = d.getElementsByTagName("input")[0]),
                (r.style.cssText = "top:1px;float:left;opacity:.5"),
                (t.getSetAttribute = "t" !== d.className),
                (t.leadingWhitespace = 3 === d.firstChild.nodeType),
                (t.tbody = !d.getElementsByTagName("tbody").length),
                (t.htmlSerialize = !!d.getElementsByTagName("link").length),
                (t.style = /top/.test(r.getAttribute("style"))),
                (t.hrefNormalized = "/a" === r.getAttribute("href")),
                (t.opacity = /^0.5/.test(r.style.opacity)),
                (t.cssFloat = !!r.style.cssFloat),
                (t.checkOn = !!o.value),
                (t.optSelected = u.selected),
                (t.enctype = !!a.createElement("form").enctype),
                (t.html5Clone =
                    "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML),
                (t.inlineBlockNeedsLayout = !1),
                (t.shrinkWrapBlocks = !1),
                (t.pixelPosition = !1),
                (t.deleteExpando = !0),
                (t.noCloneEvent = !0),
                (t.reliableMarginRight = !0),
                (t.boxSizingReliable = !0),
                (o.checked = !0),
                (t.noCloneChecked = o.cloneNode(!0).checked),
                (s.disabled = !0),
                (t.optDisabled = !u.disabled);
            try {
                delete d.test;
            } catch (h) {
                t.deleteExpando = !1;
            }
            (o = a.createElement("input")),
                o.setAttribute("value", ""),
                (t.input = "" === o.getAttribute("value")),
                (o.value = "t"),
                o.setAttribute("type", "radio"),
                (t.radioValue = "t" === o.value),
                o.setAttribute("checked", "t"),
                o.setAttribute("name", "t"),
                (l = a.createDocumentFragment()),
                l.appendChild(o),
                (t.appendChecked = o.checked),
                (t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked),
            d.attachEvent &&
            (d.attachEvent("onclick", function () {
                t.noCloneEvent = !1;
            }),
                d.cloneNode(!0).click());
            for (f in { submit: !0, change: !0, focusin: !0 })
                d.setAttribute((c = "on" + f), "t"),
                    (t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1);
            (d.style.backgroundClip = "content-box"),
                (d.cloneNode(!0).style.backgroundClip = ""),
                (t.clearCloneStyle = "content-box" === d.style.backgroundClip);
            for (f in x(t)) break;
            return (
                (t.ownLast = "0" !== f),
                    x(function () {
                        var n,
                            r,
                            o,
                            s =
                                "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                            l = a.getElementsByTagName("body")[0];
                        l &&
                        ((n = a.createElement("div")),
                            (n.style.cssText =
                                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
                            l.appendChild(n).appendChild(d),
                            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                            (o = d.getElementsByTagName("td")),
                            (o[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
                            (p = 0 === o[0].offsetHeight),
                            (o[0].style.display = ""),
                            (o[1].style.display = "none"),
                            (t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight),
                            (d.innerHTML = ""),
                            (d.style.cssText =
                                "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
                            x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
                                t.boxSizing = 4 === d.offsetWidth;
                            }),
                        e.getComputedStyle &&
                        ((t.pixelPosition =
                            "1%" !== (e.getComputedStyle(d, null) || {}).top),
                            (t.boxSizingReliable =
                                "4px" ===
                                (e.getComputedStyle(d, null) || { width: "4px" }).width),
                            (r = d.appendChild(a.createElement("div"))),
                            (r.style.cssText = d.style.cssText = s),
                            (r.style.marginRight = r.style.width = "0"),
                            (d.style.width = "1px"),
                            (t.reliableMarginRight = !parseFloat(
                                (e.getComputedStyle(r, null) || {}).marginRight
                            ))),
                        typeof d.style.zoom !== i &&
                        ((d.innerHTML = ""),
                            (d.style.cssText =
                                s + "width:1px;padding:1px;display:inline;zoom:1"),
                            (t.inlineBlockNeedsLayout = 3 === d.offsetWidth),
                            (d.style.display = "block"),
                            (d.innerHTML = "<div></div>"),
                            (d.firstChild.style.width = "5px"),
                            (t.shrinkWrapBlocks = 3 !== d.offsetWidth),
                        t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
                            l.removeChild(n),
                            (n = d = o = r = null));
                    }),
                    (n = s = l = u = r = o = null),
                    t
            );
        })({}));
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o,
                a,
                s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if ((c && u[c] && (i || u[c].data)) || r !== t || "string" != typeof n)
                return (
                    c || (c = l ? (e[s] = p.pop() || x.guid++) : s),
                    u[c] || (u[c] = l ? {} : { toJSON: x.noop }),
                    ("object" == typeof n || "function" == typeof n) &&
                    (i
                        ? (u[c] = x.extend(u[c], n))
                        : (u[c].data = x.extend(u[c].data, n))),
                        (a = u[c]),
                    i || (a.data || (a.data = {}), (a = a.data)),
                    r !== t && (a[x.camelCase(n)] = r),
                        "string" == typeof n
                            ? ((o = a[n]), null == o && (o = a[x.camelCase(n)]))
                            : (o = a),
                        o
                );
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r,
                i,
                o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t)
                        ? (t = t.concat(x.map(t, x.camelCase)))
                        : t in r
                            ? (t = [t])
                            : ((t = x.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
                        (i = t.length);
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, I(a[s]))) &&
                (o
                    ? x.cleanData([e], !0)
                    : x.support.deleteExpando || a != a.window
                        ? delete a[s]
                        : (a[s] = null));
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (e) {
            return (
                (e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]), !!e && !I(e)
            );
        },
        data: function (e, t, n) {
            return R(e, t, n);
        },
        removeData: function (e, t) {
            return W(e, t);
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0);
        },
        _removeData: function (e, t) {
            return W(e, t, !0);
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || (t !== !0 && e.getAttribute("classid") === t);
        },
    }),
        x.fn.extend({
            data: function (e, n) {
                var r,
                    i,
                    o = null,
                    a = 0,
                    s = this[0];
                if (e === t) {
                    if (
                        this.length &&
                        ((o = x.data(s)), 1 === s.nodeType && !x._data(s, "parsedAttrs"))
                    ) {
                        for (r = s.attributes; r.length > a; a++)
                            (i = r[a].name),
                            0 === i.indexOf("data-") &&
                            ((i = x.camelCase(i.slice(5))), $(s, i, o[i]));
                        x._data(s, "parsedAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof e
                    ? this.each(function () {
                        x.data(this, e);
                    })
                    : arguments.length > 1
                        ? this.each(function () {
                            x.data(this, e, n);
                        })
                        : s
                            ? $(s, e, x.data(s, e))
                            : null;
            },
            removeData: function (e) {
                return this.each(function () {
                    x.removeData(this, e);
                });
            },
        });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (((r = e.getAttribute(i)), "string" == typeof r)) {
                try {
                    r =
                        "true" === r
                            ? !0
                            : "false" === r
                                ? !1
                                : "null" === r
                                    ? null
                                    : +r + "" === r
                                        ? +r
                                        : B.test(r)
                                            ? x.parseJSON(r)
                                            : r;
                } catch (o) {}
                x.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    x.extend({
        queue: function (e, n, r) {
            var i;
            return e
                ? ((n = (n || "fx") + "queue"),
                    (i = x._data(e, n)),
                r &&
                (!i || x.isArray(r)
                    ? (i = x._data(e, n, x.makeArray(r)))
                    : i.push(r)),
                i || [])
                : t;
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function () {
                    x.dequeue(e, t);
                };
            "inprogress" === i && ((i = n.shift()), r--),
            i &&
            ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, a, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
                x._data(e, n) ||
                x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function () {
                        x._removeData(e, t + "queue"), x._removeData(e, n);
                    }),
                })
            );
        },
    }),
        x.fn.extend({
            queue: function (e, n) {
                var r = 2;
                return (
                    "string" != typeof e && ((n = e), (e = "fx"), r--),
                        r > arguments.length
                            ? x.queue(this[0], e)
                            : n === t
                                ? this
                                : this.each(function () {
                                    var t = x.queue(this, e, n);
                                    x._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
                                })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    x.dequeue(this, e);
                });
            },
            delay: function (e, t) {
                return (
                    (e = x.fx ? x.fx.speeds[e] || e : e),
                        (t = t || "fx"),
                        this.queue(t, function (t, n) {
                            var r = setTimeout(t, e);
                            n.stop = function () {
                                clearTimeout(r);
                            };
                        })
                );
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, n) {
                var r,
                    i = 1,
                    o = x.Deferred(),
                    a = this,
                    s = this.length,
                    l = function () {
                        --i || o.resolveWith(a, [a]);
                    };
                "string" != typeof e && ((n = e), (e = t)), (e = e || "fx");
                while (s--)
                    (r = x._data(a[s], e + "queueHooks")),
                    r && r.empty && (i++, r.empty.add(l));
                return l(), o.promise(n);
            },
        });
    var z,
        X,
        U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e);
            });
        },
        prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return (
                (e = x.propFix[e] || e),
                    this.each(function () {
                        try {
                            (this[e] = t), delete this[e];
                        } catch (n) {}
                    })
            );
        },
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function (t) {
                    x(this).addClass(e.call(this, t, this.className));
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (
                        ((n = this[a]),
                            (r =
                                1 === n.nodeType &&
                                (n.className ? (" " + n.className + " ").replace(U, " ") : " ")))
                    ) {
                        o = 0;
                        while ((i = t[o++])) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = 0,
                s = this.length,
                l = 0 === arguments.length || ("string" == typeof e && e);
            if (x.isFunction(e))
                return this.each(function (t) {
                    x(this).removeClass(e.call(this, t, this.className));
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (
                        ((n = this[a]),
                            (r =
                                1 === n.nodeType &&
                                (n.className ? (" " + n.className + " ").replace(U, " ") : "")))
                    ) {
                        o = 0;
                        while ((i = t[o++]))
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : "";
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : x.isFunction(e)
                    ? this.each(function (n) {
                        x(this).toggleClass(e.call(this, n, this.className, t), t);
                    })
                    : this.each(function () {
                        if ("string" === n) {
                            var t,
                                r = 0,
                                o = x(this),
                                a = e.match(T) || [];
                            while ((t = a[r++]))
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || ""));
                    });
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (
                    1 === this[n].nodeType &&
                    (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0
                )
                    return !0;
            return !1;
        },
        val: function (e) {
            var n,
                r,
                i,
                o = this[0];
            {
                if (arguments.length)
                    return (
                        (i = x.isFunction(e)),
                            this.each(function (n) {
                                var o;
                                1 === this.nodeType &&
                                ((o = i ? e.call(this, n, x(this).val()) : e),
                                    null == o
                                        ? (o = "")
                                        : "number" == typeof o
                                            ? (o += "")
                                            : x.isArray(o) &&
                                            (o = x.map(o, function (e) {
                                                return null == e ? "" : e + "";
                                            })),
                                    (r =
                                        x.valHooks[this.type] ||
                                        x.valHooks[this.nodeName.toLowerCase()]),
                                (r && "set" in r && r.set(this, o, "value") !== t) ||
                                (this.value = o));
                            })
                    );
                if (o)
                    return (
                        (r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]),
                            r && "get" in r && (n = r.get(o, "value")) !== t
                                ? n
                                : ((n = o.value),
                                    "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
                    );
            }
        },
    }),
        x.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = x.find.attr(e, "value");
                        return null != t ? t : e.text;
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || 0 > i,
                            a = o ? null : [],
                            s = o ? i + 1 : r.length,
                            l = 0 > i ? s : o ? i : 0;
                        for (; s > l; l++)
                            if (
                                ((n = r[l]),
                                    !(
                                        (!n.selected && l !== i) ||
                                        (x.support.optDisabled
                                            ? n.disabled
                                            : null !== n.getAttribute("disabled")) ||
                                        (n.parentNode.disabled &&
                                            x.nodeName(n.parentNode, "optgroup"))
                                    ))
                            ) {
                                if (((t = x(n).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = x.makeArray(t),
                            a = i.length;
                        while (a--)
                            (r = i[a]),
                            (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
            attr: function (e, n, r) {
                var o,
                    a,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return typeof e.getAttribute === i
                        ? x.prop(e, n, r)
                        : ((1 === s && x.isXMLDoc(e)) ||
                        ((n = n.toLowerCase()),
                            (o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z))),
                            r === t
                                ? o && "get" in o && null !== (a = o.get(e, n))
                                    ? a
                                    : ((a = x.find.attr(e, n)), null == a ? t : a)
                                : null !== r
                                    ? o && "set" in o && (a = o.set(e, r, n)) !== t
                                        ? a
                                        : (e.setAttribute(n, r + ""), r)
                                    : (x.removeAttr(e, n), t));
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(T);
                if (o && 1 === e.nodeType)
                    while ((n = o[i++]))
                        (r = x.propFix[n] || n),
                            x.expr.match.bool.test(n)
                                ? (K && Q) || !G.test(n)
                                    ? (e[r] = !1)
                                    : (e[x.camelCase("default-" + n)] = e[r] = !1)
                                : x.attr(e, n, ""),
                            e.removeAttribute(Q ? n : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (
                            !x.support.radioValue &&
                            "radio" === t &&
                            x.nodeName(e, "input")
                        ) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, n, r) {
                var i,
                    o,
                    a,
                    s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return (
                        (a = 1 !== s || !x.isXMLDoc(e)),
                        a && ((n = x.propFix[n] || n), (o = x.propHooks[n])),
                            r !== t
                                ? o && "set" in o && (i = o.set(e, r, n)) !== t
                                    ? i
                                    : (e[n] = r)
                                : o && "get" in o && null !== (i = o.get(e, n))
                                    ? i
                                    : e[n]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = x.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : Y.test(e.nodeName) || (J.test(e.nodeName) && e.href)
                                ? 0
                                : -1;
                    },
                },
            },
        }),
        (X = {
            set: function (e, t, n) {
                return (
                    t === !1
                        ? x.removeAttr(e, n)
                        : (K && Q) || !G.test(n)
                            ? e.setAttribute((!Q && x.propFix[n]) || n, n)
                            : (e[x.camelCase("default-" + n)] = e[n] = !0),
                        n
                );
            },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
            var r = x.expr.attrHandle[n] || x.find.attr;
            x.expr.attrHandle[n] =
                (K && Q) || !G.test(n)
                    ? function (e, n, i) {
                        var o = x.expr.attrHandle[n],
                            a = i
                                ? t
                                : (x.expr.attrHandle[n] = t) != r(e, n, i)
                                    ? n.toLowerCase()
                                    : null;
                        return (x.expr.attrHandle[n] = o), a;
                    }
                    : function (e, n, r) {
                        return r
                            ? t
                            : e[x.camelCase("default-" + n)]
                                ? n.toLowerCase()
                                : null;
                    };
        }),
    (K && Q) ||
    (x.attrHooks.value = {
        set: function (e, n, r) {
            return x.nodeName(e, "input")
                ? ((e.defaultValue = n), t)
                : z && z.set(e, n, r);
        },
    }),
    Q ||
    ((z = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return (
                i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
                    (i.value = n += ""),
                    "value" === r || n === e.getAttribute(r) ? n : t
            );
        },
    }),
        (x.expr.attrHandle.id =
            x.expr.attrHandle.name =
                x.expr.attrHandle.coords =
                    function (e, n, r) {
                        var i;
                        return r
                            ? t
                            : (i = e.getAttributeNode(n)) && "" !== i.value
                                ? i.value
                                : null;
                    }),
        (x.valHooks.button = {
            get: function (e, n) {
                var r = e.getAttributeNode(n);
                return r && r.specified ? r.value : t;
            },
            set: z.set,
        }),
        (x.attrHooks.contenteditable = {
            set: function (e, t, n) {
                z.set(e, "" === t ? !1 : t, n);
            },
        }),
        x.each(["width", "height"], function (e, n) {
            x.attrHooks[n] = {
                set: function (e, r) {
                    return "" === r ? (e.setAttribute(n, "auto"), r) : t;
                },
            };
        })),
    x.support.hrefNormalized ||
    x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4);
            },
        };
    }),
    x.support.style ||
    (x.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t;
        },
        set: function (e, t) {
            return (e.style.cssText = t + "");
        },
    }),
    x.support.optSelected ||
    (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return (
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
            );
        },
    }),
        x.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                x.propFix[this.toLowerCase()] = this;
            }
        ),
    x.support.enctype || (x.propFix.enctype = "encoding"),
        x.each(["radio", "checkbox"], function () {
            (x.valHooks[this] = {
                set: function (e, n) {
                    return x.isArray(n) ? (e.checked = x.inArray(x(e).val(), n) >= 0) : t;
                },
            }),
            x.support.checkOn ||
            (x.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            });
        });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0;
    }
    function ot() {
        return !1;
    }
    function at() {
        try {
            return a.activeElement;
        } catch (e) {}
    }
    (x.event = {
        global: {},
        add: function (e, n, r, o, a) {
            var s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g,
                m,
                y,
                v = x._data(e);
            if (v) {
                r.handler && ((c = r), (r = c.handler), (a = c.selector)),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) ||
                ((f = v.handle =
                    function (e) {
                        return typeof x === i || (e && x.event.triggered === e.type)
                            ? t
                            : x.event.dispatch.apply(f.elem, arguments);
                    }),
                    (f.elem = e)),
                    (n = (n || "").match(T) || [""]),
                    (u = n.length);
                while (u--)
                    (s = rt.exec(n[u]) || []),
                        (g = y = s[1]),
                        (m = (s[2] || "").split(".").sort()),
                    g &&
                    ((p = x.event.special[g] || {}),
                        (g = (a ? p.delegateType : p.bindType) || g),
                        (p = x.event.special[g] || {}),
                        (d = x.extend(
                            {
                                type: g,
                                origType: y,
                                data: o,
                                handler: r,
                                guid: r.guid,
                                selector: a,
                                needsContext: a && x.expr.match.needsContext.test(a),
                                namespace: m.join("."),
                            },
                            c
                        )),
                    (h = l[g]) ||
                    ((h = l[g] = []),
                        (h.delegateCount = 0),
                    (p.setup && p.setup.call(e, o, m, f) !== !1) ||
                    (e.addEventListener
                        ? e.addEventListener(g, f, !1)
                        : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add &&
                    (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
                        a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                        (x.event.global[g] = !0));
                e = null;
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                c,
                p,
                f,
                d,
                h,
                g,
                m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                (t = (t || "").match(T) || [""]), (u = t.length);
                while (u--)
                    if (
                        ((s = rt.exec(t[u]) || []),
                            (d = g = s[1]),
                            (h = (s[2] || "").split(".").sort()),
                            d)
                    ) {
                        (p = x.event.special[d] || {}),
                            (d = (r ? p.delegateType : p.bindType) || d),
                            (f = c[d] || []),
                            (s =
                                s[2] &&
                                RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                            (l = o = f.length);
                        while (o--)
                            (a = f[o]),
                            (!i && g !== a.origType) ||
                            (n && n.guid !== a.guid) ||
                            (s && !s.test(a.namespace)) ||
                            (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                            (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a));
                        l &&
                        !f.length &&
                        ((p.teardown && p.teardown.call(e, h, m.handle) !== !1) ||
                        x.removeEvent(e, d, m.handle),
                            delete c[d]);
                    } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
            }
        },
        trigger: function (n, r, i, o) {
            var s,
                l,
                u,
                c,
                p,
                f,
                d,
                h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (
                ((u = f = i = i || a),
                3 !== i.nodeType &&
                8 !== i.nodeType &&
                !nt.test(g + x.event.triggered) &&
                (g.indexOf(".") >= 0 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
                    (l = 0 > g.indexOf(":") && "on" + g),
                    (n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n)),
                    (n.isTrigger = o ? 2 : 3),
                    (n.namespace = m.join(".")),
                    (n.namespace_re = n.namespace
                        ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                        : null),
                    (n.result = t),
                n.target || (n.target = i),
                    (r = null == r ? [n] : x.makeArray(r, [n])),
                    (p = x.event.special[g] || {}),
                o || !p.trigger || p.trigger.apply(i, r) !== !1))
            ) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (
                        c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode);
                        u;
                        u = u.parentNode
                    )
                        h.push(u), (f = u);
                    f === (i.ownerDocument || a) &&
                    h.push(f.defaultView || f.parentWindow || e);
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())
                    (n.type = d > 1 ? c : p.bindType || g),
                        (s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle")),
                    s && s.apply(u, r),
                        (s = l && u[l]),
                    s &&
                    x.acceptData(u) &&
                    s.apply &&
                    s.apply(u, r) === !1 &&
                    n.preventDefault();
                if (
                    ((n.type = g),
                    !o &&
                    !n.isDefaultPrevented() &&
                    (!p._default || p._default.apply(h.pop(), r) === !1) &&
                    x.acceptData(i) &&
                    l &&
                    i[g] &&
                    !x.isWindow(i))
                ) {
                    (f = i[l]), f && (i[l] = null), (x.event.triggered = g);
                    try {
                        i[g]();
                    } catch (y) {}
                    (x.event.triggered = t), f && (i[l] = f);
                }
                return n.result;
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var n,
                r,
                i,
                o,
                a,
                s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (
                ((l[0] = e),
                    (e.delegateTarget = this),
                !c.preDispatch || c.preDispatch.call(this, e) !== !1)
            ) {
                (s = x.event.handlers.call(this, e, u)), (n = 0);
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    (e.currentTarget = o.elem), (a = 0);
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                        ((e.handleObj = i),
                            (e.data = i.data),
                            (r = (
                                (x.event.special[i.origType] || {}).handle || i.handler
                            ).apply(o.elem, l)),
                        r !== t &&
                        (e.result = r) === !1 &&
                        (e.preventDefault(), e.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, n) {
            var r,
                i,
                o,
                a,
                s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++)
                            (i = n[a]),
                                (r = i.selector + " "),
                            o[r] === t &&
                            (o[r] = i.needsContext
                                ? x(r, this).index(u) >= 0
                                : x.find(r, this, null, [u]).length),
                            o[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o });
                    }
            return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
        },
        fix: function (e) {
            if (e[x.expando]) return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                s = this.fixHooks[i];
            s ||
            (this.fixHooks[i] = s =
                tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
                (r = s.props ? this.props.concat(s.props) : this.props),
                (e = new x.Event(o)),
                (t = r.length);
            while (t--) (n = r[t]), (e[n] = o[n]);
            return (
                e.target || (e.target = o.srcElement || a),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                    (e.metaKey = !!e.metaKey),
                    s.filter ? s.filter(e, o) : e
            );
        },
        props:
            "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                " "
            ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return (
                    null == e.which &&
                    (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                );
            },
        },
        mouseHooks: {
            props:
                "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                    " "
                ),
            filter: function (e, n) {
                var r,
                    i,
                    o,
                    s = n.button,
                    l = n.fromElement;
                return (
                    null == e.pageX &&
                    null != n.clientX &&
                    ((i = e.target.ownerDocument || a),
                        (o = i.documentElement),
                        (r = i.body),
                        (e.pageX =
                            n.clientX +
                            ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
                            ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
                        (e.pageY =
                            n.clientY +
                            ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
                            ((o && o.clientTop) || (r && r.clientTop) || 0))),
                    !e.relatedTarget &&
                    l &&
                    (e.relatedTarget = l === e.target ? n.toElement : l),
                    e.which ||
                    s === t ||
                    (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                        e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== at() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === at() && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return x.nodeName(this, "input") &&
                    "checkbox" === this.type &&
                    this.click
                        ? (this.click(), !1)
                        : t;
                },
                _default: function (e) {
                    return x.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {},
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (x.removeEvent = a.removeEventListener
            ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
            }
            : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent &&
                (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
            }),
        (x.Event = function (e, n) {
            return this instanceof x.Event
                ? (e && e.type
                    ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            e.returnValue === !1 ||
                            (e.getPreventDefault && e.getPreventDefault())
                                ? it
                                : ot))
                    : (this.type = e),
                n && x.extend(this, n),
                    (this.timeStamp = (e && e.timeStamp) || x.now()),
                    (this[x.expando] = !0),
                    t)
                : new x.Event(e, n);
        }),
        (x.Event.prototype = {
            isDefaultPrevented: ot,
            isPropagationStopped: ot,
            isImmediatePropagationStopped: ot,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = it),
                e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = it),
                e &&
                (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                (this.isImmediatePropagationStopped = it), this.stopPropagation();
            },
        }),
        x.each(
            { mouseenter: "mouseover", mouseleave: "mouseout" },
            function (e, t) {
                x.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (!i || (i !== r && !x.contains(r, i))) &&
                            ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                                n
                        );
                    },
                };
            }
        ),
    x.support.submitBubbles ||
    (x.event.special.submit = {
        setup: function () {
            return x.nodeName(this, "form")
                ? !1
                : (x.event.add(
                    this,
                    "click._submit keypress._submit",
                    function (e) {
                        var n = e.target,
                            r =
                                x.nodeName(n, "input") || x.nodeName(n, "button")
                                    ? n.form
                                    : t;
                        r &&
                        !x._data(r, "submitBubbles") &&
                        (x.event.add(r, "submit._submit", function (e) {
                            e._submit_bubble = !0;
                        }),
                            x._data(r, "submitBubbles", !0));
                    }
                ),
                    t);
        },
        postDispatch: function (e) {
            e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
            !e.isTrigger &&
            x.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
            return x.nodeName(this, "form")
                ? !1
                : (x.event.remove(this, "._submit"), t);
        },
    }),
    x.support.changeBubbles ||
    (x.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName)
                ? (("checkbox" === this.type || "radio" === this.type) &&
                (x.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                    x.event.add(this, "click._change", function (e) {
                        this._just_changed &&
                        !e.isTrigger &&
                        (this._just_changed = !1),
                            x.event.simulate("change", this, e, !0);
                    })),
                    !1)
                : (x.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    Z.test(t.nodeName) &&
                    !x._data(t, "changeBubbles") &&
                    (x.event.add(t, "change._change", function (e) {
                        !this.parentNode ||
                        e.isSimulated ||
                        e.isTrigger ||
                        x.event.simulate("change", this.parentNode, e, !0);
                    }),
                        x._data(t, "changeBubbles", !0));
                }),
                    t);
        },
        handle: function (e) {
            var n = e.target;
            return this !== n ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== n.type && "checkbox" !== n.type)
                ? e.handleObj.handler.apply(this, arguments)
                : t;
        },
        teardown: function () {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName);
        },
    }),
    x.support.focusinBubbles ||
    x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
            r = function (e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0);
            };
        x.event.special[t] = {
            setup: function () {
                0 === n++ && a.addEventListener(e, r, !0);
            },
            teardown: function () {
                0 === --n && a.removeEventListener(e, r, !0);
            },
        };
    }),
        x.fn.extend({
            on: function (e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && ((r = r || n), (n = t));
                    for (a in e) this.on(a, n, r, e[a], o);
                    return this;
                }
                if (
                    (null == r && null == i
                        ? ((i = n), (r = n = t))
                        : null == i &&
                        ("string" == typeof n
                            ? ((i = r), (r = t))
                            : ((i = r), (r = n), (n = t))),
                    i === !1)
                )
                    i = ot;
                else if (!i) return this;
                return (
                    1 === o &&
                    ((s = i),
                        (i = function (e) {
                            return x().off(e), s.apply(this, arguments);
                        }),
                        (i.guid = s.guid || (s.guid = x.guid++))),
                        this.each(function () {
                            x.event.add(this, e, i, r, n);
                        })
                );
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1);
            },
            off: function (e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                            x(e.delegateTarget).off(
                                i.namespace ? i.origType + "." + i.namespace : i.origType,
                                i.selector,
                                i.handler
                            ),
                            this
                    );
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this;
                }
                return (
                    (n === !1 || "function" == typeof n) && ((r = n), (n = t)),
                    r === !1 && (r = ot),
                        this.each(function () {
                            x.event.remove(this, e, r, n);
                        })
                );
            },
            trigger: function (e, t) {
                return this.each(function () {
                    x.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, n) {
                var r = this[0];
                return r ? x.event.trigger(e, n, r, !0) : t;
            },
        });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = { children: !0, contents: !0, next: !0, prev: !0 };
    x.fn.extend({
        find: function (e) {
            var t,
                n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e)
                return this.pushStack(
                    x(e).filter(function () {
                        for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0;
                    })
                );
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return (
                (n = this.pushStack(i > 1 ? x.unique(n) : n)),
                    (n.selector = this.selector ? this.selector + " " + e : e),
                    n
            );
        },
        has: function (e) {
            var t,
                n = x(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0;
            });
        },
        not: function (e) {
            return this.pushStack(ft(this, e || [], !0));
        },
        filter: function (e) {
            return this.pushStack(ft(this, e || [], !1));
        },
        is: function (e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1)
                .length;
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                        11 > n.nodeType &&
                        (a
                            ? a.index(n) > -1
                            : 1 === n.nodeType && x.find.matchesSelector(n, e))
                    ) {
                        n = o.push(n);
                        break;
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? x.inArray(this[0], x(e))
                    : x.inArray(e.jquery ? e[0] : e, this)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (e, t) {
            var n =
                    "string" == typeof e
                        ? x(e, t)
                        : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function pt(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e;
    }
    x.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return x.dir(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return x.dir(e, "parentNode", n);
            },
            next: function (e) {
                return pt(e, "nextSibling");
            },
            prev: function (e) {
                return pt(e, "previousSibling");
            },
            nextAll: function (e) {
                return x.dir(e, "nextSibling");
            },
            prevAll: function (e) {
                return x.dir(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return x.dir(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return x.dir(e, "previousSibling", n);
            },
            siblings: function (e) {
                return x.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return x.sibling(e.firstChild);
            },
            contents: function (e) {
                return x.nodeName(e, "iframe")
                    ? e.contentDocument || e.contentWindow.document
                    : x.merge([], e.childNodes);
            },
        },
        function (e, t) {
            x.fn[e] = function (n, r) {
                var i = x.map(this, t, n);
                return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = x.filter(r, i)),
                    this.length > 1 &&
                    (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())),
                        this.pushStack(i)
                );
            };
        }
    ),
        x.extend({
            filter: function (e, t, n) {
                var r = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                        1 === t.length && 1 === r.nodeType
                            ? x.find.matchesSelector(r, e)
                                ? [r]
                                : []
                            : x.find.matches(
                                e,
                                x.grep(t, function (e) {
                                    return 1 === e.nodeType;
                                })
                            )
                );
            },
            dir: function (e, n, r) {
                var i = [],
                    o = e[n];
                while (
                    o &&
                    9 !== o.nodeType &&
                    (r === t || 1 !== o.nodeType || !x(o).is(r))
                    )
                    1 === o.nodeType && i.push(o), (o = o[n]);
                return i;
            },
            sibling: function (e, t) {
                var n = [];
                for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            },
        });
    function ft(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });
        if (t.nodeType)
            return x.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e);
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n;
        });
    }
    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n;
    }
    var ht =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    (At.optgroup = At.option),
        (At.tbody = At.tfoot = At.colgroup = At.caption = At.thead),
        (At.th = At.td),
        x.fn.extend({
            text: function (e) {
                return x.access(
                    this,
                    function (e) {
                        return e === t
                            ? x.text(this)
                            : this.empty().append(
                                ((this[0] && this[0].ownerDocument) || a).createTextNode(e)
                            );
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Lt(this, e);
                        t.appendChild(e);
                    }
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = Lt(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                var n,
                    r = e ? x.filter(e, this) : this,
                    i = 0;
                for (; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                    n.parentNode &&
                    (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                        n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                var e,
                    t = 0;
                for (; null != (e = this[t]); t++) {
                    1 === e.nodeType && x.cleanData(Ft(e, !1));
                    while (e.firstChild) e.removeChild(e.firstChild);
                    e.options && x.nodeName(e, "select") && (e.options.length = 0);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null == e ? !1 : e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return x.clone(this, e, t);
                        })
                );
            },
            html: function (e) {
                return x.access(
                    this,
                    function (e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t)
                            return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                        if (
                            !(
                                "string" != typeof e ||
                                Tt.test(e) ||
                                (!x.support.htmlSerialize && mt.test(e)) ||
                                (!x.support.leadingWhitespace && yt.test(e)) ||
                                At[(bt.exec(e) || ["", ""])[1].toLowerCase()]
                            )
                        ) {
                            e = e.replace(vt, "<$1></$2>");
                            try {
                                for (; i > r; r++)
                                    (n = this[r] || {}),
                                    1 === n.nodeType &&
                                    (x.cleanData(Ft(n, !1)), (n.innerHTML = e));
                                n = 0;
                            } catch (o) {}
                        }
                        n && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = x.map(this, function (e) {
                        return [e.nextSibling, e.parentNode];
                    }),
                    t = 0;
                return (
                    this.domManip(
                        arguments,
                        function (n) {
                            var r = e[t++],
                                i = e[t++];
                            i &&
                            (r && r.parentNode !== i && (r = this.nextSibling),
                                x(this).remove(),
                                i.insertBefore(n, r));
                        },
                        !0
                    ),
                        t ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (e, t, n) {
                e = d.apply([], e);
                var r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u = 0,
                    c = this.length,
                    p = this,
                    f = c - 1,
                    h = e[0],
                    g = x.isFunction(h);
                if (
                    g ||
                    (!(1 >= c || "string" != typeof h || x.support.checkClone) &&
                        Nt.test(h))
                )
                    return this.each(function (r) {
                        var i = p.eq(r);
                        g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
                    });
                if (
                    c &&
                    ((l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this)),
                        (r = l.firstChild),
                    1 === l.childNodes.length && (l = r),
                        r)
                ) {
                    for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)
                        (i = l),
                        u !== f &&
                        ((i = x.clone(i, !0, !0)), o && x.merge(a, Ft(i, "script"))),
                            t.call(this[u], i, u);
                    if (o)
                        for (
                            s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0;
                            o > u;
                            u++
                        )
                            (i = a[u]),
                            kt.test(i.type || "") &&
                            !x._data(i, "globalEval") &&
                            x.contains(s, i) &&
                            (i.src
                                ? x._evalUrl(i.src)
                                : x.globalEval(
                                    (i.text || i.textContent || i.innerHTML || "").replace(
                                        St,
                                        ""
                                    )
                                ));
                    l = r = null;
                }
                return this;
            },
        });
    function Lt(e, t) {
        return x.nodeName(e, "table") &&
        x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
    }
    function Ht(e) {
        return (e.type = (null !== x.find.attr(e, "type")) + "/" + e.type), e;
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function _t(e, t) {
        var n,
            r = 0;
        for (; null != (n = e[r]); r++)
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n,
                r,
                i,
                o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, (a.events = {});
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = x.extend({}, a.data));
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (
                ((n = t.nodeName.toLowerCase()),
                !x.support.noCloneEvent && t[x.expando])
            ) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando);
            }
            "script" === n && t.text !== e.text
                ? ((Ht(t).text = e.text), qt(t))
                : "object" === n
                    ? (t.parentNode && (t.outerHTML = e.outerHTML),
                    x.support.html5Clone &&
                    e.innerHTML &&
                    !x.trim(t.innerHTML) &&
                    (t.innerHTML = e.innerHTML))
                    : "input" === n && Ct.test(e.type)
                        ? ((t.defaultChecked = t.checked = e.checked),
                        t.value !== e.value && (t.value = e.value))
                        : "option" === n
                            ? (t.defaultSelected = t.selected = e.defaultSelected)
                            : ("input" === n || "textarea" === n) &&
                            (t.defaultValue = e.defaultValue);
        }
    }
    x.each(
        {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
        },
        function (e, t) {
            x.fn[e] = function (e) {
                var n,
                    r = 0,
                    i = [],
                    o = x(e),
                    a = o.length - 1;
                for (; a >= r; r++)
                    (n = r === a ? this : this.clone(!0)),
                        x(o[r])[t](n),
                        h.apply(i, n.get());
                return this.pushStack(i);
            };
        }
    );
    function Ft(e, n) {
        var r,
            o,
            a = 0,
            s =
                typeof e.getElementsByTagName !== i
                    ? e.getElementsByTagName(n || "*")
                    : typeof e.querySelectorAll !== i
                        ? e.querySelectorAll(n || "*")
                        : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || (n && x.nodeName(e, n)) ? x.merge([e], s) : s;
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked);
    }
    x.extend({
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l = x.contains(e.ownerDocument, e);
            if (
                (x.support.html5Clone ||
                x.isXMLDoc(e) ||
                !mt.test("<" + e.nodeName + ">")
                    ? (o = e.cloneNode(!0))
                    : ((Dt.innerHTML = e.outerHTML), Dt.removeChild((o = Dt.firstChild))),
                    !(
                        (x.support.noCloneEvent && x.support.noCloneChecked) ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        x.isXMLDoc(e)
                    ))
            )
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)
                    r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)
                        Mt(i, r[a]);
                else Mt(e, o);
            return (
                (r = Ft(o, "script")),
                r.length > 0 && _t(r, !l && Ft(e, "script")),
                    (r = s = i = null),
                    o
            );
        },
        buildFragment: function (e, t, n, r) {
            var i,
                o,
                a,
                s,
                l,
                u,
                c,
                p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (((o = e[h]), o || 0 === o))
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        (s = s || f.appendChild(t.createElement("div"))),
                            (l = (bt.exec(o) || ["", ""])[1].toLowerCase()),
                            (c = At[l] || At._default),
                            (s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2]),
                            (i = c[0]);
                        while (i--) s = s.lastChild;
                        if (
                            (!x.support.leadingWhitespace &&
                            yt.test(o) &&
                            d.push(t.createTextNode(yt.exec(o)[0])),
                                !x.support.tbody)
                        ) {
                            (o =
                                "table" !== l || xt.test(o)
                                    ? "<table>" !== c[1] || xt.test(o)
                                        ? 0
                                        : s
                                    : s.firstChild),
                                (i = o && o.childNodes.length);
                            while (i--)
                                x.nodeName((u = o.childNodes[i]), "tbody") &&
                                !u.childNodes.length &&
                                o.removeChild(u);
                        }
                        x.merge(d, s.childNodes), (s.textContent = "");
                        while (s.firstChild) s.removeChild(s.firstChild);
                        s = f.lastChild;
                    } else d.push(t.createTextNode(o));
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
                (h = 0);
            while ((o = d[h++]))
                if (
                    (!r || -1 === x.inArray(o, r)) &&
                    ((a = x.contains(o.ownerDocument, o)),
                        (s = Ft(f.appendChild(o), "script")),
                    a && _t(s),
                        n)
                ) {
                    i = 0;
                    while ((o = s[i++])) kt.test(o.type || "") && n.push(o);
                }
            return (s = null), f;
        },
        cleanData: function (e, t) {
            var n,
                r,
                o,
                a,
                s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && ((o = n[l]), (a = o && u[o]))) {
                    if (a.events)
                        for (r in a.events)
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] &&
                    (delete u[o],
                        c
                            ? delete n[l]
                            : typeof n.removeAttribute !== i
                                ? n.removeAttribute(l)
                                : (n[l] = null),
                        p.push(o));
                }
        },
        _evalUrl: function (e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0,
            });
        },
    }),
        x.fn.extend({
            wrapAll: function (e) {
                if (x.isFunction(e))
                    return this.each(function (t) {
                        x(this).wrapAll(e.call(this, t));
                    });
                if (this[0]) {
                    var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstChild && 1 === e.firstChild.nodeType)
                                    e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (e) {
                return x.isFunction(e)
                    ? this.each(function (t) {
                        x(this).wrapInner(e.call(this, t));
                    })
                    : this.each(function () {
                        var t = x(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = x.isFunction(e);
                return this.each(function (n) {
                    x(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        });
    var Pt,
        Rt,
        Wt,
        $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = { BODY: "block" },
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        Kt = { letterSpacing: 0, fontWeight: 400 },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) if (((t = en[i] + n), t in e)) return t;
        return r;
    }
    function nn(e, t) {
        return (
            (e = t || e),
            "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
        );
    }
    function rn(e, t) {
        var n,
            r,
            i,
            o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++)
            (r = e[a]),
            r.style &&
            ((o[a] = x._data(r, "olddisplay")),
                (n = r.style.display),
                t
                    ? (o[a] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display &&
                    nn(r) &&
                    (o[a] = x._data(r, "olddisplay", ln(r.nodeName))))
                    : o[a] ||
                    ((i = nn(r)),
                    ((n && "none" !== n) || !i) &&
                    x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)
            (r = e[a]),
            r.style &&
            ((t && "none" !== r.style.display && "" !== r.style.display) ||
                (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    x.fn.extend({
        css: function (e, n) {
            return x.access(
                this,
                function (e, n, r) {
                    var i,
                        o,
                        a = {},
                        s = 0;
                    if (x.isArray(n)) {
                        for (o = Rt(e), i = n.length; i > s; s++)
                            a[n[s]] = x.css(e, n[s], !1, o);
                        return a;
                    }
                    return r !== t ? x.style(e, n, r) : x.css(e, n);
                },
                e,
                n,
                arguments.length > 1
            );
        },
        show: function () {
            return rn(this, !0);
        },
        hide: function () {
            return rn(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                    nn(this) ? x(this).show() : x(this).hide();
                });
        },
    }),
        x.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Wt(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: { float: x.support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o,
                        a,
                        s,
                        l = x.camelCase(n),
                        u = e.style;
                    if (
                        ((n = x.cssProps[l] || (x.cssProps[l] = tn(u, l))),
                            (s = x.cssHooks[n] || x.cssHooks[l]),
                        r === t)
                    )
                        return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                    if (
                        ((a = typeof r),
                        "string" === a &&
                        (o = Jt.exec(r)) &&
                        ((r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n))),
                            (a = "number")),
                            !(
                                null == r ||
                                ("number" === a && isNaN(r)) ||
                                ("number" !== a || x.cssNumber[l] || (r += "px"),
                                x.support.clearCloneStyle ||
                                "" !== r ||
                                0 !== n.indexOf("background") ||
                                (u[n] = "inherit"),
                                s && "set" in s && (r = s.set(e, r, i)) === t)
                            ))
                    )
                        try {
                            u[n] = r;
                        } catch (c) {}
                }
            },
            css: function (e, n, r, i) {
                var o,
                    a,
                    s,
                    l = x.camelCase(n);
                return (
                    (n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l))),
                        (s = x.cssHooks[n] || x.cssHooks[l]),
                    s && "get" in s && (a = s.get(e, !0, r)),
                    a === t && (a = Wt(e, n, i)),
                    "normal" === a && n in Kt && (a = Kt[n]),
                        "" === r || r
                            ? ((o = parseFloat(a)), r === !0 || x.isNumeric(o) ? o || 0 : a)
                            : a
                );
            },
        }),
        e.getComputedStyle
            ? ((Rt = function (t) {
                return e.getComputedStyle(t, null);
            }),
                (Wt = function (e, n, r) {
                    var i,
                        o,
                        a,
                        s = r || Rt(e),
                        l = s ? s.getPropertyValue(n) || s[n] : t,
                        u = e.style;
                    return (
                        s &&
                        ("" !== l ||
                        x.contains(e.ownerDocument, e) ||
                        (l = x.style(e, n)),
                        Yt.test(l) &&
                        Ut.test(n) &&
                        ((i = u.width),
                            (o = u.minWidth),
                            (a = u.maxWidth),
                            (u.minWidth = u.maxWidth = u.width = l),
                            (l = s.width),
                            (u.width = i),
                            (u.minWidth = o),
                            (u.maxWidth = a))),
                            l
                    );
                }))
            : a.documentElement.currentStyle &&
            ((Rt = function (e) {
                return e.currentStyle;
            }),
                (Wt = function (e, n, r) {
                    var i,
                        o,
                        a,
                        s = r || Rt(e),
                        l = s ? s[n] : t,
                        u = e.style;
                    return (
                        null == l && u && u[n] && (l = u[n]),
                        Yt.test(l) &&
                        !zt.test(n) &&
                        ((i = u.left),
                            (o = e.runtimeStyle),
                            (a = o && o.left),
                        a && (o.left = e.currentStyle.left),
                            (u.left = "fontSize" === n ? "1em" : l),
                            (l = u.pixelLeft + "px"),
                            (u.left = i),
                        a && (o.left = a)),
                            "" === l ? "auto" : l
                    );
                }));
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
                r
                    ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
                    "margin" !== n &&
                    (a -= x.css(e, "border" + Zt[o] + "Width", !0, i)))
                    : ((a += x.css(e, "padding" + Zt[o], !0, i)),
                    "padding" !== n &&
                    (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a;
    }
    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (
                ((i = Wt(e, t, o)),
                (0 > i || null == i) && (i = e.style[t]),
                    Yt.test(i))
            )
                return i;
            (r = a && (x.support.boxSizingReliable || i === e.style[t])),
                (i = parseFloat(i) || 0);
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function ln(e) {
        var t = a,
            n = Gt[e];
        return (
            n ||
            ((n = un(e, t)),
            ("none" !== n && n) ||
            ((Pt = (
                Pt ||
                x("<iframe frameborder='0' width='0' height='0'/>").css(
                    "cssText",
                    "display:block !important"
                )
            ).appendTo(t.documentElement)),
                (t = (Pt[0].contentWindow || Pt[0].contentDocument).document),
                t.write("<!doctype html><html><body>"),
                t.close(),
                (n = un(e, t)),
                Pt.detach()),
                (Gt[e] = n)),
                n
        );
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r;
    }
    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {
            get: function (e, r, i) {
                return r
                    ? 0 === e.offsetWidth && Xt.test(x.css(e, "display"))
                        ? x.swap(e, Qt, function () {
                            return sn(e, n, i);
                        })
                        : sn(e, n, i)
                    : t;
            },
            set: function (e, t, r) {
                var i = r && Rt(e);
                return on(
                    e,
                    t,
                    r
                        ? an(
                            e,
                            n,
                            r,
                            x.support.boxSizing &&
                            "border-box" === x.css(e, "boxSizing", !1, i),
                            i
                        )
                        : 0
                );
            },
        };
    }),
    x.support.opacity ||
    (x.cssHooks.opacity = {
        get: function (e, t) {
            return It.test(
                (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
            )
                ? 0.01 * parseFloat(RegExp.$1) + ""
                : t
                    ? "1"
                    : "";
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = (r && r.filter) || n.filter || "";
            (n.zoom = 1),
            ((t >= 1 || "" === t) &&
                "" === x.trim(o.replace($t, "")) &&
                n.removeAttribute &&
                (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
            (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
        },
    }),
        x(function () {
            x.support.reliableMarginRight ||
            (x.cssHooks.marginRight = {
                get: function (e, n) {
                    return n
                        ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"])
                        : t;
                },
            }),
            !x.support.pixelPosition &&
            x.fn.position &&
            x.each(["top", "left"], function (e, n) {
                x.cssHooks[n] = {
                    get: function (e, r) {
                        return r
                            ? ((r = Wt(e, n)), Yt.test(r) ? x(e).position()[n] + "px" : r)
                            : t;
                    },
                };
            });
        }),
    x.expr &&
    x.expr.filters &&
    ((x.expr.filters.hidden = function (e) {
        return (
            (0 >= e.offsetWidth && 0 >= e.offsetHeight) ||
            (!x.support.reliableHiddenOffsets &&
                "none" === ((e.style && e.style.display) || x.css(e, "display")))
        );
    }),
        (x.expr.filters.visible = function (e) {
            return !x.expr.filters.hidden(e);
        })),
        x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (x.cssHooks[e + t] = {
                expand: function (n) {
                    var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                    for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
            Ut.test(e) || (x.cssHooks[e + t].set = on);
        });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this;
            })
                .filter(function () {
                    var e = this.type;
                    return (
                        this.name &&
                        !x(this).is(":disabled") &&
                        hn.test(this.nodeName) &&
                        !dn.test(e) &&
                        (this.checked || !Ct.test(e))
                    );
                })
                .map(function (e, t) {
                    var n = x(this).val();
                    return null == n
                        ? null
                        : x.isArray(n)
                            ? x.map(n, function (e) {
                                return { name: t.name, value: e.replace(fn, "\r\n") };
                            })
                            : { name: t.name, value: n.replace(fn, "\r\n") };
                })
                .get();
        },
    }),
        (x.param = function (e, n) {
            var r,
                i = [],
                o = function (e, t) {
                    (t = x.isFunction(t) ? t() : null == t ? "" : t),
                        (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
                };
            if (
                (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
                x.isArray(e) || (e.jquery && !x.isPlainObject(e)))
            )
                x.each(e, function () {
                    o(this.name, this.value);
                });
            else for (r in e) gn(r, e[r], n, o);
            return i.join("&").replace(cn, "+");
        });
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))
            x.each(t, function (t, i) {
                n || pn.test(e)
                    ? r(e, i)
                    : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== x.type(t)) r(e, t);
        else for (i in t) gn(e + "[" + i + "]", t[i], n, r);
    }
    x.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
            " "
        ),
        function (e, t) {
            x.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }
    ),
        x.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        });
    var mn,
        yn,
        vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href;
    } catch (Ln) {
        (yn = a.createElement("a")), (yn.href = ""), (yn = yn.href);
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while ((r = o[i++]))
                    "+" === r[0]
                        ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;
        function s(l) {
            var u;
            return (
                (o[l] = !0),
                    x.each(e[l] || [], function (e, l) {
                        var c = l(n, r, i);
                        return "string" != typeof c || a || o[c]
                            ? a
                                ? !(u = c)
                                : t
                            : (n.dataTypes.unshift(c), s(c), !1);
                    }),
                    u
            );
        }
        return s(n.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function _n(e, n) {
        var r,
            i,
            o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e;
    }
    (x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i,
            o,
            a,
            s = this,
            l = e.indexOf(" ");
        return (
            l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
                x.isFunction(n)
                    ? ((r = n), (n = t))
                    : n && "object" == typeof n && (a = "POST"),
            s.length > 0 &&
            x
                .ajax({ url: e, type: a, dataType: "html", data: n })
                .done(function (e) {
                    (o = arguments),
                        s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
                })
                .complete(
                    r &&
                    function (e, t) {
                        s.each(r, o || [e.responseText, t, e]);
                    }
                ),
                this
        );
    }),
        x.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                x.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: yn,
                type: "GET",
                isLocal: Cn.test(mn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Dn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": x.parseJSON,
                    "text xml": x.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
            },
            ajaxPrefilter: Hn(An),
            ajaxTransport: Hn(jn),
            ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = t)), (n = n || {});
                var r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    p = x.ajaxSetup({}, n),
                    f = p.context || p,
                    d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                    h = x.Deferred(),
                    g = x.Callbacks("once memory"),
                    m = p.statusCode || {},
                    y = {},
                    v = {},
                    b = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!c) {
                                    c = {};
                                    while ((t = Tn.exec(a))) c[t[1].toLowerCase()] = t[2];
                                }
                                t = c[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? a : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || ((e = v[n] = v[n] || e), (y[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return b || (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                                else C.always(e[C.status]);
                            return this;
                        },
                        abort: function (e) {
                            var t = e || w;
                            return u && u.abort(t), k(0, t), this;
                        },
                    };
                if (
                    ((h.promise(C).complete = g.add),
                        (C.success = C.done),
                        (C.error = C.fail),
                        (p.url = ((e || p.url || yn) + "")
                            .replace(xn, "")
                            .replace(kn, mn[1] + "//")),
                        (p.type = n.method || n.type || p.method || p.type),
                        (p.dataTypes = x
                            .trim(p.dataType || "*")
                            .toLowerCase()
                            .match(T) || [""]),
                    null == p.crossDomain &&
                    ((r = En.exec(p.url.toLowerCase())),
                        (p.crossDomain = !(
                            !r ||
                            (r[1] === mn[1] &&
                                r[2] === mn[2] &&
                                (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                                (mn[3] || ("http:" === mn[1] ? "80" : "443")))
                        ))),
                    p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = x.param(p.data, p.traditional)),
                        qn(An, p, n, C),
                    2 === b)
                )
                    return C;
                (l = p.global),
                l && 0 === x.active++ && x.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Nn.test(p.type)),
                    (o = p.url),
                p.hasContent ||
                (p.data &&
                ((o = p.url += (bn.test(o) ? "&" : "?") + p.data), delete p.data),
                p.cache === !1 &&
                (p.url = wn.test(o)
                    ? o.replace(wn, "$1_=" + vn++)
                    : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
                p.ifModified &&
                (x.lastModified[o] &&
                C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
                x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
                ((p.data && p.hasContent && p.contentType !== !1) || n.contentType) &&
                C.setRequestHeader("Content-Type", p.contentType),
                    C.setRequestHeader(
                        "Accept",
                        p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                            ? p.accepts[p.dataTypes[0]] +
                            ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "")
                            : p.accepts["*"]
                    );
                for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
                    return C.abort();
                w = "abort";
                for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]);
                if ((u = qn(jn, p, n, C))) {
                    (C.readyState = 1),
                    l && d.trigger("ajaxSend", [C, p]),
                    p.async &&
                    p.timeout > 0 &&
                    (s = setTimeout(function () {
                        C.abort("timeout");
                    }, p.timeout));
                    try {
                        (b = 1), u.send(y, k);
                    } catch (N) {
                        if (!(2 > b)) throw N;
                        k(-1, N);
                    }
                } else k(-1, "No Transport");
                function k(e, n, r, i) {
                    var c,
                        y,
                        v,
                        w,
                        T,
                        N = n;
                    2 !== b &&
                    ((b = 2),
                    s && clearTimeout(s),
                        (u = t),
                        (a = i || ""),
                        (C.readyState = e > 0 ? 4 : 0),
                        (c = (e >= 200 && 300 > e) || 304 === e),
                    r && (w = Mn(p, C, r)),
                        (w = On(p, w, C, c)),
                        c
                            ? (p.ifModified &&
                            ((T = C.getResponseHeader("Last-Modified")),
                            T && (x.lastModified[o] = T),
                                (T = C.getResponseHeader("etag")),
                            T && (x.etag[o] = T)),
                                204 === e || "HEAD" === p.type
                                    ? (N = "nocontent")
                                    : 304 === e
                                        ? (N = "notmodified")
                                        : ((N = w.state), (y = w.data), (v = w.error), (c = !v)))
                            : ((v = N), (e || !N) && ((N = "error"), 0 > e && (e = 0))),
                        (C.status = e),
                        (C.statusText = (n || N) + ""),
                        c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                        C.statusCode(m),
                        (m = t),
                    l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                        g.fireWith(f, [C, N]),
                    l &&
                    (d.trigger("ajaxComplete", [C, p]),
                    --x.active || x.event.trigger("ajaxStop")));
                }
                return C;
            },
            getJSON: function (e, t, n) {
                return x.get(e, t, n, "json");
            },
            getScript: function (e, n) {
                return x.get(e, t, n, "script");
            },
        }),
        x.each(["get", "post"], function (e, n) {
            x[n] = function (e, r, i, o) {
                return (
                    x.isFunction(r) && ((o = o || i), (i = r), (r = t)),
                        x.ajax({ url: e, type: n, dataType: o, data: r, success: i })
                );
            };
        });
    function Mn(e, n, r) {
        var i,
            o,
            a,
            s,
            l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break;
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
    }
    function On(e, t, n, r) {
        var i,
            o,
            a,
            s,
            l,
            u = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (l = o),
                    (o = c.shift()))
            )
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
                    if (((a = u[l + " " + o] || u["* " + o]), !a))
                        for (i in u)
                            if (
                                ((s = i.split(" ")),
                                s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]]))
                            ) {
                                a === !0
                                    ? (a = u[i])
                                    : u[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: a ? p : "No conversion from " + l + " to " + o,
                                };
                            }
                }
        return { state: "success", data: t };
    }
    x.ajaxSetup({
        accepts: {
            script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e;
            },
        },
    }),
        x.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1),
            e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        x.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n,
                    r = a.head || x("head")[0] || a.documentElement;
                return {
                    send: function (t, i) {
                        (n = a.createElement("script")),
                            (n.async = !0),
                        e.scriptCharset && (n.charset = e.scriptCharset),
                            (n.src = e.url),
                            (n.onload = n.onreadystatechange =
                                function (e, t) {
                                    (t ||
                                        !n.readyState ||
                                        /loaded|complete/.test(n.readyState)) &&
                                    ((n.onload = n.onreadystatechange = null),
                                    n.parentNode && n.parentNode.removeChild(n),
                                        (n = null),
                                    t || i(200, "success"));
                                }),
                            r.insertBefore(n, r.firstChild);
                    },
                    abort: function () {
                        n && n.onload(t, !0);
                    },
                };
            }
        });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return (this[e] = !0), e;
        },
    }),
        x.ajaxPrefilter("json jsonp", function (n, r, i) {
            var o,
                a,
                s,
                l =
                    n.jsonp !== !1 &&
                    (Bn.test(n.url)
                        ? "url"
                        : "string" == typeof n.data &&
                        !(n.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Bn.test(n.data) &&
                        "data");
            return l || "jsonp" === n.dataTypes[0]
                ? ((o = n.jsonpCallback =
                    x.isFunction(n.jsonpCallback)
                        ? n.jsonpCallback()
                        : n.jsonpCallback),
                    l
                        ? (n[l] = n[l].replace(Bn, "$1" + o))
                        : n.jsonp !== !1 &&
                        (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
                    (n.converters["script json"] = function () {
                        return s || x.error(o + " was not called"), s[0];
                    }),
                    (n.dataTypes[0] = "json"),
                    (a = e[o]),
                    (e[o] = function () {
                        s = arguments;
                    }),
                    i.always(function () {
                        (e[o] = a),
                        n[o] && ((n.jsonpCallback = r.jsonpCallback), Fn.push(o)),
                        s && x.isFunction(a) && a(s[0]),
                            (s = a = t);
                    }),
                    "script")
                : t;
        });
    var Pn,
        Rn,
        Wn = 0,
        $n =
            e.ActiveXObject &&
            function () {
                var e;
                for (e in Pn) Pn[e](t, !0);
            };
    function In() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    (x.ajaxSettings.xhr = e.ActiveXObject
        ? function () {
            return (!this.isLocal && In()) || zn();
        }
        : In),
        (Rn = x.ajaxSettings.xhr()),
        (x.support.cors = !!Rn && "withCredentials" in Rn),
        (Rn = x.support.ajax = !!Rn),
    Rn &&
    x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a,
                        s,
                        l = n.xhr();
                    if (
                        (n.username
                            ? l.open(n.type, n.url, n.async, n.username, n.password)
                            : l.open(n.type, n.url, n.async),
                            n.xhrFields)
                    )
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType &&
                    l.overrideMimeType &&
                    l.overrideMimeType(n.mimeType),
                    n.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s]);
                    } catch (u) {}
                    l.send((n.hasContent && n.data) || null),
                        (r = function (e, i) {
                            var s, u, c, p;
                            try {
                                if (r && (i || 4 === l.readyState))
                                    if (
                                        ((r = t),
                                        a &&
                                        ((l.onreadystatechange = x.noop), $n && delete Pn[a]),
                                            i)
                                    )
                                        4 !== l.readyState && l.abort();
                                    else {
                                        (p = {}),
                                            (s = l.status),
                                            (u = l.getAllResponseHeaders()),
                                        "string" == typeof l.responseText &&
                                        (p.text = l.responseText);
                                        try {
                                            c = l.statusText;
                                        } catch (f) {
                                            c = "";
                                        }
                                        s || !n.isLocal || n.crossDomain
                                            ? 1223 === s && (s = 204)
                                            : (s = p.text ? 200 : 404);
                                    }
                            } catch (d) {
                                i || o(-1, d);
                            }
                            p && o(s, c, p, u);
                        }),
                        n.async
                            ? 4 === l.readyState
                                ? setTimeout(r)
                                : ((a = ++Wn),
                                $n && (Pn || ((Pn = {}), x(e).unload($n)), (Pn[a] = r)),
                                    (l.onreadystatechange = r))
                            : r();
                },
                abort: function () {
                    r && r(t, !0);
                },
            };
        }
    });
    var Xn,
        Un,
        Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Yn.exec(t),
                        o = (i && i[3]) || (x.cssNumber[e] ? "" : "px"),
                        a =
                            (x.cssNumber[e] || ("px" !== o && +r)) &&
                            Yn.exec(x.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        (o = o || a[3]), (i = i || []), (a = +r || 1);
                        do (s = s || ".5"), (a /= s), x.style(n.elem, e, a + o);
                        while (s !== (s = n.cur() / r) && 1 !== s && --l);
                    }
                    return (
                        i &&
                        ((a = n.start = +a || +r || 0),
                            (n.unit = o),
                            (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
                            n
                    );
                },
            ],
        };
    function Kn() {
        return (
            setTimeout(function () {
                Xn = t;
            }),
                (Xn = x.now())
        );
    }
    function Zn(e, t, n) {
        var r,
            i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function er(e, t, n) {
        var r,
            i,
            o = 0,
            a = Gn.length,
            s = x.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return (
                    s.notifyWith(e, [u, o, n]),
                        1 > o && l ? n : (s.resolveWith(e, [u]), !1)
                );
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = x.Tween(
                        e,
                        u.opts,
                        t,
                        n,
                        u.opts.specialEasing[t] || u.opts.easing
                    );
                    return u.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
                },
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if ((r = Gn[o].call(u, e, c, u.opts))) return r;
        return (
            x.map(c, Zn, u),
            x.isFunction(u.opts.start) && u.opts.start.call(e, u),
                x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
                u
                    .progress(u.opts.progress)
                    .done(u.opts.done, u.opts.complete)
                    .fail(u.opts.fail)
                    .always(u.opts.always)
        );
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (
                ((r = x.camelCase(n)),
                    (i = t[r]),
                    (o = e[n]),
                x.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                    (a = x.cssHooks[r]),
                a && "expand" in a)
            ) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    x.Animation = x.extend(er, {
        tweener: function (e, t) {
            x.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
            var n,
                r = 0,
                i = e.length;
            for (; i > r; r++) (n = e[r]), (Qn[n] = Qn[n] || []), Qn[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? Gn.unshift(e) : Gn.push(e);
        },
    });
    function nr(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            l,
            u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue ||
        ((s = x._queueHooks(e, "fx")),
        null == s.unqueued &&
        ((s.unqueued = 0),
            (l = s.empty.fire),
            (s.empty.fire = function () {
                s.unqueued || l();
            })),
            s.unqueued++,
            u.always(function () {
                u.always(function () {
                    s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
                });
            })),
        1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        "inline" === x.css(e, "display") &&
        "none" === x.css(e, "float") &&
        (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
        n.overflow &&
        ((p.overflow = "hidden"),
        x.support.shrinkWrapBlocks ||
        u.always(function () {
            (p.overflow = n.overflow[0]),
                (p.overflowX = n.overflow[1]),
                (p.overflowY = n.overflow[2]);
        }));
        for (r in t)
            if (((i = t[r]), Vn.exec(i))) {
                if (
                    (delete t[r], (o = o || "toggle" === i), i === (f ? "hide" : "show"))
                )
                    continue;
                c[r] = (d && d[r]) || x.style(e, r);
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : (d = x._data(e, "fxshow", {})),
            o && (d.hidden = !f),
                f
                    ? x(e).show()
                    : u.done(function () {
                        x(e).hide();
                    }),
                u.done(function () {
                    var t;
                    x._removeData(e, "fxshow");
                    for (t in c) x.style(e, t, c[t]);
                });
            for (r in c)
                (a = Zn(f ? d[r] : 0, r, u)),
                r in d ||
                ((d[r] = a.start),
                f &&
                ((a.end = a.start),
                    (a.start = "width" === r || "height" === r ? 1 : 0)));
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i);
    }
    (x.Tween = rr),
        (rr.prototype = {
            constructor: rr,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (x.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = rr.propHooks[this.prop];
                return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = rr.propHooks[this.prop];
                return (
                    (this.pos = t =
                        this.options.duration
                            ? x.easing[this.easing](
                                e,
                                this.options.duration * e,
                                0,
                                1,
                                this.options.duration
                            )
                            : e),
                        (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : rr.propHooks._default.set(this),
                        this
                );
            },
        }),
        (rr.prototype.init.prototype = rr.prototype),
        (rr.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                    (e.elem.style && null != e.elem.style[e.prop])
                        ? ((t = x.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
                        : e.elem[e.prop];
                },
                set: function (e) {
                    x.fx.step[e.prop]
                        ? x.fx.step[e.prop](e)
                        : e.elem.style &&
                        (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop])
                            ? x.style(e.elem, e.prop, e.now + e.unit)
                            : (e.elem[e.prop] = e.now);
                },
            },
        }),
        (rr.propHooks.scrollTop = rr.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
        x.each(["toggle", "show", "hide"], function (e, t) {
            var n = x.fn[t];
            x.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(ir(t, !0), e, r, i);
            };
        }),
        x.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(nn)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = x.isEmptyObject(e),
                    o = x.speed(t, n, r),
                    a = function () {
                        var t = er(this, x.extend({}, e), o);
                        (i || x._data(this, "finish")) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                        i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (e, n, r) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                };
                return (
                    "string" != typeof e && ((r = n), (n = e), (e = t)),
                    n && e !== !1 && this.queue(e || "fx", []),
                        this.each(function () {
                            var t = !0,
                                n = null != e && e + "queueHooks",
                                o = x.timers,
                                a = x._data(this);
                            if (n) a[n] && a[n].stop && i(a[n]);
                            else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                            for (n = o.length; n--; )
                                o[n].elem !== this ||
                                (null != e && o[n].queue !== e) ||
                                (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
                            (t || !r) && x.dequeue(this, e);
                        })
                );
            },
            finish: function (e) {
                return (
                    e !== !1 && (e = e || "fx"),
                        this.each(function () {
                            var t,
                                n = x._data(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = x.timers,
                                a = r ? r.length : 0;
                            for (
                                n.finish = !0,
                                    x.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                    t = o.length;
                                t--;

                            )
                                o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; a > t; t++)
                                r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        })
                );
            },
        });
    function ir(e, t) {
        var n,
            r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            (n = Zt[i]), (r["margin" + n] = r["padding" + n] = e);
        return t && (r.opacity = r.width = e), r;
    }
    x.each(
        {
            slideDown: ir("show"),
            slideUp: ir("hide"),
            slideToggle: ir("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
            x.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }
    ),
        (x.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? x.extend({}, e)
                    : {
                        complete: n || (!n && t) || (x.isFunction(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !x.isFunction(t) && t),
                    };
            return (
                (r.duration = x.fx.off
                    ? 0
                    : "number" == typeof r.duration
                        ? r.duration
                        : r.duration in x.fx.speeds
                            ? x.fx.speeds[r.duration]
                            : x.fx.speeds._default),
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                    (r.old = r.complete),
                    (r.complete = function () {
                        x.isFunction(r.old) && r.old.call(this),
                        r.queue && x.dequeue(this, r.queue);
                    }),
                    r
            );
        }),
        (x.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (x.timers = []),
        (x.fx = rr.prototype.init),
        (x.fx.tick = function () {
            var e,
                n = x.timers,
                r = 0;
            for (Xn = x.now(); n.length > r; r++)
                (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
            n.length || x.fx.stop(), (Xn = t);
        }),
        (x.fx.timer = function (e) {
            e() && x.timers.push(e) && x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function () {
            Un || (Un = setInterval(x.fx.tick, x.fx.interval));
        }),
        (x.fx.stop = function () {
            clearInterval(Un), (Un = null);
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fx.step = {}),
    x.expr &&
    x.expr.filters &&
    (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem;
        }).length;
    }),
        (x.fn.offset = function (e) {
            if (arguments.length)
                return e === t
                    ? this
                    : this.each(function (t) {
                        x.offset.setOffset(this, e, t);
                    });
            var n,
                r,
                o = { top: 0, left: 0 },
                a = this[0],
                s = a && a.ownerDocument;
            if (s)
                return (
                    (n = s.documentElement),
                        x.contains(n, a)
                            ? (typeof a.getBoundingClientRect !== i &&
                            (o = a.getBoundingClientRect()),
                                (r = or(s)),
                                {
                                    top:
                                        o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                                    left:
                                        o.left +
                                        (r.pageXOffset || n.scrollLeft) -
                                        (n.clientLeft || 0),
                                })
                            : o
                );
        }),
        (x.offset = {
            setOffset: function (e, t, n) {
                var r = x.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i = x(e),
                    o = i.offset(),
                    a = x.css(e, "top"),
                    s = x.css(e, "left"),
                    l =
                        ("absolute" === r || "fixed" === r) &&
                        x.inArray("auto", [a, s]) > -1,
                    u = {},
                    c = {},
                    p,
                    f;
                l
                    ? ((c = i.position()), (p = c.top), (f = c.left))
                    : ((p = parseFloat(a) || 0), (f = parseFloat(s) || 0)),
                x.isFunction(t) && (t = t.call(e, n, o)),
                null != t.top && (u.top = t.top - o.top + p),
                null != t.left && (u.left = t.left - o.left + f),
                    "using" in t ? t.using.call(e, u) : i.css(u);
            },
        }),
        x.fn.extend({
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        r = this[0];
                    return (
                        "fixed" === x.css(r, "position")
                            ? (t = r.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                                (t = this.offset()),
                            x.nodeName(e[0], "html") || (n = e.offset()),
                                (n.top += x.css(e[0], "borderTopWidth", !0)),
                                (n.left += x.css(e[0], "borderLeftWidth", !0))),
                            {
                                top: t.top - n.top - x.css(r, "marginTop", !0),
                                left: t.left - n.left - x.css(r, "marginLeft", !0),
                            }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent || s;
                    while (
                        e &&
                        !x.nodeName(e, "html") &&
                        "static" === x.css(e, "position")
                        )
                        e = e.offsetParent;
                    return e || s;
                });
            },
        }),
        x.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, n) {
                var r = /Y/.test(n);
                x.fn[e] = function (i) {
                    return x.access(
                        this,
                        function (e, i, o) {
                            var a = or(e);
                            return o === t
                                ? a
                                    ? n in a
                                        ? a[n]
                                        : a.document.documentElement[i]
                                    : e[i]
                                : (a
                                    ? a.scrollTo(
                                        r ? x(a).scrollLeft() : o,
                                        r ? o : x(a).scrollTop()
                                    )
                                    : (e[i] = o),
                                    t);
                        },
                        e,
                        i,
                        arguments.length,
                        null
                    );
                };
            }
        );
    function or(e) {
        return x.isWindow(e)
            ? e
            : 9 === e.nodeType
                ? e.defaultView || e.parentWindow
                : !1;
    }
    x.each({ Height: "height", Width: "width" }, function (e, n) {
        x.each(
            { padding: "inner" + e, content: n, "": "outer" + e },
            function (r, i) {
                x.fn[i] = function (i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return x.access(
                        this,
                        function (n, r, i) {
                            var o;
                            return x.isWindow(n)
                                ? n.document.documentElement["client" + e]
                                : 9 === n.nodeType
                                    ? ((o = n.documentElement),
                                        Math.max(
                                            n.body["scroll" + e],
                                            o["scroll" + e],
                                            n.body["offset" + e],
                                            o["offset" + e],
                                            o["client" + e]
                                        ))
                                    : i === t
                                        ? x.css(n, r, s)
                                        : x.style(n, r, i, s);
                        },
                        n,
                        a ? i : t,
                        a,
                        null
                    );
                };
            }
        );
    }),
        (x.fn.size = function () {
            return this.length;
        }),
        (x.fn.andSelf = x.fn.addBack),
        "object" == typeof module && module && "object" == typeof module.exports
            ? (module.exports = x)
            : ((e.jQuery = e.$ = x),
            "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return x;
            }));
})(window);

/*
// axios 1.1.3
*/
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
            ? define(t)
            : ((e = "undefined" != typeof globalThis ? globalThis : e || self).axios =
                t());
})(this, function () {
    "use strict";
    function e(t) {
        return (
            (e =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                    }),
                e(t)
        );
    }
    function t(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
            "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
        }
    }
    function r(e, t, r) {
        return (
            t && n(e.prototype, t),
            r && n(e, r),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
        );
    }
    function o(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    var i,
        s = Object.prototype.toString,
        a = Object.getPrototypeOf,
        u =
            ((i = Object.create(null)),
                function (e) {
                    var t = s.call(e);
                    return i[t] || (i[t] = t.slice(8, -1).toLowerCase());
                }),
        c = function (e) {
            return (
                (e = e.toLowerCase()),
                    function (t) {
                        return u(t) === e;
                    }
            );
        },
        f = function (t) {
            return function (n) {
                return e(n) === t;
            };
        },
        l = Array.isArray,
        d = f("undefined");
    var h = c("ArrayBuffer");
    var p = f("string"),
        m = f("function"),
        v = f("number"),
        y = function (t) {
            return null !== t && "object" === e(t);
        },
        b = function (e) {
            if ("object" !== u(e)) return !1;
            var t = a(e);
            return !(
                (null !== t &&
                    t !== Object.prototype &&
                    null !== Object.getPrototypeOf(t)) ||
                Symbol.toStringTag in e ||
                Symbol.iterator in e
            );
        },
        g = c("Date"),
        E = c("File"),
        w = c("Blob"),
        O = c("FileList"),
        S = c("URLSearchParams");
    function R(t, n) {
        var r,
            o,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            s = i.allOwnKeys,
            a = void 0 !== s && s;
        if (null != t)
            if (("object" !== e(t) && (t = [t]), l(t)))
                for (r = 0, o = t.length; r < o; r++) n.call(null, t[r], r, t);
            else {
                var u,
                    c = a ? Object.getOwnPropertyNames(t) : Object.keys(t),
                    f = c.length;
                for (r = 0; r < f; r++) (u = c[r]), n.call(null, t[u], u, t);
            }
    }
    var A,
        j =
            ((A = "undefined" != typeof Uint8Array && a(Uint8Array)),
                function (e) {
                    return A && e instanceof A;
                }),
        T = c("HTMLFormElement"),
        x = (function (e) {
            var t = Object.prototype.hasOwnProperty;
            return function (e, n) {
                return t.call(e, n);
            };
        })(),
        C = c("RegExp"),
        N = function (e, t) {
            var n = Object.getOwnPropertyDescriptors(e),
                r = {};
            R(n, function (n, o) {
                !1 !== t(n, o, e) && (r[o] = n);
            }),
                Object.defineProperties(e, r);
        },
        P = {
            isArray: l,
            isArrayBuffer: h,
            isBuffer: function (e) {
                return (
                    null !== e &&
                    !d(e) &&
                    null !== e.constructor &&
                    !d(e.constructor) &&
                    m(e.constructor.isBuffer) &&
                    e.constructor.isBuffer(e)
                );
            },
            isFormData: function (e) {
                var t = "[object FormData]";
                return (
                    e &&
                    (("function" == typeof FormData && e instanceof FormData) ||
                        s.call(e) === t ||
                        (m(e.toString) && e.toString() === t))
                );
            },
            isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(e)
                    : e && e.buffer && h(e.buffer);
            },
            isString: p,
            isNumber: v,
            isBoolean: function (e) {
                return !0 === e || !1 === e;
            },
            isObject: y,
            isPlainObject: b,
            isUndefined: d,
            isDate: g,
            isFile: E,
            isBlob: w,
            isRegExp: C,
            isFunction: m,
            isStream: function (e) {
                return y(e) && m(e.pipe);
            },
            isURLSearchParams: S,
            isTypedArray: j,
            isFileList: O,
            forEach: R,
            merge: function e() {
                for (
                    var t = {},
                        n = function (n, r) {
                            b(t[r]) && b(n)
                                ? (t[r] = e(t[r], n))
                                : b(n)
                                    ? (t[r] = e({}, n))
                                    : l(n)
                                        ? (t[r] = n.slice())
                                        : (t[r] = n);
                        },
                        r = 0,
                        o = arguments.length;
                    r < o;
                    r++
                )
                    arguments[r] && R(arguments[r], n);
                return t;
            },
            extend: function (e, t, n) {
                var r =
                        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = r.allOwnKeys;
                return (
                    R(
                        t,
                        function (t, r) {
                            n && m(t) ? (e[r] = o(t, n)) : (e[r] = t);
                        },
                        { allOwnKeys: i }
                    ),
                        e
                );
            },
            trim: function (e) {
                return e.trim
                    ? e.trim()
                    : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            },
            stripBOM: function (e) {
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
            },
            inherits: function (e, t, n, r) {
                (e.prototype = Object.create(t.prototype, r)),
                    (e.prototype.constructor = e),
                    Object.defineProperty(e, "super", { value: t.prototype }),
                n && Object.assign(e.prototype, n);
            },
            toFlatObject: function (e, t, n, r) {
                var o,
                    i,
                    s,
                    u = {};
                if (((t = t || {}), null == e)) return t;
                do {
                    for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                        (s = o[i]),
                        (r && !r(s, e, t)) || u[s] || ((t[s] = e[s]), (u[s] = !0));
                    e = !1 !== n && a(e);
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t;
            },
            kindOf: u,
            kindOfTest: c,
            endsWith: function (e, t, n) {
                (e = String(e)),
                (void 0 === n || n > e.length) && (n = e.length),
                    (n -= t.length);
                var r = e.indexOf(t, n);
                return -1 !== r && r === n;
            },
            toArray: function (e) {
                if (!e) return null;
                if (l(e)) return e;
                var t = e.length;
                if (!v(t)) return null;
                for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
                return n;
            },
            forEachEntry: function (e, t) {
                for (
                    var n, r = (e && e[Symbol.iterator]).call(e);
                    (n = r.next()) && !n.done;

                ) {
                    var o = n.value;
                    t.call(e, o[0], o[1]);
                }
            },
            matchAll: function (e, t) {
                for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
                return r;
            },
            isHTMLForm: T,
            hasOwnProperty: x,
            hasOwnProp: x,
            reduceDescriptors: N,
            freezeMethods: function (e) {
                N(e, function (t, n) {
                    var r = e[n];
                    m(r) &&
                    ((t.enumerable = !1),
                        "writable" in t
                            ? (t.writable = !1)
                            : t.set ||
                            (t.set = function () {
                                throw Error("Can not read-only method '" + n + "'");
                            }));
                });
            },
            toObjectSet: function (e, t) {
                var n = {},
                    r = function (e) {
                        e.forEach(function (e) {
                            n[e] = !0;
                        });
                    };
                return l(e) ? r(e) : r(String(e).split(t)), n;
            },
            toCamelCase: function (e) {
                return e
                    .toLowerCase()
                    .replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
                        return t.toUpperCase() + n;
                    });
            },
            noop: function () {},
            toFiniteNumber: function (e, t) {
                return (e = +e), Number.isFinite(e) ? e : t;
            },
        };
    function _(e, t, n, r, o) {
        Error.call(this),
            Error.captureStackTrace
                ? Error.captureStackTrace(this, this.constructor)
                : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        o && (this.response = o);
    }
    P.inherits(_, Error, {
        toJSON: function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status:
                    this.response && this.response.status ? this.response.status : null,
            };
        },
    });
    var B = _.prototype,
        D = {};
    [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
    ].forEach(function (e) {
        D[e] = { value: e };
    }),
        Object.defineProperties(_, D),
        Object.defineProperty(B, "isAxiosError", { value: !0 }),
        (_.from = function (e, t, n, r, o, i) {
            var s = Object.create(B);
            return (
                P.toFlatObject(
                    e,
                    s,
                    function (e) {
                        return e !== Error.prototype;
                    },
                    function (e) {
                        return "isAxiosError" !== e;
                    }
                ),
                    _.call(s, e.message, t, n, r, o),
                    (s.cause = e),
                    (s.name = e.name),
                i && Object.assign(s, i),
                    s
            );
        });
    var F =
        "object" == ("undefined" == typeof self ? "undefined" : e(self))
            ? self.FormData
            : window.FormData;
    function U(e) {
        return P.isPlainObject(e) || P.isArray(e);
    }
    function k(e) {
        return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function L(e, t, n) {
        return e
            ? e
                .concat(t)
                .map(function (e, t) {
                    return (e = k(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
    }
    var z = P.toFlatObject(P, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
    });
    function q(t, n, r) {
        if (!P.isObject(t)) throw new TypeError("target must be an object");
        n = n || new (F || FormData)();
        var o,
            i = (r = P.toFlatObject(
                r,
                { metaTokens: !0, dots: !1, indexes: !1 },
                !1,
                function (e, t) {
                    return !P.isUndefined(t[e]);
                }
            )).metaTokens,
            s = r.visitor || l,
            a = r.dots,
            u = r.indexes,
            c =
                (r.Blob || ("undefined" != typeof Blob && Blob)) &&
                (o = n) &&
                P.isFunction(o.append) &&
                "FormData" === o[Symbol.toStringTag] &&
                o[Symbol.iterator];
        if (!P.isFunction(s)) throw new TypeError("visitor must be a function");
        function f(e) {
            if (null === e) return "";
            if (P.isDate(e)) return e.toISOString();
            if (!c && P.isBlob(e))
                throw new _("Blob is not supported. Use a Buffer instead.");
            return P.isArrayBuffer(e) || P.isTypedArray(e)
                ? c && "function" == typeof Blob
                    ? new Blob([e])
                    : Buffer.from(e)
                : e;
        }
        function l(t, r, o) {
            var s = t;
            if (t && !o && "object" === e(t))
                if (P.endsWith(r, "{}"))
                    (r = i ? r : r.slice(0, -2)), (t = JSON.stringify(t));
                else if (
                    (P.isArray(t) &&
                        (function (e) {
                            return P.isArray(e) && !e.some(U);
                        })(t)) ||
                    P.isFileList(t) ||
                    (P.endsWith(r, "[]") && (s = P.toArray(t)))
                )
                    return (
                        (r = k(r)),
                            s.forEach(function (e, t) {
                                !P.isUndefined(e) &&
                                null !== e &&
                                n.append(
                                    !0 === u ? L([r], t, a) : null === u ? r : r + "[]",
                                    f(e)
                                );
                            }),
                            !1
                    );
            return !!U(t) || (n.append(L(o, r, a), f(t)), !1);
        }
        var d = [],
            h = Object.assign(z, {
                defaultVisitor: l,
                convertValue: f,
                isVisitable: U,
            });
        if (!P.isObject(t)) throw new TypeError("data must be an object");
        return (
            (function e(t, r) {
                if (!P.isUndefined(t)) {
                    if (-1 !== d.indexOf(t))
                        throw Error("Circular reference detected in " + r.join("."));
                    d.push(t),
                        P.forEach(t, function (t, o) {
                            !0 ===
                            (!(P.isUndefined(t) || null === t) &&
                                s.call(n, t, P.isString(o) ? o.trim() : o, r, h)) &&
                            e(t, r ? r.concat(o) : [o]);
                        }),
                        d.pop();
                }
            })(t),
                n
        );
    }
    function I(e) {
        var t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
            return t[e];
        });
    }
    function M(e, t) {
        (this._pairs = []), e && q(e, this, t);
    }
    var J = M.prototype;
    function H(e) {
        return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
    }
    function V(e, t, n) {
        if (!t) return e;
        var r,
            o = (n && n.encode) || H,
            i = n && n.serialize;
        if (
            (r = i
                ? i(t, n)
                : P.isURLSearchParams(t)
                    ? t.toString()
                    : new M(t, n).toString(o))
        ) {
            var s = e.indexOf("#");
            -1 !== s && (e = e.slice(0, s)),
                (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
    }
    (J.append = function (e, t) {
        this._pairs.push([e, t]);
    }),
        (J.toString = function (e) {
            var t = e
                ? function (t) {
                    return e.call(this, t, I);
                }
                : I;
            return this._pairs
                .map(function (e) {
                    return t(e[0]) + "=" + t(e[1]);
                }, "")
                .join("&");
        });
    var W,
        K = (function () {
            function e() {
                t(this, e), (this.handlers = []);
            }
            return (
                r(e, [
                    {
                        key: "use",
                        value: function (e, t, n) {
                            return (
                                this.handlers.push({
                                    fulfilled: e,
                                    rejected: t,
                                    synchronous: !!n && n.synchronous,
                                    runWhen: n ? n.runWhen : null,
                                }),
                                this.handlers.length - 1
                            );
                        },
                    },
                    {
                        key: "eject",
                        value: function (e) {
                            this.handlers[e] && (this.handlers[e] = null);
                        },
                    },
                    {
                        key: "clear",
                        value: function () {
                            this.handlers && (this.handlers = []);
                        },
                    },
                    {
                        key: "forEach",
                        value: function (e) {
                            P.forEach(this.handlers, function (t) {
                                null !== t && e(t);
                            });
                        },
                    },
                ]),
                    e
            );
        })(),
        X = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
        },
        $ = "undefined" != typeof URLSearchParams ? URLSearchParams : M,
        Q = FormData,
        G =
            ("undefined" == typeof navigator ||
                ("ReactNative" !== (W = navigator.product) &&
                    "NativeScript" !== W &&
                    "NS" !== W)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document,
        Y = {
            isBrowser: !0,
            classes: { URLSearchParams: $, FormData: Q, Blob: Blob },
            isStandardBrowserEnv: G,
            protocols: ["http", "https", "file", "blob", "url", "data"],
        };
    function Z(e) {
        function t(e, n, r, o) {
            var i = e[o++],
                s = Number.isFinite(+i),
                a = o >= e.length;
            return (
                (i = !i && P.isArray(r) ? r.length : i),
                    a
                        ? (P.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !s)
                        : ((r[i] && P.isObject(r[i])) || (r[i] = []),
                        t(e, n, r[i], o) &&
                        P.isArray(r[i]) &&
                        (r[i] = (function (e) {
                            var t,
                                n,
                                r = {},
                                o = Object.keys(e),
                                i = o.length;
                            for (t = 0; t < i; t++) r[(n = o[t])] = e[n];
                            return r;
                        })(r[i])),
                            !s)
            );
        }
        if (P.isFormData(e) && P.isFunction(e.entries)) {
            var n = {};
            return (
                P.forEachEntry(e, function (e, r) {
                    t(
                        (function (e) {
                            return P.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                                return "[]" === e[0] ? "" : e[1] || e[0];
                            });
                        })(e),
                        r,
                        n,
                        0
                    );
                }),
                    n
            );
        }
        return null;
    }
    var ee = Y.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, o, i) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                P.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                P.isString(r) && s.push("path=" + r),
                P.isString(o) && s.push("domain=" + o),
                !0 === i && s.push("secure"),
                    (document.cookie = s.join("; "));
            },
            read: function (e) {
                var t = document.cookie.match(
                    new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
            },
        }
        : {
            write: function () {},
            read: function () {
                return null;
            },
            remove: function () {},
        };
    function te(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
            })(e, t)
            : t;
    }
    var ne = Y.isStandardBrowserEnv
        ? (function () {
            var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
            function r(e) {
                var r = e;
                return (
                    t && (n.setAttribute("href", r), (r = n.href)),
                        n.setAttribute("href", r),
                        {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname:
                                "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                        }
                );
            }
            return (
                (e = r(window.location.href)),
                    function (t) {
                        var n = P.isString(t) ? r(t) : t;
                        return n.protocol === e.protocol && n.host === e.host;
                    }
            );
        })()
        : function () {
            return !0;
        };
    function re(e, t, n) {
        _.call(this, null == e ? "canceled" : e, _.ERR_CANCELED, t, n),
            (this.name = "CanceledError");
    }
    P.inherits(re, _, { __CANCEL__: !0 });
    var oe = P.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
        ]),
        ie = Symbol("internals"),
        se = Symbol("defaults");
    function ae(e) {
        return e && String(e).trim().toLowerCase();
    }
    function ue(e) {
        return !1 === e || null == e ? e : P.isArray(e) ? e.map(ue) : String(e);
    }
    function ce(e, t, n, r) {
        return P.isFunction(r)
            ? r.call(this, t, n)
            : P.isString(t)
                ? P.isString(r)
                    ? -1 !== t.indexOf(r)
                    : P.isRegExp(r)
                        ? r.test(t)
                        : void 0
                : void 0;
    }
    function fe(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), o = r.length; o-- > 0; )
            if (t === (n = r[o]).toLowerCase()) return n;
        return null;
    }
    function le(e, t) {
        e && this.set(e), (this[se] = t || null);
    }
    function de(e, t) {
        var n = 0,
            r = (function (e, t) {
                e = e || 10;
                var n,
                    r = new Array(e),
                    o = new Array(e),
                    i = 0,
                    s = 0;
                return (
                    (t = void 0 !== t ? t : 1e3),
                        function (a) {
                            var u = Date.now(),
                                c = o[s];
                            n || (n = u), (r[i] = a), (o[i] = u);
                            for (var f = s, l = 0; f !== i; ) (l += r[f++]), (f %= e);
                            if (((i = (i + 1) % e) === s && (s = (s + 1) % e), !(u - n < t))) {
                                var d = c && u - c;
                                return d ? Math.round((1e3 * l) / d) : void 0;
                            }
                        }
                );
            })(50, 250);
        return function (o) {
            var i = o.loaded,
                s = o.lengthComputable ? o.total : void 0,
                a = i - n,
                u = r(a);
            n = i;
            var c = {
                loaded: i,
                total: s,
                progress: s ? i / s : void 0,
                bytes: a,
                rate: u || void 0,
                estimated: u && s && i <= s ? (s - i) / u : void 0,
            };
            (c[t ? "download" : "upload"] = !0), e(c);
        };
    }
    function he(e) {
        return new Promise(function (t, n) {
            var r,
                o = e.data,
                i = le.from(e.headers).normalize(),
                s = e.responseType;
            function a() {
                e.cancelToken && e.cancelToken.unsubscribe(r),
                e.signal && e.signal.removeEventListener("abort", r);
            }
            P.isFormData(o) && Y.isStandardBrowserEnv && i.setContentType(!1);
            var u = new XMLHttpRequest();
            if (e.auth) {
                var c = e.auth.username || "",
                    f = e.auth.password
                        ? unescape(encodeURIComponent(e.auth.password))
                        : "";
                i.set("Authorization", "Basic " + btoa(c + ":" + f));
            }
            var l = te(e.baseURL, e.url);
            function d() {
                if (u) {
                    var r = le.from(
                        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
                    );
                    !(function (e, t, n) {
                        var r = n.config.validateStatus;
                        n.status && r && !r(n.status)
                            ? t(
                                new _(
                                    "Request failed with status code " + n.status,
                                    [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][
                                    Math.floor(n.status / 100) - 4
                                        ],
                                    n.config,
                                    n.request,
                                    n
                                )
                            )
                            : e(n);
                    })(
                        function (e) {
                            t(e), a();
                        },
                        function (e) {
                            n(e), a();
                        },
                        {
                            data:
                                s && "text" !== s && "json" !== s ? u.response : u.responseText,
                            status: u.status,
                            statusText: u.statusText,
                            headers: r,
                            config: e,
                            request: u,
                        }
                    ),
                        (u = null);
                }
            }
            if (
                (u.open(e.method.toUpperCase(), V(l, e.params, e.paramsSerializer), !0),
                    (u.timeout = e.timeout),
                    "onloadend" in u
                        ? (u.onloadend = d)
                        : (u.onreadystatechange = function () {
                            u &&
                            4 === u.readyState &&
                            (0 !== u.status ||
                                (u.responseURL && 0 === u.responseURL.indexOf("file:"))) &&
                            setTimeout(d);
                        }),
                    (u.onabort = function () {
                        u && (n(new _("Request aborted", _.ECONNABORTED, e, u)), (u = null));
                    }),
                    (u.onerror = function () {
                        n(new _("Network Error", _.ERR_NETWORK, e, u)), (u = null);
                    }),
                    (u.ontimeout = function () {
                        var t = e.timeout
                                ? "timeout of " + e.timeout + "ms exceeded"
                                : "timeout exceeded",
                            r = e.transitional || X;
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                            n(
                                new _(
                                    t,
                                    r.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
                                    e,
                                    u
                                )
                            ),
                            (u = null);
                    }),
                    Y.isStandardBrowserEnv)
            ) {
                var h =
                    (e.withCredentials || ne(l)) &&
                    e.xsrfCookieName &&
                    ee.read(e.xsrfCookieName);
                h && i.set(e.xsrfHeaderName, h);
            }
            void 0 === o && i.setContentType(null),
            "setRequestHeader" in u &&
            P.forEach(i.toJSON(), function (e, t) {
                u.setRequestHeader(t, e);
            }),
            P.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
            s && "json" !== s && (u.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
            u.addEventListener("progress", de(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress &&
            u.upload &&
            u.upload.addEventListener("progress", de(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
            ((r = function (t) {
                u &&
                (n(!t || t.type ? new re(null, e, u) : t), u.abort(), (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(r),
            e.signal &&
            (e.signal.aborted ? r() : e.signal.addEventListener("abort", r)));
            var p,
                m = ((p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l)) && p[1]) || "";
            m && -1 === Y.protocols.indexOf(m)
                ? n(new _("Unsupported protocol " + m + ":", _.ERR_BAD_REQUEST, e))
                : u.send(o || null);
        });
    }
    Object.assign(le.prototype, {
        set: function (e, t, n) {
            var r = this;
            function o(e, t, n) {
                var o = ae(t);
                if (!o) throw new Error("header name must be a non-empty string");
                var i = fe(r, o);
                (!i || !0 === n || (!1 !== r[i] && !1 !== n)) && (r[i || t] = ue(e));
            }
            return (
                P.isPlainObject(e)
                    ? P.forEach(e, function (e, n) {
                        o(e, n, t);
                    })
                    : o(t, e, n),
                    this
            );
        },
        get: function (e, t) {
            if ((e = ae(e))) {
                var n = fe(this, e);
                if (n) {
                    var r = this[n];
                    if (!t) return r;
                    if (!0 === t)
                        return (function (e) {
                            for (
                                var t,
                                    n = Object.create(null),
                                    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                (t = r.exec(e));

                            )
                                n[t[1]] = t[2];
                            return n;
                        })(r);
                    if (P.isFunction(t)) return t.call(this, r, n);
                    if (P.isRegExp(t)) return t.exec(r);
                    throw new TypeError("parser must be boolean|regexp|function");
                }
            }
        },
        has: function (e, t) {
            if ((e = ae(e))) {
                var n = fe(this, e);
                return !(!n || (t && !ce(0, this[n], n, t)));
            }
            return !1;
        },
        delete: function (e, t) {
            var n = this,
                r = !1;
            function o(e) {
                if ((e = ae(e))) {
                    var o = fe(n, e);
                    !o || (t && !ce(0, n[o], o, t)) || (delete n[o], (r = !0));
                }
            }
            return P.isArray(e) ? e.forEach(o) : o(e), r;
        },
        clear: function () {
            return Object.keys(this).forEach(this.delete.bind(this));
        },
        normalize: function (e) {
            var t = this,
                n = {};
            return (
                P.forEach(this, function (r, o) {
                    var i = fe(n, o);
                    if (i) return (t[i] = ue(r)), void delete t[o];
                    var s = e
                        ? (function (e) {
                            return e
                                .trim()
                                .toLowerCase()
                                .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                    return t.toUpperCase() + n;
                                });
                        })(o)
                        : String(o).trim();
                    s !== o && delete t[o], (t[s] = ue(r)), (n[s] = !0);
                }),
                    this
            );
        },
        toJSON: function (e) {
            var t = Object.create(null);
            return (
                P.forEach(Object.assign({}, this[se] || null, this), function (n, r) {
                    null != n &&
                    !1 !== n &&
                    (t[r] = e && P.isArray(n) ? n.join(", ") : n);
                }),
                    t
            );
        },
    }),
        Object.assign(le, {
            from: function (e) {
                return P.isString(e)
                    ? new this(
                        ((i = {}),
                        (t = e) &&
                        t.split("\n").forEach(function (e) {
                            (o = e.indexOf(":")),
                                (n = e.substring(0, o).trim().toLowerCase()),
                                (r = e.substring(o + 1).trim()),
                            !n ||
                            (i[n] && oe[n]) ||
                            ("set-cookie" === n
                                ? i[n]
                                    ? i[n].push(r)
                                    : (i[n] = [r])
                                : (i[n] = i[n] ? i[n] + ", " + r : r));
                        }),
                            i)
                    )
                    : e instanceof this
                        ? e
                        : new this(e);
                var t, n, r, o, i;
            },
            accessor: function (e) {
                var t = (this[ie] = this[ie] = { accessors: {} }).accessors,
                    n = this.prototype;
                function r(e) {
                    var r = ae(e);
                    t[r] ||
                    (!(function (e, t) {
                        var n = P.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                            Object.defineProperty(e, r + n, {
                                value: function (e, n, o) {
                                    return this[r].call(this, t, e, n, o);
                                },
                                configurable: !0,
                            });
                        });
                    })(n, e),
                        (t[r] = !0));
                }
                return P.isArray(e) ? e.forEach(r) : r(e), this;
            },
        }),
        le.accessor([
            "Content-Type",
            "Content-Length",
            "Accept",
            "Accept-Encoding",
            "User-Agent",
        ]),
        P.freezeMethods(le.prototype),
        P.freezeMethods(le);
    var pe = { http: he, xhr: he },
        me = function (e) {
            if (P.isString(e)) {
                var t = pe[e];
                if (!e)
                    throw Error(
                        P.hasOwnProp(e)
                            ? "Adapter '".concat(e, "' is not available in the build")
                            : "Can not resolve adapter '".concat(e, "'")
                    );
                return t;
            }
            if (!P.isFunction(e)) throw new TypeError("adapter is not a function");
            return e;
        },
        ve = { "Content-Type": "application/x-www-form-urlencoded" };
    var ye,
        be = {
            transitional: X,
            adapter:
                ("undefined" != typeof XMLHttpRequest
                    ? (ye = me("xhr"))
                    : "undefined" != typeof process &&
                    "process" === P.kindOf(process) &&
                    (ye = me("http")),
                    ye),
            transformRequest: [
                function (e, t) {
                    var n,
                        r = t.getContentType() || "",
                        o = r.indexOf("application/json") > -1,
                        i = P.isObject(e);
                    if ((i && P.isHTMLForm(e) && (e = new FormData(e)), P.isFormData(e)))
                        return o && o ? JSON.stringify(Z(e)) : e;
                    if (
                        P.isArrayBuffer(e) ||
                        P.isBuffer(e) ||
                        P.isStream(e) ||
                        P.isFile(e) ||
                        P.isBlob(e)
                    )
                        return e;
                    if (P.isArrayBufferView(e)) return e.buffer;
                    if (P.isURLSearchParams(e))
                        return (
                            t.setContentType(
                                "application/x-www-form-urlencoded;charset=utf-8",
                                !1
                            ),
                                e.toString()
                        );
                    if (i) {
                        if (r.indexOf("application/x-www-form-urlencoded") > -1)
                            return (function (e, t) {
                                return q(
                                    e,
                                    new Y.classes.URLSearchParams(),
                                    Object.assign(
                                        {
                                            visitor: function (e, t, n, r) {
                                                return Y.isNode && P.isBuffer(e)
                                                    ? (this.append(t, e.toString("base64")), !1)
                                                    : r.defaultVisitor.apply(this, arguments);
                                            },
                                        },
                                        t
                                    )
                                );
                            })(e, this.formSerializer).toString();
                        if (
                            (n = P.isFileList(e)) ||
                            r.indexOf("multipart/form-data") > -1
                        ) {
                            var s = this.env && this.env.FormData;
                            return q(
                                n ? { "files[]": e } : e,
                                s && new s(),
                                this.formSerializer
                            );
                        }
                    }
                    return i || o
                        ? (t.setContentType("application/json", !1),
                            (function (e, t, n) {
                                if (P.isString(e))
                                    try {
                                        return (t || JSON.parse)(e), P.trim(e);
                                    } catch (e) {
                                        if ("SyntaxError" !== e.name) throw e;
                                    }
                                return (n || JSON.stringify)(e);
                            })(e))
                        : e;
                },
            ],
            transformResponse: [
                function (e) {
                    var t = this.transitional || be.transitional,
                        n = t && t.forcedJSONParsing,
                        r = "json" === this.responseType;
                    if (e && P.isString(e) && ((n && !this.responseType) || r)) {
                        var o = !(t && t.silentJSONParsing) && r;
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            if (o) {
                                if ("SyntaxError" === e.name)
                                    throw _.from(
                                        e,
                                        _.ERR_BAD_RESPONSE,
                                        this,
                                        null,
                                        this.response
                                    );
                                throw e;
                            }
                        }
                    }
                    return e;
                },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: Y.classes.FormData, Blob: Y.classes.Blob },
            validateStatus: function (e) {
                return e >= 200 && e < 300;
            },
            headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
    function ge(e, t) {
        var n = this || be,
            r = t || n,
            o = le.from(r.headers),
            i = r.data;
        return (
            P.forEach(e, function (e) {
                i = e.call(n, i, o.normalize(), t ? t.status : void 0);
            }),
                o.normalize(),
                i
        );
    }
    function Ee(e) {
        return !(!e || !e.__CANCEL__);
    }
    function we(e) {
        if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
        )
            throw new re();
    }
    function Oe(e) {
        return (
            we(e),
                (e.headers = le.from(e.headers)),
                (e.data = ge.call(e, e.transformRequest)),
                (e.adapter || be.adapter)(e).then(
                    function (t) {
                        return (
                            we(e),
                                (t.data = ge.call(e, e.transformResponse, t)),
                                (t.headers = le.from(t.headers)),
                                t
                        );
                    },
                    function (t) {
                        return (
                            Ee(t) ||
                            (we(e),
                            t &&
                            t.response &&
                            ((t.response.data = ge.call(
                                e,
                                e.transformResponse,
                                t.response
                            )),
                                (t.response.headers = le.from(t.response.headers)))),
                                Promise.reject(t)
                        );
                    }
                )
        );
    }
    function Se(e, t) {
        t = t || {};
        var n = {};
        function r(e, t) {
            return P.isPlainObject(e) && P.isPlainObject(t)
                ? P.merge(e, t)
                : P.isPlainObject(t)
                    ? P.merge({}, t)
                    : P.isArray(t)
                        ? t.slice()
                        : t;
        }
        function o(n) {
            return P.isUndefined(t[n])
                ? P.isUndefined(e[n])
                    ? void 0
                    : r(void 0, e[n])
                : r(e[n], t[n]);
        }
        function i(e) {
            if (!P.isUndefined(t[e])) return r(void 0, t[e]);
        }
        function s(n) {
            return P.isUndefined(t[n])
                ? P.isUndefined(e[n])
                    ? void 0
                    : r(void 0, e[n])
                : r(void 0, t[n]);
        }
        function a(n) {
            return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0;
        }
        var u = {
            url: i,
            method: i,
            data: i,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
        };
        return (
            P.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
                var t = u[e] || o,
                    r = t(e);
                (P.isUndefined(r) && t !== a) || (n[e] = r);
            }),
                n
        );
    }
    P.forEach(["delete", "get", "head"], function (e) {
        be.headers[e] = {};
    }),
        P.forEach(["post", "put", "patch"], function (e) {
            be.headers[e] = P.merge(ve);
        });
    var Re = "1.1.3",
        Ae = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (t, n) {
            Ae[t] = function (r) {
                return e(r) === t || "a" + (n < 1 ? "n " : " ") + t;
            };
        }
    );
    var je = {};
    Ae.transitional = function (e, t, n) {
        function r(e, t) {
            return (
                "[Axios v1.1.3] Transitional option '" +
                e +
                "'" +
                t +
                (n ? ". " + n : "")
            );
        }
        return function (n, o, i) {
            if (!1 === e)
                throw new _(
                    r(o, " has been removed" + (t ? " in " + t : "")),
                    _.ERR_DEPRECATED
                );
            return (
                t &&
                !je[o] &&
                ((je[o] = !0),
                    console.warn(
                        r(
                            o,
                            " has been deprecated since v" +
                            t +
                            " and will be removed in the near future"
                        )
                    )),
                !e || e(n, o, i)
            );
        };
    };
    var Te = {
            assertOptions: function (t, n, r) {
                if ("object" !== e(t))
                    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
                for (var o = Object.keys(t), i = o.length; i-- > 0; ) {
                    var s = o[i],
                        a = n[s];
                    if (a) {
                        var u = t[s],
                            c = void 0 === u || a(u, s, t);
                        if (!0 !== c)
                            throw new _(
                                "option " + s + " must be " + c,
                                _.ERR_BAD_OPTION_VALUE
                            );
                    } else if (!0 !== r)
                        throw new _("Unknown option " + s, _.ERR_BAD_OPTION);
                }
            },
            validators: Ae,
        },
        xe = Te.validators,
        Ce = (function () {
            function e(n) {
                t(this, e),
                    (this.defaults = n),
                    (this.interceptors = { request: new K(), response: new K() });
            }
            return (
                r(e, [
                    {
                        key: "request",
                        value: function (e, t) {
                            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
                            var n = (t = Se(this.defaults, t)),
                                r = n.transitional,
                                o = n.paramsSerializer;
                            void 0 !== r &&
                            Te.assertOptions(
                                r,
                                {
                                    silentJSONParsing: xe.transitional(xe.boolean),
                                    forcedJSONParsing: xe.transitional(xe.boolean),
                                    clarifyTimeoutError: xe.transitional(xe.boolean),
                                },
                                !1
                            ),
                            void 0 !== o &&
                            Te.assertOptions(
                                o,
                                { encode: xe.function, serialize: xe.function },
                                !0
                            ),
                                (t.method = (
                                    t.method ||
                                    this.defaults.method ||
                                    "get"
                                ).toLowerCase());
                            var i =
                                t.headers && P.merge(t.headers.common, t.headers[t.method]);
                            i &&
                            P.forEach(
                                ["delete", "get", "head", "post", "put", "patch", "common"],
                                function (e) {
                                    delete t.headers[e];
                                }
                            ),
                                (t.headers = new le(t.headers, i));
                            var s = [],
                                a = !0;
                            this.interceptors.request.forEach(function (e) {
                                ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                                ((a = a && e.synchronous),
                                    s.unshift(e.fulfilled, e.rejected));
                            });
                            var u,
                                c = [];
                            this.interceptors.response.forEach(function (e) {
                                c.push(e.fulfilled, e.rejected);
                            });
                            var f,
                                l = 0;
                            if (!a) {
                                var d = [Oe.bind(this), void 0];
                                for (
                                    d.unshift.apply(d, s),
                                        d.push.apply(d, c),
                                        f = d.length,
                                        u = Promise.resolve(t);
                                    l < f;

                                )
                                    u = u.then(d[l++], d[l++]);
                                return u;
                            }
                            f = s.length;
                            var h = t;
                            for (l = 0; l < f; ) {
                                var p = s[l++],
                                    m = s[l++];
                                try {
                                    h = p(h);
                                } catch (e) {
                                    m.call(this, e);
                                    break;
                                }
                            }
                            try {
                                u = Oe.call(this, h);
                            } catch (e) {
                                return Promise.reject(e);
                            }
                            for (l = 0, f = c.length; l < f; ) u = u.then(c[l++], c[l++]);
                            return u;
                        },
                    },
                    {
                        key: "getUri",
                        value: function (e) {
                            return V(
                                te((e = Se(this.defaults, e)).baseURL, e.url),
                                e.params,
                                e.paramsSerializer
                            );
                        },
                    },
                ]),
                    e
            );
        })();
    P.forEach(["delete", "get", "head", "options"], function (e) {
        Ce.prototype[e] = function (t, n) {
            return this.request(
                Se(n || {}, { method: e, url: t, data: (n || {}).data })
            );
        };
    }),
        P.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
                return function (n, r, o) {
                    return this.request(
                        Se(o || {}, {
                            method: e,
                            headers: t ? { "Content-Type": "multipart/form-data" } : {},
                            url: n,
                            data: r,
                        })
                    );
                };
            }
            (Ce.prototype[e] = t()), (Ce.prototype[e + "Form"] = t(!0));
        });
    var Ne = (function () {
        function e(n) {
            if ((t(this, e), "function" != typeof n))
                throw new TypeError("executor must be a function.");
            var r;
            this.promise = new Promise(function (e) {
                r = e;
            });
            var o = this;
            this.promise.then(function (e) {
                if (o._listeners) {
                    for (var t = o._listeners.length; t-- > 0; ) o._listeners[t](e);
                    o._listeners = null;
                }
            }),
                (this.promise.then = function (e) {
                    var t,
                        n = new Promise(function (e) {
                            o.subscribe(e), (t = e);
                        }).then(e);
                    return (
                        (n.cancel = function () {
                            o.unsubscribe(t);
                        }),
                            n
                    );
                }),
                n(function (e, t, n) {
                    o.reason || ((o.reason = new re(e, t, n)), r(o.reason));
                });
        }
        return (
            r(
                e,
                [
                    {
                        key: "throwIfRequested",
                        value: function () {
                            if (this.reason) throw this.reason;
                        },
                    },
                    {
                        key: "subscribe",
                        value: function (e) {
                            this.reason
                                ? e(this.reason)
                                : this._listeners
                                    ? this._listeners.push(e)
                                    : (this._listeners = [e]);
                        },
                    },
                    {
                        key: "unsubscribe",
                        value: function (e) {
                            if (this._listeners) {
                                var t = this._listeners.indexOf(e);
                                -1 !== t && this._listeners.splice(t, 1);
                            }
                        },
                    },
                ],
                [
                    {
                        key: "source",
                        value: function () {
                            var t;
                            return {
                                token: new e(function (e) {
                                    t = e;
                                }),
                                cancel: t,
                            };
                        },
                    },
                ]
            ),
                e
        );
    })();
    var Pe = (function e(t) {
        var n = new Ce(t),
            r = o(Ce.prototype.request, n);
        return (
            P.extend(r, Ce.prototype, n, { allOwnKeys: !0 }),
                P.extend(r, n, null, { allOwnKeys: !0 }),
                (r.create = function (n) {
                    return e(Se(t, n));
                }),
                r
        );
    })(be);
    return (
        (Pe.Axios = Ce),
            (Pe.CanceledError = re),
            (Pe.CancelToken = Ne),
            (Pe.isCancel = Ee),
            (Pe.VERSION = Re),
            (Pe.toFormData = q),
            (Pe.AxiosError = _),
            (Pe.Cancel = Pe.CanceledError),
            (Pe.all = function (e) {
                return Promise.all(e);
            }),
            (Pe.spread = function (e) {
                return function (t) {
                    return e.apply(null, t);
                };
            }),
            (Pe.isAxiosError = function (e) {
                return P.isObject(e) && !0 === e.isAxiosError;
            }),
            (Pe.formToJSON = function (e) {
                return Z(P.isHTMLForm(e) ? new FormData(e) : e);
            }),
            Pe
    );
});
//# sourceMappingURL=axios.min.js.map

/**
 * ================================================
 *   设置根元素font-size
 * 当设备宽度为375(iPhone6)时，根元素font-size=16px;
 × ================================================
 */
(function (doc, win) {
    var docEl = win.document.documentElement;
    var resizeEvt =
        "orientationchange" in window ? "orientationchange" : "resize";

    var refreshRem = function () {
        var clientWidth =
            win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;

        // console.log(clientWidth);
        if (!clientWidth) return;
        var fz;
        var width = clientWidth;
        fz = (16 * width) / 375;
        docEl.style.fontSize = fz + "px"; //这样每一份也是16px,即1rem=16px
        console.log(fz, "html_font-size");
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refreshRem, false);
    doc.addEventListener("DOMContentLoaded", refreshRem, false);
    refreshRem();
})(document, window);

// 弹窗
/**
 * @author 蓝色标题栏 可以手动关闭 文字提示 无按钮
 * @param args  -{title:"",content:""}
 */
function llAlert(args) {
    var blue_head_toast = document.createElement("div"); /* 创建div*/
    blue_head_toast.className = "zhezhao"; /* 创建class属性*/
    /* zhezhao 后追加内容 */
    blue_head_toast.innerHTML =
        `
      <div class="alert">
          <div class="header1"><span class="title">` +
        args.title +
        `</span><span class="close">X</span></div>
          <div class="main">
          <p>` +
        args.content +
        `</p>
          </div>
      </div>
      `;
    /* 找到父元素 */
    var body = document.querySelector("body");
    body.appendChild(blue_head_toast); /* 在父元素上追加内容 */

    /* 获取close元素（关闭） */
    var closeDiv = document.querySelector(".close");
    /* 设置关闭 点击事件 */
    closeDiv.onclick = function () {
        console.log("22222");
        body.removeChild(blue_head_toast); /* 移除*/
    };
}

/**
 * @author 蓝色加载 调用delloadding()关闭
 * @param
 */
function loadding() {
    var loadding = document.createElement("div"); /* 创建div*/
    loadding.className = "loadding"; /* 创建class属性*/
    /* zhezhao 后追加内容 */
    loadding.innerHTML = `
          <img src="mobile/images/company/company_list/loading.gif" />
      `;
    /* 找到父元素 */
    var body = document.querySelector("body");
    body.appendChild(loadding); /* 在父元素上追加内容 */
}

/**
 * @author 关闭蓝色加载 配套loadding()使用
 * @param
 */
function delloadding() {
    let loaddingbox = document.querySelectorAll(".loadding");
    window.document.body.removeChild(loaddingbox[0]); /* 移除*/
}

/**
 * @author 纯文本 白色背景提示 可手动关闭
 * @param text -{p1:"",p2:""}
 */
function text_toast(text) {
    var text_toast = document.createElement("div"); /* 创建div*/
    text_toast.className = "text_toast"; /* 创建class属性*/
    /* zhezhao 后追加内容 */
    text_toast.innerHTML = `
      <div class="alert">
          <span>${text.p1}</span>
      <span>${text.p2}</span>
      <img src="${img_src}mobile/images/company/company_list/text_close.png" class="close">
      </div>
      `;
    /* 找到父元素 */
    var body = document.querySelector("body");
    body.appendChild(text_toast); /* 在父元素上追加内容 */

    /* 获取close元素（关闭） */
    var closeDiv = document.querySelector(".close");
    /* 设置关闭 点击事件 */
    closeDiv.onclick = function () {
        console.log("22222");
        body.removeChild(text_toast); /* 移除*/
    };
}

/**
 * @author 提示购买会员，按钮跳转购买页面
 * @param text -{p1:"",p2:""}
 * @flag  按钮跳转用途
 */
function buy_vip_toast(a1, a2, a3, flag) {
    var text_toast = document.createElement("div"); /* 创建div*/
    text_toast.className = "buy_vip_toast"; /* 创建class属性*/
    /* zhezhao 后追加内容 */
    text_toast.innerHTML = `
      <div class="alert">
      <h3>${a1}</h3>
      <span>${a2}</span>
          <button id="buy_vip_toast_btn">${a3}</button>
      <img src="mobile/images/company/company_list/text_close.png" class="close">
      </div>
      `;
    /* 找到父元素 */
    var body = document.querySelector("body");
    body.appendChild(text_toast); /* 在父元素上追加内容 */

    $("#buy_vip_toast_btn").click(function () {
        if (flag == "login") {
            // 跳转登录页面
            window.location.pathname = "login";
        } else if (flag == "buy_yellow") {
            // 跳转购买黄钻页面
            window.location.pathname = "login";
        }
        body.removeChild(text_toast); /* 移除*/
    });

    /* 获取close元素（关闭） */
    var closeDiv = document.querySelector(".close");
    /* 设置关闭 点击事件 */
    closeDiv.onclick = function () {
        console.log("22222");
        body.removeChild(text_toast); /* 移除*/
    };
}

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: March 10, 2017
 */
!(function () {
    "use strict";
    var e,
        a = function (t, s) {
            function r(e) {
                return Math.floor(e);
            }
            function i() {
                var e = x.params.autoplay,
                    a = x.slides.eq(x.activeIndex);
                a.attr("data-swiper-autoplay") &&
                (e = a.attr("data-swiper-autoplay") || x.params.autoplay),
                    (x.autoplayTimeoutId = setTimeout(function () {
                        x.params.loop
                            ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x))
                            : x.isEnd
                                ? s.autoplayStopOnLast
                                    ? x.stopAutoplay()
                                    : (x._slideTo(0), x.emit("onAutoplay", x))
                                : (x._slideNext(), x.emit("onAutoplay", x));
                    }, e));
            }
            function n(a, t) {
                var s = e(a.target);
                if (!s.is(t))
                    if ("string" == typeof t) s = s.parents(t);
                    else if (t.nodeType) {
                        var r;
                        return (
                            s.parents().each(function (e, a) {
                                a === t && (r = t);
                            }),
                                r ? t : void 0
                        );
                    }
                if (0 !== s.length) return s[0];
            }
            function o(e, a) {
                a = a || {};
                var t = window.MutationObserver || window.WebkitMutationObserver,
                    s = new t(function (e) {
                        e.forEach(function (e) {
                            x.onResize(!0), x.emit("onObserverUpdate", x, e);
                        });
                    });
                s.observe(e, {
                    attributes: void 0 === a.attributes || a.attributes,
                    childList: void 0 === a.childList || a.childList,
                    characterData: void 0 === a.characterData || a.characterData,
                }),
                    x.observers.push(s);
            }
            function l(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = e.keyCode || e.charCode;
                if (
                    !x.params.allowSwipeToNext &&
                    ((x.isHorizontal() && 39 === a) || (!x.isHorizontal() && 40 === a))
                )
                    return !1;
                if (
                    !x.params.allowSwipeToPrev &&
                    ((x.isHorizontal() && 37 === a) || (!x.isHorizontal() && 38 === a))
                )
                    return !1;
                if (
                    !(
                        e.shiftKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.metaKey ||
                        (document.activeElement &&
                            document.activeElement.nodeName &&
                            ("input" === document.activeElement.nodeName.toLowerCase() ||
                                "textarea" === document.activeElement.nodeName.toLowerCase()))
                    )
                ) {
                    if (37 === a || 39 === a || 38 === a || 40 === a) {
                        var t = !1;
                        if (
                            x.container.parents("." + x.params.slideClass).length > 0 &&
                            0 === x.container.parents("." + x.params.slideActiveClass).length
                        )
                            return;
                        var s = { left: window.pageXOffset, top: window.pageYOffset },
                            r = window.innerWidth,
                            i = window.innerHeight,
                            n = x.container.offset();
                        x.rtl && (n.left = n.left - x.container[0].scrollLeft);
                        for (
                            var o = [
                                    [n.left, n.top],
                                    [n.left + x.width, n.top],
                                    [n.left, n.top + x.height],
                                    [n.left + x.width, n.top + x.height],
                                ],
                                l = 0;
                            l < o.length;
                            l++
                        ) {
                            var p = o[l];
                            p[0] >= s.left &&
                            p[0] <= s.left + r &&
                            p[1] >= s.top &&
                            p[1] <= s.top + i &&
                            (t = !0);
                        }
                        if (!t) return;
                    }
                    x.isHorizontal()
                        ? ((37 !== a && 39 !== a) ||
                        (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                        ((39 === a && !x.rtl) || (37 === a && x.rtl)) && x.slideNext(),
                        ((37 === a && !x.rtl) || (39 === a && x.rtl)) && x.slidePrev())
                        : ((38 !== a && 40 !== a) ||
                        (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                        40 === a && x.slideNext(),
                        38 === a && x.slidePrev()),
                        x.emit("onKeyPress", x, a);
                }
            }
            function p(e) {
                var a = 0,
                    t = 0,
                    s = 0,
                    r = 0;
                return (
                    "detail" in e && (t = e.detail),
                    "wheelDelta" in e && (t = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((a = t), (t = 0)),
                        (s = 10 * a),
                        (r = 10 * t),
                    "deltaY" in e && (r = e.deltaY),
                    "deltaX" in e && (s = e.deltaX),
                    (s || r) &&
                    e.deltaMode &&
                    (1 === e.deltaMode
                        ? ((s *= 40), (r *= 40))
                        : ((s *= 800), (r *= 800))),
                    s && !a && (a = s < 1 ? -1 : 1),
                    r && !t && (t = r < 1 ? -1 : 1),
                        { spinX: a, spinY: t, pixelX: s, pixelY: r }
                );
            }
            function d(e) {
                e.originalEvent && (e = e.originalEvent);
                var a = 0,
                    t = x.rtl ? -1 : 1,
                    s = p(e);
                if (x.params.mousewheelForceToAxis)
                    if (x.isHorizontal()) {
                        if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;
                        a = s.pixelX * t;
                    } else {
                        if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;
                        a = s.pixelY;
                    }
                else
                    a =
                        Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
                if (0 !== a) {
                    if ((x.params.mousewheelInvert && (a = -a), x.params.freeMode)) {
                        var r =
                                x.getWrapperTranslate() + a * x.params.mousewheelSensitivity,
                            i = x.isBeginning,
                            n = x.isEnd;
                        if (
                            (r >= x.minTranslate() && (r = x.minTranslate()),
                            r <= x.maxTranslate() && (r = x.maxTranslate()),
                                x.setWrapperTransition(0),
                                x.setWrapperTranslate(r),
                                x.updateProgress(),
                                x.updateActiveIndex(),
                            ((!i && x.isBeginning) || (!n && x.isEnd)) && x.updateClasses(),
                                x.params.freeModeSticky
                                    ? (clearTimeout(x.mousewheel.timeout),
                                        (x.mousewheel.timeout = setTimeout(function () {
                                            x.slideReset();
                                        }, 300)))
                                    : x.params.lazyLoading && x.lazy && x.lazy.load(),
                                x.emit("onScroll", x, e),
                            x.params.autoplay &&
                            x.params.autoplayDisableOnInteraction &&
                            x.stopAutoplay(),
                            0 === r || r === x.maxTranslate())
                        )
                            return;
                    } else {
                        if (new window.Date().getTime() - x.mousewheel.lastScrollTime > 60)
                            if (a < 0)
                                if ((x.isEnd && !x.params.loop) || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges) return !0;
                                } else x.slideNext(), x.emit("onScroll", x, e);
                            else if ((x.isBeginning && !x.params.loop) || x.animating) {
                                if (x.params.mousewheelReleaseOnEdges) return !0;
                            } else x.slidePrev(), x.emit("onScroll", x, e);
                        x.mousewheel.lastScrollTime = new window.Date().getTime();
                    }
                    return (
                        e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1
                    );
                }
            }
            function m(a, t) {
                a = e(a);
                var s,
                    r,
                    i,
                    n = x.rtl ? -1 : 1;
                (s = a.attr("data-swiper-parallax") || "0"),
                    (r = a.attr("data-swiper-parallax-x")),
                    (i = a.attr("data-swiper-parallax-y")),
                    r || i
                        ? ((r = r || "0"), (i = i || "0"))
                        : x.isHorizontal()
                            ? ((r = s), (i = "0"))
                            : ((i = s), (r = "0")),
                    (r =
                        r.indexOf("%") >= 0
                            ? parseInt(r, 10) * t * n + "%"
                            : r * t * n + "px"),
                    (i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px"),
                    a.transform("translate3d(" + r + ", " + i + ",0px)");
            }
            function u(e) {
                return (
                    0 !== e.indexOf("on") &&
                    (e =
                        e[0] !== e[0].toUpperCase()
                            ? "on" + e[0].toUpperCase() + e.substring(1)
                            : "on" + e),
                        e
                );
            }
            if (!(this instanceof a)) return new a(t, s);
            var c = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: 0.02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0,
                    },
                    flip: { slideShadows: !0, limitRotation: !0 },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    },
                    fade: { crossFade: !1 },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: 0.85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    paginationClickableClass: "swiper-pagination-clickable",
                    paginationModifierClass: "swiper-pagination-",
                    lazyLoadingClass: "swiper-lazy",
                    lazyStatusLoadingClass: "swiper-lazy-loading",
                    lazyStatusLoadedClass: "swiper-lazy-loaded",
                    lazyPreloaderClass: "swiper-lazy-preloader",
                    notificationClass: "swiper-notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "swiper-zoom-container",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0,
                },
                g = s && s.virtualTranslate;
            s = s || {};
            var h = {};
            for (var v in s)
                if (
                    "object" != typeof s[v] ||
                    null === s[v] ||
                    s[v].nodeType ||
                    s[v] === window ||
                    s[v] === document ||
                    ("undefined" != typeof Dom7 && s[v] instanceof Dom7) ||
                    ("undefined" != typeof jQuery && s[v] instanceof jQuery)
                )
                    h[v] = s[v];
                else {
                    h[v] = {};
                    for (var f in s[v]) h[v][f] = s[v][f];
                }
            for (var w in c)
                if (void 0 === s[w]) s[w] = c[w];
                else if ("object" == typeof s[w])
                    for (var y in c[w]) void 0 === s[w][y] && (s[w][y] = c[w][y]);
            var x = this;
            if (
                ((x.params = s),
                    (x.originalParams = h),
                    (x.classNames = []),
                void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7),
                (void 0 !== e ||
                    (e =
                        "undefined" == typeof Dom7
                            ? window.Dom7 || window.Zepto || window.jQuery
                            : Dom7)) &&
                ((x.$ = e),
                    (x.currentBreakpoint = void 0),
                    (x.getActiveBreakpoint = function () {
                        if (!x.params.breakpoints) return !1;
                        var e,
                            a = !1,
                            t = [];
                        for (e in x.params.breakpoints)
                            x.params.breakpoints.hasOwnProperty(e) && t.push(e);
                        t.sort(function (e, a) {
                            return parseInt(e, 10) > parseInt(a, 10);
                        });
                        for (var s = 0; s < t.length; s++)
                            (e = t[s]) >= window.innerWidth && !a && (a = e);
                        return a || "max";
                    }),
                    (x.setBreakpoint = function () {
                        var e = x.getActiveBreakpoint();
                        if (e && x.currentBreakpoint !== e) {
                            var a =
                                    e in x.params.breakpoints
                                        ? x.params.breakpoints[e]
                                        : x.originalParams,
                                t = x.params.loop && a.slidesPerView !== x.params.slidesPerView;
                            for (var s in a) x.params[s] = a[s];
                            (x.currentBreakpoint = e), t && x.destroyLoop && x.reLoop(!0);
                        }
                    }),
                x.params.breakpoints && x.setBreakpoint(),
                    (x.container = e(t)),
                0 !== x.container.length))
            ) {
                if (x.container.length > 1) {
                    var T = [];
                    return (
                        x.container.each(function () {
                            T.push(new a(this, s));
                        }),
                            T
                    );
                }
                (x.container[0].swiper = x),
                    x.container.data("swiper", x),
                    x.classNames.push(
                        x.params.containerModifierClass + x.params.direction
                    ),
                x.params.freeMode &&
                x.classNames.push(x.params.containerModifierClass + "free-mode"),
                x.support.flexbox ||
                (x.classNames.push(x.params.containerModifierClass + "no-flexbox"),
                    (x.params.slidesPerColumn = 1)),
                x.params.autoHeight &&
                x.classNames.push(x.params.containerModifierClass + "autoheight"),
                (x.params.parallax || x.params.watchSlidesVisibility) &&
                (x.params.watchSlidesProgress = !0),
                x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
                ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 &&
                (x.support.transforms3d
                    ? ((x.params.watchSlidesProgress = !0),
                        x.classNames.push(x.params.containerModifierClass + "3d"))
                    : (x.params.effect = "slide")),
                "slide" !== x.params.effect &&
                x.classNames.push(
                    x.params.containerModifierClass + x.params.effect
                ),
                "cube" === x.params.effect &&
                ((x.params.resistanceRatio = 0),
                    (x.params.slidesPerView = 1),
                    (x.params.slidesPerColumn = 1),
                    (x.params.slidesPerGroup = 1),
                    (x.params.centeredSlides = !1),
                    (x.params.spaceBetween = 0),
                    (x.params.virtualTranslate = !0)),
                ("fade" !== x.params.effect && "flip" !== x.params.effect) ||
                ((x.params.slidesPerView = 1),
                    (x.params.slidesPerColumn = 1),
                    (x.params.slidesPerGroup = 1),
                    (x.params.watchSlidesProgress = !0),
                    (x.params.spaceBetween = 0),
                void 0 === g && (x.params.virtualTranslate = !0)),
                x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
                    (x.wrapper = x.container.children("." + x.params.wrapperClass)),
                x.params.pagination &&
                ((x.paginationContainer = e(x.params.pagination)),
                x.params.uniqueNavElements &&
                "string" == typeof x.params.pagination &&
                x.paginationContainer.length > 1 &&
                1 === x.container.find(x.params.pagination).length &&
                (x.paginationContainer = x.container.find(x.params.pagination)),
                    "bullets" === x.params.paginationType &&
                    x.params.paginationClickable
                        ? x.paginationContainer.addClass(
                            x.params.paginationModifierClass + "clickable"
                        )
                        : (x.params.paginationClickable = !1),
                    x.paginationContainer.addClass(
                        x.params.paginationModifierClass + x.params.paginationType
                    )),
                (x.params.nextButton || x.params.prevButton) &&
                (x.params.nextButton &&
                ((x.nextButton = e(x.params.nextButton)),
                x.params.uniqueNavElements &&
                "string" == typeof x.params.nextButton &&
                x.nextButton.length > 1 &&
                1 === x.container.find(x.params.nextButton).length &&
                (x.nextButton = x.container.find(x.params.nextButton))),
                x.params.prevButton &&
                ((x.prevButton = e(x.params.prevButton)),
                x.params.uniqueNavElements &&
                "string" == typeof x.params.prevButton &&
                x.prevButton.length > 1 &&
                1 === x.container.find(x.params.prevButton).length &&
                (x.prevButton = x.container.find(x.params.prevButton)))),
                    (x.isHorizontal = function () {
                        return "horizontal" === x.params.direction;
                    }),
                    (x.rtl =
                        x.isHorizontal() &&
                        ("rtl" === x.container[0].dir.toLowerCase() ||
                            "rtl" === x.container.css("direction"))),
                x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
                x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
                x.params.slidesPerColumn > 1 &&
                x.classNames.push(x.params.containerModifierClass + "multirow"),
                x.device.android &&
                x.classNames.push(x.params.containerModifierClass + "android"),
                    x.container.addClass(x.classNames.join(" ")),
                    (x.translate = 0),
                    (x.progress = 0),
                    (x.velocity = 0),
                    (x.lockSwipeToNext = function () {
                        (x.params.allowSwipeToNext = !1),
                        x.params.allowSwipeToPrev === !1 &&
                        x.params.grabCursor &&
                        x.unsetGrabCursor();
                    }),
                    (x.lockSwipeToPrev = function () {
                        (x.params.allowSwipeToPrev = !1),
                        x.params.allowSwipeToNext === !1 &&
                        x.params.grabCursor &&
                        x.unsetGrabCursor();
                    }),
                    (x.lockSwipes = function () {
                        (x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1),
                        x.params.grabCursor && x.unsetGrabCursor();
                    }),
                    (x.unlockSwipeToNext = function () {
                        (x.params.allowSwipeToNext = !0),
                        x.params.allowSwipeToPrev === !0 &&
                        x.params.grabCursor &&
                        x.setGrabCursor();
                    }),
                    (x.unlockSwipeToPrev = function () {
                        (x.params.allowSwipeToPrev = !0),
                        x.params.allowSwipeToNext === !0 &&
                        x.params.grabCursor &&
                        x.setGrabCursor();
                    }),
                    (x.unlockSwipes = function () {
                        (x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0),
                        x.params.grabCursor && x.setGrabCursor();
                    }),
                    (x.setGrabCursor = function (e) {
                        (x.container[0].style.cursor = "move"),
                            (x.container[0].style.cursor = e
                                ? "-webkit-grabbing"
                                : "-webkit-grab"),
                            (x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                            (x.container[0].style.cursor = e ? "grabbing" : "grab");
                    }),
                    (x.unsetGrabCursor = function () {
                        x.container[0].style.cursor = "";
                    }),
                x.params.grabCursor && x.setGrabCursor(),
                    (x.imagesToLoad = []),
                    (x.imagesLoaded = 0),
                    (x.loadImage = function (e, a, t, s, r, i) {
                        function n() {
                            i && i();
                        }
                        var o;
                        e.complete && r
                            ? n()
                            : a
                                ? ((o = new window.Image()),
                                    (o.onload = n),
                                    (o.onerror = n),
                                s && (o.sizes = s),
                                t && (o.srcset = t),
                                a && (o.src = a))
                                : n();
                    }),
                    (x.preloadImages = function () {
                        function e() {
                            void 0 !== x &&
                            null !== x &&
                            x &&
                            (void 0 !== x.imagesLoaded && x.imagesLoaded++,
                            x.imagesLoaded === x.imagesToLoad.length &&
                            (x.params.updateOnImagesReady && x.update(),
                                x.emit("onImagesReady", x)));
                        }
                        x.imagesToLoad = x.container.find("img");
                        for (var a = 0; a < x.imagesToLoad.length; a++)
                            x.loadImage(
                                x.imagesToLoad[a],
                                x.imagesToLoad[a].currentSrc ||
                                x.imagesToLoad[a].getAttribute("src"),
                                x.imagesToLoad[a].srcset ||
                                x.imagesToLoad[a].getAttribute("srcset"),
                                x.imagesToLoad[a].sizes ||
                                x.imagesToLoad[a].getAttribute("sizes"),
                                !0,
                                e
                            );
                    }),
                    (x.autoplayTimeoutId = void 0),
                    (x.autoplaying = !1),
                    (x.autoplayPaused = !1),
                    (x.startAutoplay = function () {
                        return (
                            void 0 === x.autoplayTimeoutId &&
                            !!x.params.autoplay &&
                            !x.autoplaying &&
                            ((x.autoplaying = !0), x.emit("onAutoplayStart", x), void i())
                        );
                    }),
                    (x.stopAutoplay = function (e) {
                        x.autoplayTimeoutId &&
                        (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                            (x.autoplaying = !1),
                            (x.autoplayTimeoutId = void 0),
                            x.emit("onAutoplayStop", x));
                    }),
                    (x.pauseAutoplay = function (e) {
                        x.autoplayPaused ||
                        (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                            (x.autoplayPaused = !0),
                            0 === e
                                ? ((x.autoplayPaused = !1), i())
                                : x.wrapper.transitionEnd(function () {
                                    x &&
                                    ((x.autoplayPaused = !1),
                                        x.autoplaying ? i() : x.stopAutoplay());
                                }));
                    }),
                    (x.minTranslate = function () {
                        return -x.snapGrid[0];
                    }),
                    (x.maxTranslate = function () {
                        return -x.snapGrid[x.snapGrid.length - 1];
                    }),
                    (x.updateAutoHeight = function () {
                        var e,
                            a = [],
                            t = 0;
                        if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
                            for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                                var s = x.activeIndex + e;
                                if (s > x.slides.length) break;
                                a.push(x.slides.eq(s)[0]);
                            }
                        else a.push(x.slides.eq(x.activeIndex)[0]);
                        for (e = 0; e < a.length; e++)
                            if (void 0 !== a[e]) {
                                var r = a[e].offsetHeight;
                                t = r > t ? r : t;
                            }
                        t && x.wrapper.css("height", t + "px");
                    }),
                    (x.updateContainerSize = function () {
                        var e, a;
                        (e =
                            void 0 !== x.params.width
                                ? x.params.width
                                : x.container[0].clientWidth),
                            (a =
                                void 0 !== x.params.height
                                    ? x.params.height
                                    : x.container[0].clientHeight),
                        (0 === e && x.isHorizontal()) ||
                        (0 === a && !x.isHorizontal()) ||
                        ((e =
                            e -
                            parseInt(x.container.css("padding-left"), 10) -
                            parseInt(x.container.css("padding-right"), 10)),
                            (a =
                                a -
                                parseInt(x.container.css("padding-top"), 10) -
                                parseInt(x.container.css("padding-bottom"), 10)),
                            (x.width = e),
                            (x.height = a),
                            (x.size = x.isHorizontal() ? x.width : x.height));
                    }),
                    (x.updateSlidesSize = function () {
                        (x.slides = x.wrapper.children("." + x.params.slideClass)),
                            (x.snapGrid = []),
                            (x.slidesGrid = []),
                            (x.slidesSizesGrid = []);
                        var e,
                            a = x.params.spaceBetween,
                            t = -x.params.slidesOffsetBefore,
                            s = 0,
                            i = 0;
                        if (void 0 !== x.size) {
                            "string" == typeof a &&
                            a.indexOf("%") >= 0 &&
                            (a = (parseFloat(a.replace("%", "")) / 100) * x.size),
                                (x.virtualSize = -a),
                                x.rtl
                                    ? x.slides.css({ marginLeft: "", marginTop: "" })
                                    : x.slides.css({ marginRight: "", marginBottom: "" });
                            var n;
                            x.params.slidesPerColumn > 1 &&
                            ((n =
                                Math.floor(x.slides.length / x.params.slidesPerColumn) ===
                                x.slides.length / x.params.slidesPerColumn
                                    ? x.slides.length
                                    : Math.ceil(x.slides.length / x.params.slidesPerColumn) *
                                    x.params.slidesPerColumn),
                            "auto" !== x.params.slidesPerView &&
                            "row" === x.params.slidesPerColumnFill &&
                            (n = Math.max(
                                n,
                                x.params.slidesPerView * x.params.slidesPerColumn
                            )));
                            var o,
                                l = x.params.slidesPerColumn,
                                p = n / l,
                                d = p - (x.params.slidesPerColumn * p - x.slides.length);
                            for (e = 0; e < x.slides.length; e++) {
                                o = 0;
                                var m = x.slides.eq(e);
                                if (x.params.slidesPerColumn > 1) {
                                    var u, c, g;
                                    "column" === x.params.slidesPerColumnFill
                                        ? ((c = Math.floor(e / l)),
                                            (g = e - c * l),
                                        (c > d || (c === d && g === l - 1)) &&
                                        ++g >= l &&
                                        ((g = 0), c++),
                                            (u = c + (g * n) / l),
                                            m.css({
                                                "-webkit-box-ordinal-group": u,
                                                "-moz-box-ordinal-group": u,
                                                "-ms-flex-order": u,
                                                "-webkit-order": u,
                                                order: u,
                                            }))
                                        : ((g = Math.floor(e / p)), (c = e - g * p)),
                                        m
                                            .css(
                                                "margin-" + (x.isHorizontal() ? "top" : "left"),
                                                0 !== g &&
                                                x.params.spaceBetween &&
                                                x.params.spaceBetween + "px"
                                            )
                                            .attr("data-swiper-column", c)
                                            .attr("data-swiper-row", g);
                                }
                                "none" !== m.css("display") &&
                                ("auto" === x.params.slidesPerView
                                    ? ((o = x.isHorizontal()
                                        ? m.outerWidth(!0)
                                        : m.outerHeight(!0)),
                                    x.params.roundLengths && (o = r(o)))
                                    : ((o =
                                        (x.size - (x.params.slidesPerView - 1) * a) /
                                        x.params.slidesPerView),
                                    x.params.roundLengths && (o = r(o)),
                                        x.isHorizontal()
                                            ? (x.slides[e].style.width = o + "px")
                                            : (x.slides[e].style.height = o + "px")),
                                    (x.slides[e].swiperSlideSize = o),
                                    x.slidesSizesGrid.push(o),
                                    x.params.centeredSlides
                                        ? ((t = t + o / 2 + s / 2 + a),
                                        0 === s && 0 !== e && (t = t - x.size / 2 - a),
                                        0 === e && (t = t - x.size / 2 - a),
                                        Math.abs(t) < 0.001 && (t = 0),
                                        i % x.params.slidesPerGroup == 0 && x.snapGrid.push(t),
                                            x.slidesGrid.push(t))
                                        : (i % x.params.slidesPerGroup == 0 && x.snapGrid.push(t),
                                            x.slidesGrid.push(t),
                                            (t = t + o + a)),
                                    (x.virtualSize += o + a),
                                    (s = o),
                                    i++);
                            }
                            x.virtualSize =
                                Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                            var h;
                            if (
                                (x.rtl &&
                                x.wrongRTL &&
                                ("slide" === x.params.effect ||
                                    "coverflow" === x.params.effect) &&
                                x.wrapper.css({
                                    width: x.virtualSize + x.params.spaceBetween + "px",
                                }),
                                (x.support.flexbox && !x.params.setWrapperSize) ||
                                (x.isHorizontal()
                                    ? x.wrapper.css({
                                        width: x.virtualSize + x.params.spaceBetween + "px",
                                    })
                                    : x.wrapper.css({
                                        height: x.virtualSize + x.params.spaceBetween + "px",
                                    })),
                                x.params.slidesPerColumn > 1 &&
                                ((x.virtualSize = (o + x.params.spaceBetween) * n),
                                    (x.virtualSize =
                                        Math.ceil(x.virtualSize / x.params.slidesPerColumn) -
                                        x.params.spaceBetween),
                                    x.isHorizontal()
                                        ? x.wrapper.css({
                                            width: x.virtualSize + x.params.spaceBetween + "px",
                                        })
                                        : x.wrapper.css({
                                            height: x.virtualSize + x.params.spaceBetween + "px",
                                        }),
                                    x.params.centeredSlides))
                            ) {
                                for (h = [], e = 0; e < x.snapGrid.length; e++)
                                    x.snapGrid[e] < x.virtualSize + x.snapGrid[0] &&
                                    h.push(x.snapGrid[e]);
                                x.snapGrid = h;
                            }
                            if (!x.params.centeredSlides) {
                                for (h = [], e = 0; e < x.snapGrid.length; e++)
                                    x.snapGrid[e] <= x.virtualSize - x.size &&
                                    h.push(x.snapGrid[e]);
                                (x.snapGrid = h),
                                Math.floor(x.virtualSize - x.size) -
                                Math.floor(x.snapGrid[x.snapGrid.length - 1]) >
                                1 && x.snapGrid.push(x.virtualSize - x.size);
                            }
                            0 === x.snapGrid.length && (x.snapGrid = [0]),
                            0 !== x.params.spaceBetween &&
                            (x.isHorizontal()
                                ? x.rtl
                                    ? x.slides.css({ marginLeft: a + "px" })
                                    : x.slides.css({ marginRight: a + "px" })
                                : x.slides.css({ marginBottom: a + "px" })),
                            x.params.watchSlidesProgress && x.updateSlidesOffset();
                        }
                    }),
                    (x.updateSlidesOffset = function () {
                        for (var e = 0; e < x.slides.length; e++)
                            x.slides[e].swiperSlideOffset = x.isHorizontal()
                                ? x.slides[e].offsetLeft
                                : x.slides[e].offsetTop;
                    }),
                    (x.currentSlidesPerView = function () {
                        var e,
                            a,
                            t = 1;
                        if (x.params.centeredSlides) {
                            var s,
                                r = x.slides[x.activeIndex].swiperSlideSize;
                            for (e = x.activeIndex + 1; e < x.slides.length; e++)
                                x.slides[e] &&
                                !s &&
                                ((r += x.slides[e].swiperSlideSize),
                                    t++,
                                r > x.size && (s = !0));
                            for (a = x.activeIndex - 1; a >= 0; a--)
                                x.slides[a] &&
                                !s &&
                                ((r += x.slides[a].swiperSlideSize),
                                    t++,
                                r > x.size && (s = !0));
                        } else
                            for (e = x.activeIndex + 1; e < x.slides.length; e++)
                                x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && t++;
                        return t;
                    }),
                    (x.updateSlidesProgress = function (e) {
                        if (
                            (void 0 === e && (e = x.translate || 0), 0 !== x.slides.length)
                        ) {
                            void 0 === x.slides[0].swiperSlideOffset &&
                            x.updateSlidesOffset();
                            var a = -e;
                            x.rtl && (a = e),
                                x.slides.removeClass(x.params.slideVisibleClass);
                            for (var t = 0; t < x.slides.length; t++) {
                                var s = x.slides[t],
                                    r =
                                        (a +
                                            (x.params.centeredSlides ? x.minTranslate() : 0) -
                                            s.swiperSlideOffset) /
                                        (s.swiperSlideSize + x.params.spaceBetween);
                                if (x.params.watchSlidesVisibility) {
                                    var i = -(a - s.swiperSlideOffset),
                                        n = i + x.slidesSizesGrid[t];
                                    ((i >= 0 && i < x.size) ||
                                        (n > 0 && n <= x.size) ||
                                        (i <= 0 && n >= x.size)) &&
                                    x.slides.eq(t).addClass(x.params.slideVisibleClass);
                                }
                                s.progress = x.rtl ? -r : r;
                            }
                        }
                    }),
                    (x.updateProgress = function (e) {
                        void 0 === e && (e = x.translate || 0);
                        var a = x.maxTranslate() - x.minTranslate(),
                            t = x.isBeginning,
                            s = x.isEnd;
                        0 === a
                            ? ((x.progress = 0), (x.isBeginning = x.isEnd = !0))
                            : ((x.progress = (e - x.minTranslate()) / a),
                                (x.isBeginning = x.progress <= 0),
                                (x.isEnd = x.progress >= 1)),
                        x.isBeginning && !t && x.emit("onReachBeginning", x),
                        x.isEnd && !s && x.emit("onReachEnd", x),
                        x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                            x.emit("onProgress", x, x.progress);
                    }),
                    (x.updateActiveIndex = function () {
                        var e,
                            a,
                            t,
                            s = x.rtl ? x.translate : -x.translate;
                        for (a = 0; a < x.slidesGrid.length; a++)
                            void 0 !== x.slidesGrid[a + 1]
                                ? s >= x.slidesGrid[a] &&
                                s <
                                x.slidesGrid[a + 1] -
                                (x.slidesGrid[a + 1] - x.slidesGrid[a]) / 2
                                    ? (e = a)
                                    : s >= x.slidesGrid[a] &&
                                    s < x.slidesGrid[a + 1] &&
                                    (e = a + 1)
                                : s >= x.slidesGrid[a] && (e = a);
                        x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                            (t = Math.floor(e / x.params.slidesPerGroup)),
                        t >= x.snapGrid.length && (t = x.snapGrid.length - 1),
                        e !== x.activeIndex &&
                        ((x.snapIndex = t),
                            (x.previousIndex = x.activeIndex),
                            (x.activeIndex = e),
                            x.updateClasses(),
                            x.updateRealIndex());
                    }),
                    (x.updateRealIndex = function () {
                        x.realIndex = parseInt(
                            x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") ||
                            x.activeIndex,
                            10
                        );
                    }),
                    (x.updateClasses = function () {
                        x.slides.removeClass(
                            x.params.slideActiveClass +
                            " " +
                            x.params.slideNextClass +
                            " " +
                            x.params.slidePrevClass +
                            " " +
                            x.params.slideDuplicateActiveClass +
                            " " +
                            x.params.slideDuplicateNextClass +
                            " " +
                            x.params.slideDuplicatePrevClass
                        );
                        var a = x.slides.eq(x.activeIndex);
                        a.addClass(x.params.slideActiveClass),
                        s.loop &&
                        (a.hasClass(x.params.slideDuplicateClass)
                            ? x.wrapper
                                .children(
                                    "." +
                                    x.params.slideClass +
                                    ":not(." +
                                    x.params.slideDuplicateClass +
                                    ')[data-swiper-slide-index="' +
                                    x.realIndex +
                                    '"]'
                                )
                                .addClass(x.params.slideDuplicateActiveClass)
                            : x.wrapper
                                .children(
                                    "." +
                                    x.params.slideClass +
                                    "." +
                                    x.params.slideDuplicateClass +
                                    '[data-swiper-slide-index="' +
                                    x.realIndex +
                                    '"]'
                                )
                                .addClass(x.params.slideDuplicateActiveClass));
                        var t = a
                            .next("." + x.params.slideClass)
                            .addClass(x.params.slideNextClass);
                        x.params.loop &&
                        0 === t.length &&
                        ((t = x.slides.eq(0)), t.addClass(x.params.slideNextClass));
                        var r = a
                            .prev("." + x.params.slideClass)
                            .addClass(x.params.slidePrevClass);
                        if (
                            (x.params.loop &&
                            0 === r.length &&
                            ((r = x.slides.eq(-1)), r.addClass(x.params.slidePrevClass)),
                            s.loop &&
                            (t.hasClass(x.params.slideDuplicateClass)
                                ? x.wrapper
                                    .children(
                                        "." +
                                        x.params.slideClass +
                                        ":not(." +
                                        x.params.slideDuplicateClass +
                                        ')[data-swiper-slide-index="' +
                                        t.attr("data-swiper-slide-index") +
                                        '"]'
                                    )
                                    .addClass(x.params.slideDuplicateNextClass)
                                : x.wrapper
                                    .children(
                                        "." +
                                        x.params.slideClass +
                                        "." +
                                        x.params.slideDuplicateClass +
                                        '[data-swiper-slide-index="' +
                                        t.attr("data-swiper-slide-index") +
                                        '"]'
                                    )
                                    .addClass(x.params.slideDuplicateNextClass),
                                r.hasClass(x.params.slideDuplicateClass)
                                    ? x.wrapper
                                        .children(
                                            "." +
                                            x.params.slideClass +
                                            ":not(." +
                                            x.params.slideDuplicateClass +
                                            ')[data-swiper-slide-index="' +
                                            r.attr("data-swiper-slide-index") +
                                            '"]'
                                        )
                                        .addClass(x.params.slideDuplicatePrevClass)
                                    : x.wrapper
                                        .children(
                                            "." +
                                            x.params.slideClass +
                                            "." +
                                            x.params.slideDuplicateClass +
                                            '[data-swiper-slide-index="' +
                                            r.attr("data-swiper-slide-index") +
                                            '"]'
                                        )
                                        .addClass(x.params.slideDuplicatePrevClass)),
                            x.paginationContainer && x.paginationContainer.length > 0)
                        ) {
                            var i,
                                n = x.params.loop
                                    ? Math.ceil(
                                        (x.slides.length - 2 * x.loopedSlides) /
                                        x.params.slidesPerGroup
                                    )
                                    : x.snapGrid.length;
                            if (
                                (x.params.loop
                                    ? ((i = Math.ceil(
                                        (x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup
                                    )),
                                    i > x.slides.length - 1 - 2 * x.loopedSlides &&
                                    (i -= x.slides.length - 2 * x.loopedSlides),
                                    i > n - 1 && (i -= n),
                                    i < 0 &&
                                    "bullets" !== x.params.paginationType &&
                                    (i = n + i))
                                    : (i =
                                        void 0 !== x.snapIndex
                                            ? x.snapIndex
                                            : x.activeIndex || 0),
                                "bullets" === x.params.paginationType &&
                                x.bullets &&
                                x.bullets.length > 0 &&
                                (x.bullets.removeClass(x.params.bulletActiveClass),
                                    x.paginationContainer.length > 1
                                        ? x.bullets.each(function () {
                                            e(this).index() === i &&
                                            e(this).addClass(x.params.bulletActiveClass);
                                        })
                                        : x.bullets.eq(i).addClass(x.params.bulletActiveClass)),
                                "fraction" === x.params.paginationType &&
                                (x.paginationContainer
                                    .find("." + x.params.paginationCurrentClass)
                                    .text(i + 1),
                                    x.paginationContainer
                                        .find("." + x.params.paginationTotalClass)
                                        .text(n)),
                                "progress" === x.params.paginationType)
                            ) {
                                var o = (i + 1) / n,
                                    l = o,
                                    p = 1;
                                x.isHorizontal() || ((p = o), (l = 1)),
                                    x.paginationContainer
                                        .find("." + x.params.paginationProgressbarClass)
                                        .transform(
                                            "translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")"
                                        )
                                        .transition(x.params.speed);
                            }
                            "custom" === x.params.paginationType &&
                            x.params.paginationCustomRender &&
                            (x.paginationContainer.html(
                                x.params.paginationCustomRender(x, i + 1, n)
                            ),
                                x.emit("onPaginationRendered", x, x.paginationContainer[0]));
                        }
                        x.params.loop ||
                        (x.params.prevButton &&
                        x.prevButton &&
                        x.prevButton.length > 0 &&
                        (x.isBeginning
                            ? (x.prevButton.addClass(x.params.buttonDisabledClass),
                            x.params.a11y && x.a11y && x.a11y.disable(x.prevButton))
                            : (x.prevButton.removeClass(x.params.buttonDisabledClass),
                            x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))),
                        x.params.nextButton &&
                        x.nextButton &&
                        x.nextButton.length > 0 &&
                        (x.isEnd
                            ? (x.nextButton.addClass(x.params.buttonDisabledClass),
                            x.params.a11y && x.a11y && x.a11y.disable(x.nextButton))
                            : (x.nextButton.removeClass(x.params.buttonDisabledClass),
                            x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))));
                    }),
                    (x.updatePagination = function () {
                        if (
                            x.params.pagination &&
                            x.paginationContainer &&
                            x.paginationContainer.length > 0
                        ) {
                            var e = "";
                            if ("bullets" === x.params.paginationType) {
                                for (
                                    var a = x.params.loop
                                            ? Math.ceil(
                                                (x.slides.length - 2 * x.loopedSlides) /
                                                x.params.slidesPerGroup
                                            )
                                            : x.snapGrid.length,
                                        t = 0;
                                    t < a;
                                    t++
                                )
                                    e += x.params.paginationBulletRender
                                        ? x.params.paginationBulletRender(
                                            x,
                                            t,
                                            x.params.bulletClass
                                        )
                                        : "<" +
                                        x.params.paginationElement +
                                        ' class="' +
                                        x.params.bulletClass +
                                        '"></' +
                                        x.params.paginationElement +
                                        ">";
                                x.paginationContainer.html(e),
                                    (x.bullets = x.paginationContainer.find(
                                        "." + x.params.bulletClass
                                    )),
                                x.params.paginationClickable &&
                                x.params.a11y &&
                                x.a11y &&
                                x.a11y.initPagination();
                            }
                            "fraction" === x.params.paginationType &&
                            ((e = x.params.paginationFractionRender
                                ? x.params.paginationFractionRender(
                                    x,
                                    x.params.paginationCurrentClass,
                                    x.params.paginationTotalClass
                                )
                                : '<span class="' +
                                x.params.paginationCurrentClass +
                                '"></span> / <span class="' +
                                x.params.paginationTotalClass +
                                '"></span>'),
                                x.paginationContainer.html(e)),
                            "progress" === x.params.paginationType &&
                            ((e = x.params.paginationProgressRender
                                ? x.params.paginationProgressRender(
                                    x,
                                    x.params.paginationProgressbarClass
                                )
                                : '<span class="' +
                                x.params.paginationProgressbarClass +
                                '"></span>'),
                                x.paginationContainer.html(e)),
                            "custom" !== x.params.paginationType &&
                            x.emit("onPaginationRendered", x, x.paginationContainer[0]);
                        }
                    }),
                    (x.update = function (e) {
                        function a() {
                            x.rtl, x.translate;
                            (t = Math.min(
                                Math.max(x.translate, x.maxTranslate()),
                                x.minTranslate()
                            )),
                                x.setWrapperTranslate(t),
                                x.updateActiveIndex(),
                                x.updateClasses();
                        }
                        if (x) {
                            x.updateContainerSize(),
                                x.updateSlidesSize(),
                                x.updateProgress(),
                                x.updatePagination(),
                                x.updateClasses(),
                            x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                            var t;
                            if (e) {
                                x.controller &&
                                x.controller.spline &&
                                (x.controller.spline = void 0),
                                    x.params.freeMode
                                        ? (a(), x.params.autoHeight && x.updateAutoHeight())
                                        : (("auto" === x.params.slidesPerView ||
                                        x.params.slidesPerView > 1) &&
                                    x.isEnd &&
                                    !x.params.centeredSlides
                                        ? x.slideTo(x.slides.length - 1, 0, !1, !0)
                                        : x.slideTo(x.activeIndex, 0, !1, !0)) || a();
                            } else x.params.autoHeight && x.updateAutoHeight();
                        }
                    }),
                    (x.onResize = function (e) {
                        x.params.onBeforeResize && x.params.onBeforeResize(x),
                        x.params.breakpoints && x.setBreakpoint();
                        var a = x.params.allowSwipeToPrev,
                            t = x.params.allowSwipeToNext;
                        (x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0),
                            x.updateContainerSize(),
                            x.updateSlidesSize(),
                        ("auto" === x.params.slidesPerView || x.params.freeMode || e) &&
                        x.updatePagination(),
                        x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                        x.controller &&
                        x.controller.spline &&
                        (x.controller.spline = void 0);
                        var s = !1;
                        if (x.params.freeMode) {
                            var r = Math.min(
                                Math.max(x.translate, x.maxTranslate()),
                                x.minTranslate()
                            );
                            x.setWrapperTranslate(r),
                                x.updateActiveIndex(),
                                x.updateClasses(),
                            x.params.autoHeight && x.updateAutoHeight();
                        } else
                            x.updateClasses(),
                                (s =
                                    ("auto" === x.params.slidesPerView ||
                                        x.params.slidesPerView > 1) &&
                                    x.isEnd &&
                                    !x.params.centeredSlides
                                        ? x.slideTo(x.slides.length - 1, 0, !1, !0)
                                        : x.slideTo(x.activeIndex, 0, !1, !0));
                        x.params.lazyLoading && !s && x.lazy && x.lazy.load(),
                            (x.params.allowSwipeToPrev = a),
                            (x.params.allowSwipeToNext = t),
                        x.params.onAfterResize && x.params.onAfterResize(x);
                    }),
                    (x.touchEventsDesktop = {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup",
                    }),
                    window.navigator.pointerEnabled
                        ? (x.touchEventsDesktop = {
                            start: "pointerdown",
                            move: "pointermove",
                            end: "pointerup",
                        })
                        : window.navigator.msPointerEnabled &&
                        (x.touchEventsDesktop = {
                            start: "MSPointerDown",
                            move: "MSPointerMove",
                            end: "MSPointerUp",
                        }),
                    (x.touchEvents = {
                        start:
                            x.support.touch || !x.params.simulateTouch
                                ? "touchstart"
                                : x.touchEventsDesktop.start,
                        move:
                            x.support.touch || !x.params.simulateTouch
                                ? "touchmove"
                                : x.touchEventsDesktop.move,
                        end:
                            x.support.touch || !x.params.simulateTouch
                                ? "touchend"
                                : x.touchEventsDesktop.end,
                    }),
                (window.navigator.pointerEnabled ||
                    window.navigator.msPointerEnabled) &&
                ("container" === x.params.touchEventsTarget
                        ? x.container
                        : x.wrapper
                ).addClass("swiper-wp8-" + x.params.direction),
                    (x.initEvents = function (e) {
                        var a = e ? "off" : "on",
                            t = e ? "removeEventListener" : "addEventListener",
                            r =
                                "container" === x.params.touchEventsTarget
                                    ? x.container[0]
                                    : x.wrapper[0],
                            i = x.support.touch ? r : document,
                            n = !!x.params.nested;
                        if (x.browser.ie)
                            r[t](x.touchEvents.start, x.onTouchStart, !1),
                                i[t](x.touchEvents.move, x.onTouchMove, n),
                                i[t](x.touchEvents.end, x.onTouchEnd, !1);
                        else {
                            if (x.support.touch) {
                                var o = !(
                                    "touchstart" !== x.touchEvents.start ||
                                    !x.support.passiveListener ||
                                    !x.params.passiveListeners
                                ) && { passive: !0, capture: !1 };
                                r[t](x.touchEvents.start, x.onTouchStart, o),
                                    r[t](x.touchEvents.move, x.onTouchMove, n),
                                    r[t](x.touchEvents.end, x.onTouchEnd, o);
                            }
                            ((s.simulateTouch && !x.device.ios && !x.device.android) ||
                                (s.simulateTouch && !x.support.touch && x.device.ios)) &&
                            (r[t]("mousedown", x.onTouchStart, !1),
                                document[t]("mousemove", x.onTouchMove, n),
                                document[t]("mouseup", x.onTouchEnd, !1));
                        }
                        window[t]("resize", x.onResize),
                        x.params.nextButton &&
                        x.nextButton &&
                        x.nextButton.length > 0 &&
                        (x.nextButton[a]("click", x.onClickNext),
                        x.params.a11y &&
                        x.a11y &&
                        x.nextButton[a]("keydown", x.a11y.onEnterKey)),
                        x.params.prevButton &&
                        x.prevButton &&
                        x.prevButton.length > 0 &&
                        (x.prevButton[a]("click", x.onClickPrev),
                        x.params.a11y &&
                        x.a11y &&
                        x.prevButton[a]("keydown", x.a11y.onEnterKey)),
                        x.params.pagination &&
                        x.params.paginationClickable &&
                        (x.paginationContainer[a](
                            "click",
                            "." + x.params.bulletClass,
                            x.onClickIndex
                        ),
                        x.params.a11y &&
                        x.a11y &&
                        x.paginationContainer[a](
                            "keydown",
                            "." + x.params.bulletClass,
                            x.a11y.onEnterKey
                        )),
                        (x.params.preventClicks || x.params.preventClicksPropagation) &&
                        r[t]("click", x.preventClicks, !0);
                    }),
                    (x.attachEvents = function () {
                        x.initEvents();
                    }),
                    (x.detachEvents = function () {
                        x.initEvents(!0);
                    }),
                    (x.allowClick = !0),
                    (x.preventClicks = function (e) {
                        x.allowClick ||
                        (x.params.preventClicks && e.preventDefault(),
                        x.params.preventClicksPropagation &&
                        x.animating &&
                        (e.stopPropagation(), e.stopImmediatePropagation()));
                    }),
                    (x.onClickNext = function (e) {
                        e.preventDefault(), (x.isEnd && !x.params.loop) || x.slideNext();
                    }),
                    (x.onClickPrev = function (e) {
                        e.preventDefault(),
                        (x.isBeginning && !x.params.loop) || x.slidePrev();
                    }),
                    (x.onClickIndex = function (a) {
                        a.preventDefault();
                        var t = e(this).index() * x.params.slidesPerGroup;
                        x.params.loop && (t += x.loopedSlides), x.slideTo(t);
                    }),
                    (x.updateClickedSlide = function (a) {
                        var t = n(a, "." + x.params.slideClass),
                            s = !1;
                        if (t)
                            for (var r = 0; r < x.slides.length; r++)
                                x.slides[r] === t && (s = !0);
                        if (!t || !s)
                            return (x.clickedSlide = void 0), void (x.clickedIndex = void 0);
                        if (
                            ((x.clickedSlide = t),
                                (x.clickedIndex = e(t).index()),
                            x.params.slideToClickedSlide &&
                            void 0 !== x.clickedIndex &&
                            x.clickedIndex !== x.activeIndex)
                        ) {
                            var i,
                                o = x.clickedIndex,
                                l =
                                    "auto" === x.params.slidesPerView
                                        ? x.currentSlidesPerView()
                                        : x.params.slidesPerView;
                            if (x.params.loop) {
                                if (x.animating) return;
                                (i = parseInt(
                                    e(x.clickedSlide).attr("data-swiper-slide-index"),
                                    10
                                )),
                                    x.params.centeredSlides
                                        ? o < x.loopedSlides - l / 2 ||
                                        o > x.slides.length - x.loopedSlides + l / 2
                                            ? (x.fixLoop(),
                                                (o = x.wrapper
                                                    .children(
                                                        "." +
                                                        x.params.slideClass +
                                                        '[data-swiper-slide-index="' +
                                                        i +
                                                        '"]:not(.' +
                                                        x.params.slideDuplicateClass +
                                                        ")"
                                                    )
                                                    .eq(0)
                                                    .index()),
                                                setTimeout(function () {
                                                    x.slideTo(o);
                                                }, 0))
                                            : x.slideTo(o)
                                        : o > x.slides.length - l
                                            ? (x.fixLoop(),
                                                (o = x.wrapper
                                                    .children(
                                                        "." +
                                                        x.params.slideClass +
                                                        '[data-swiper-slide-index="' +
                                                        i +
                                                        '"]:not(.' +
                                                        x.params.slideDuplicateClass +
                                                        ")"
                                                    )
                                                    .eq(0)
                                                    .index()),
                                                setTimeout(function () {
                                                    x.slideTo(o);
                                                }, 0))
                                            : x.slideTo(o);
                            } else x.slideTo(o);
                        }
                    });
                var b,
                    C,
                    S,
                    z,
                    M,
                    P,
                    E,
                    I,
                    k,
                    D,
                    L = "input, select, textarea, button, video",
                    B = Date.now(),
                    H = [];
                (x.animating = !1),
                    (x.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0,
                    });
                var G, X;
                (x.onTouchStart = function (a) {
                    if (
                        (a.originalEvent && (a = a.originalEvent),
                        (G = "touchstart" === a.type) || !("which" in a) || 3 !== a.which)
                    ) {
                        if (x.params.noSwiping && n(a, "." + x.params.noSwipingClass))
                            return void (x.allowClick = !0);
                        if (!x.params.swipeHandler || n(a, x.params.swipeHandler)) {
                            var t = (x.touches.currentX =
                                    "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
                                s = (x.touches.currentY =
                                    "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
                            if (
                                !(
                                    x.device.ios &&
                                    x.params.iOSEdgeSwipeDetection &&
                                    t <= x.params.iOSEdgeSwipeThreshold
                                )
                            ) {
                                if (
                                    ((b = !0),
                                        (C = !1),
                                        (S = !0),
                                        (M = void 0),
                                        (X = void 0),
                                        (x.touches.startX = t),
                                        (x.touches.startY = s),
                                        (z = Date.now()),
                                        (x.allowClick = !0),
                                        x.updateContainerSize(),
                                        (x.swipeDirection = void 0),
                                    x.params.threshold > 0 && (I = !1),
                                    "touchstart" !== a.type)
                                ) {
                                    var r = !0;
                                    e(a.target).is(L) && (r = !1),
                                    document.activeElement &&
                                    e(document.activeElement).is(L) &&
                                    document.activeElement.blur(),
                                    r && a.preventDefault();
                                }
                                x.emit("onTouchStart", x, a);
                            }
                        }
                    }
                }),
                    (x.onTouchMove = function (a) {
                        if (
                            (a.originalEvent && (a = a.originalEvent),
                            !G || "mousemove" !== a.type)
                        ) {
                            if (a.preventedByNestedSwiper)
                                return (
                                    (x.touches.startX =
                                        "touchmove" === a.type
                                            ? a.targetTouches[0].pageX
                                            : a.pageX),
                                        void (x.touches.startY =
                                            "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY)
                                );
                            if (x.params.onlyExternal)
                                return (
                                    (x.allowClick = !1),
                                        void (
                                            b &&
                                            ((x.touches.startX = x.touches.currentX =
                                                "touchmove" === a.type
                                                    ? a.targetTouches[0].pageX
                                                    : a.pageX),
                                                (x.touches.startY = x.touches.currentY =
                                                    "touchmove" === a.type
                                                        ? a.targetTouches[0].pageY
                                                        : a.pageY),
                                                (z = Date.now()))
                                        )
                                );
                            if (G && x.params.touchReleaseOnEdges && !x.params.loop)
                                if (x.isHorizontal()) {
                                    if (
                                        (x.touches.currentX < x.touches.startX &&
                                            x.translate <= x.maxTranslate()) ||
                                        (x.touches.currentX > x.touches.startX &&
                                            x.translate >= x.minTranslate())
                                    )
                                        return;
                                } else if (
                                    (x.touches.currentY < x.touches.startY &&
                                        x.translate <= x.maxTranslate()) ||
                                    (x.touches.currentY > x.touches.startY &&
                                        x.translate >= x.minTranslate())
                                )
                                    return;
                            if (
                                G &&
                                document.activeElement &&
                                a.target === document.activeElement &&
                                e(a.target).is(L)
                            )
                                return (C = !0), void (x.allowClick = !1);
                            if (
                                (S && x.emit("onTouchMove", x, a),
                                    !(a.targetTouches && a.targetTouches.length > 1))
                            ) {
                                if (
                                    ((x.touches.currentX =
                                        "touchmove" === a.type
                                            ? a.targetTouches[0].pageX
                                            : a.pageX),
                                        (x.touches.currentY =
                                            "touchmove" === a.type
                                                ? a.targetTouches[0].pageY
                                                : a.pageY),
                                    void 0 === M)
                                ) {
                                    var t;
                                    (x.isHorizontal() &&
                                        x.touches.currentY === x.touches.startY) ||
                                    (!x.isHorizontal() && x.touches.currentX === x.touches.startX)
                                        ? (M = !1)
                                        : ((t =
                                            (180 *
                                                Math.atan2(
                                                    Math.abs(x.touches.currentY - x.touches.startY),
                                                    Math.abs(x.touches.currentX - x.touches.startX)
                                                )) /
                                            Math.PI),
                                            (M = x.isHorizontal()
                                                ? t > x.params.touchAngle
                                                : 90 - t > x.params.touchAngle));
                                }
                                if (
                                    (M && x.emit("onTouchMoveOpposite", x, a),
                                    void 0 === X &&
                                    ((x.touches.currentX === x.touches.startX &&
                                            x.touches.currentY === x.touches.startY) ||
                                        (X = !0)),
                                        b)
                                ) {
                                    if (M) return void (b = !1);
                                    if (X) {
                                        (x.allowClick = !1),
                                            x.emit("onSliderMove", x, a),
                                            a.preventDefault(),
                                        x.params.touchMoveStopPropagation &&
                                        !x.params.nested &&
                                        a.stopPropagation(),
                                        C ||
                                        (s.loop && x.fixLoop(),
                                            (E = x.getWrapperTranslate()),
                                            x.setWrapperTransition(0),
                                        x.animating &&
                                        x.wrapper.trigger(
                                            "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                                        ),
                                        x.params.autoplay &&
                                        x.autoplaying &&
                                        (x.params.autoplayDisableOnInteraction
                                            ? x.stopAutoplay()
                                            : x.pauseAutoplay()),
                                            (D = !1),
                                        !x.params.grabCursor ||
                                        (x.params.allowSwipeToNext !== !0 &&
                                            x.params.allowSwipeToPrev !== !0) ||
                                        x.setGrabCursor(!0)),
                                            (C = !0);
                                        var r = (x.touches.diff = x.isHorizontal()
                                            ? x.touches.currentX - x.touches.startX
                                            : x.touches.currentY - x.touches.startY);
                                        (r *= x.params.touchRatio),
                                        x.rtl && (r = -r),
                                            (x.swipeDirection = r > 0 ? "prev" : "next"),
                                            (P = r + E);
                                        var i = !0;
                                        if (
                                            (r > 0 && P > x.minTranslate()
                                                ? ((i = !1),
                                                x.params.resistance &&
                                                (P =
                                                    x.minTranslate() -
                                                    1 +
                                                    Math.pow(
                                                        -x.minTranslate() + E + r,
                                                        x.params.resistanceRatio
                                                    )))
                                                : r < 0 &&
                                                P < x.maxTranslate() &&
                                                ((i = !1),
                                                x.params.resistance &&
                                                (P =
                                                    x.maxTranslate() +
                                                    1 -
                                                    Math.pow(
                                                        x.maxTranslate() - E - r,
                                                        x.params.resistanceRatio
                                                    ))),
                                            i && (a.preventedByNestedSwiper = !0),
                                            !x.params.allowSwipeToNext &&
                                            "next" === x.swipeDirection &&
                                            P < E &&
                                            (P = E),
                                            !x.params.allowSwipeToPrev &&
                                            "prev" === x.swipeDirection &&
                                            P > E &&
                                            (P = E),
                                            x.params.threshold > 0)
                                        ) {
                                            if (!(Math.abs(r) > x.params.threshold || I))
                                                return void (P = E);
                                            if (!I)
                                                return (
                                                    (I = !0),
                                                        (x.touches.startX = x.touches.currentX),
                                                        (x.touches.startY = x.touches.currentY),
                                                        (P = E),
                                                        void (x.touches.diff = x.isHorizontal()
                                                            ? x.touches.currentX - x.touches.startX
                                                            : x.touches.currentY - x.touches.startY)
                                                );
                                        }
                                        x.params.followFinger &&
                                        ((x.params.freeMode || x.params.watchSlidesProgress) &&
                                        x.updateActiveIndex(),
                                        x.params.freeMode &&
                                        (0 === H.length &&
                                        H.push({
                                            position:
                                                x.touches[x.isHorizontal() ? "startX" : "startY"],
                                            time: z,
                                        }),
                                            H.push({
                                                position:
                                                    x.touches[
                                                        x.isHorizontal() ? "currentX" : "currentY"
                                                        ],
                                                time: new window.Date().getTime(),
                                            })),
                                            x.updateProgress(P),
                                            x.setWrapperTranslate(P));
                                    }
                                }
                            }
                        }
                    }),
                    (x.onTouchEnd = function (a) {
                        if (
                            (a.originalEvent && (a = a.originalEvent),
                            S && x.emit("onTouchEnd", x, a),
                                (S = !1),
                                b)
                        ) {
                            x.params.grabCursor &&
                            C &&
                            b &&
                            (x.params.allowSwipeToNext === !0 ||
                                x.params.allowSwipeToPrev === !0) &&
                            x.setGrabCursor(!1);
                            var t = Date.now(),
                                s = t - z;
                            if (
                                (x.allowClick &&
                                (x.updateClickedSlide(a),
                                    x.emit("onTap", x, a),
                                s < 300 &&
                                t - B > 300 &&
                                (k && clearTimeout(k),
                                    (k = setTimeout(function () {
                                        x &&
                                        (x.params.paginationHide &&
                                        x.paginationContainer.length > 0 &&
                                        !e(a.target).hasClass(x.params.bulletClass) &&
                                        x.paginationContainer.toggleClass(
                                            x.params.paginationHiddenClass
                                        ),
                                            x.emit("onClick", x, a));
                                    }, 300))),
                                s < 300 &&
                                t - B < 300 &&
                                (k && clearTimeout(k), x.emit("onDoubleTap", x, a))),
                                    (B = Date.now()),
                                    setTimeout(function () {
                                        x && (x.allowClick = !0);
                                    }, 0),
                                !b ||
                                !C ||
                                !x.swipeDirection ||
                                0 === x.touches.diff ||
                                P === E)
                            )
                                return void (b = C = !1);
                            b = C = !1;
                            var r;
                            if (
                                ((r = x.params.followFinger
                                    ? x.rtl
                                        ? x.translate
                                        : -x.translate
                                    : -P),
                                    x.params.freeMode)
                            ) {
                                if (r < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                                if (r > -x.maxTranslate())
                                    return void (x.slides.length < x.snapGrid.length
                                        ? x.slideTo(x.snapGrid.length - 1)
                                        : x.slideTo(x.slides.length - 1));
                                if (x.params.freeModeMomentum) {
                                    if (H.length > 1) {
                                        var i = H.pop(),
                                            n = H.pop(),
                                            o = i.position - n.position,
                                            l = i.time - n.time;
                                        (x.velocity = o / l),
                                            (x.velocity = x.velocity / 2),
                                        Math.abs(x.velocity) < x.params.freeModeMinimumVelocity &&
                                        (x.velocity = 0),
                                        (l > 150 || new window.Date().getTime() - i.time > 300) &&
                                        (x.velocity = 0);
                                    } else x.velocity = 0;
                                    (x.velocity =
                                        x.velocity * x.params.freeModeMomentumVelocityRatio),
                                        (H.length = 0);
                                    var p = 1e3 * x.params.freeModeMomentumRatio,
                                        d = x.velocity * p,
                                        m = x.translate + d;
                                    x.rtl && (m = -m);
                                    var u,
                                        c = !1,
                                        g =
                                            20 *
                                            Math.abs(x.velocity) *
                                            x.params.freeModeMomentumBounceRatio;
                                    if (m < x.maxTranslate())
                                        x.params.freeModeMomentumBounce
                                            ? (m + x.maxTranslate() < -g &&
                                            (m = x.maxTranslate() - g),
                                                (u = x.maxTranslate()),
                                                (c = !0),
                                                (D = !0))
                                            : (m = x.maxTranslate());
                                    else if (m > x.minTranslate())
                                        x.params.freeModeMomentumBounce
                                            ? (m - x.minTranslate() > g && (m = x.minTranslate() + g),
                                                (u = x.minTranslate()),
                                                (c = !0),
                                                (D = !0))
                                            : (m = x.minTranslate());
                                    else if (x.params.freeModeSticky) {
                                        var h,
                                            v = 0;
                                        for (v = 0; v < x.snapGrid.length; v += 1)
                                            if (x.snapGrid[v] > -m) {
                                                h = v;
                                                break;
                                            }
                                        (m =
                                            Math.abs(x.snapGrid[h] - m) <
                                            Math.abs(x.snapGrid[h - 1] - m) ||
                                            "next" === x.swipeDirection
                                                ? x.snapGrid[h]
                                                : x.snapGrid[h - 1]),
                                        x.rtl || (m = -m);
                                    }
                                    if (0 !== x.velocity)
                                        p = x.rtl
                                            ? Math.abs((-m - x.translate) / x.velocity)
                                            : Math.abs((m - x.translate) / x.velocity);
                                    else if (x.params.freeModeSticky) return void x.slideReset();
                                    x.params.freeModeMomentumBounce && c
                                        ? (x.updateProgress(u),
                                            x.setWrapperTransition(p),
                                            x.setWrapperTranslate(m),
                                            x.onTransitionStart(),
                                            (x.animating = !0),
                                            x.wrapper.transitionEnd(function () {
                                                x &&
                                                D &&
                                                (x.emit("onMomentumBounce", x),
                                                    x.setWrapperTransition(x.params.speed),
                                                    x.setWrapperTranslate(u),
                                                    x.wrapper.transitionEnd(function () {
                                                        x && x.onTransitionEnd();
                                                    }));
                                            }))
                                        : x.velocity
                                            ? (x.updateProgress(m),
                                                x.setWrapperTransition(p),
                                                x.setWrapperTranslate(m),
                                                x.onTransitionStart(),
                                            x.animating ||
                                            ((x.animating = !0),
                                                x.wrapper.transitionEnd(function () {
                                                    x && x.onTransitionEnd();
                                                })))
                                            : x.updateProgress(m),
                                        x.updateActiveIndex();
                                }
                                return void (
                                    (!x.params.freeModeMomentum || s >= x.params.longSwipesMs) &&
                                    (x.updateProgress(), x.updateActiveIndex())
                                );
                            }
                            var f,
                                w = 0,
                                y = x.slidesSizesGrid[0];
                            for (f = 0; f < x.slidesGrid.length; f += x.params.slidesPerGroup)
                                void 0 !== x.slidesGrid[f + x.params.slidesPerGroup]
                                    ? r >= x.slidesGrid[f] &&
                                    r < x.slidesGrid[f + x.params.slidesPerGroup] &&
                                    ((w = f),
                                        (y =
                                            x.slidesGrid[f + x.params.slidesPerGroup] -
                                            x.slidesGrid[f]))
                                    : r >= x.slidesGrid[f] &&
                                    ((w = f),
                                        (y =
                                            x.slidesGrid[x.slidesGrid.length - 1] -
                                            x.slidesGrid[x.slidesGrid.length - 2]));
                            var T = (r - x.slidesGrid[w]) / y;
                            if (s > x.params.longSwipesMs) {
                                if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection &&
                                (T >= x.params.longSwipesRatio
                                    ? x.slideTo(w + x.params.slidesPerGroup)
                                    : x.slideTo(w)),
                                "prev" === x.swipeDirection &&
                                (T > 1 - x.params.longSwipesRatio
                                    ? x.slideTo(w + x.params.slidesPerGroup)
                                    : x.slideTo(w));
                            } else {
                                if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                                "next" === x.swipeDirection &&
                                x.slideTo(w + x.params.slidesPerGroup),
                                "prev" === x.swipeDirection && x.slideTo(w);
                            }
                        }
                    }),
                    (x._slideTo = function (e, a) {
                        return x.slideTo(e, a, !0, !0);
                    }),
                    (x.slideTo = function (e, a, t, s) {
                        void 0 === t && (t = !0),
                        void 0 === e && (e = 0),
                        e < 0 && (e = 0),
                            (x.snapIndex = Math.floor(e / x.params.slidesPerGroup)),
                        x.snapIndex >= x.snapGrid.length &&
                        (x.snapIndex = x.snapGrid.length - 1);
                        var r = -x.snapGrid[x.snapIndex];
                        if (
                            (x.params.autoplay &&
                            x.autoplaying &&
                            (s || !x.params.autoplayDisableOnInteraction
                                ? x.pauseAutoplay(a)
                                : x.stopAutoplay()),
                                x.updateProgress(r),
                                x.params.normalizeSlideIndex)
                        )
                            for (var i = 0; i < x.slidesGrid.length; i++)
                                -Math.floor(100 * r) >= Math.floor(100 * x.slidesGrid[i]) &&
                                (e = i);
                        return (
                            !(
                                !x.params.allowSwipeToNext &&
                                r < x.translate &&
                                r < x.minTranslate()
                            ) &&
                            !(
                                !x.params.allowSwipeToPrev &&
                                r > x.translate &&
                                r > x.maxTranslate() &&
                                (x.activeIndex || 0) !== e
                            ) &&
                            (void 0 === a && (a = x.params.speed),
                                (x.previousIndex = x.activeIndex || 0),
                                (x.activeIndex = e),
                                x.updateRealIndex(),
                                (x.rtl && -r === x.translate) || (!x.rtl && r === x.translate)
                                    ? (x.params.autoHeight && x.updateAutoHeight(),
                                        x.updateClasses(),
                                    "slide" !== x.params.effect && x.setWrapperTranslate(r),
                                        !1)
                                    : (x.updateClasses(),
                                        x.onTransitionStart(t),
                                        0 === a || x.browser.lteIE9
                                            ? (x.setWrapperTranslate(r),
                                                x.setWrapperTransition(0),
                                                x.onTransitionEnd(t))
                                            : (x.setWrapperTranslate(r),
                                                x.setWrapperTransition(a),
                                            x.animating ||
                                            ((x.animating = !0),
                                                x.wrapper.transitionEnd(function () {
                                                    x && x.onTransitionEnd(t);
                                                }))),
                                        !0))
                        );
                    }),
                    (x.onTransitionStart = function (e) {
                        void 0 === e && (e = !0),
                        x.params.autoHeight && x.updateAutoHeight(),
                        x.lazy && x.lazy.onTransitionStart(),
                        e &&
                        (x.emit("onTransitionStart", x),
                        x.activeIndex !== x.previousIndex &&
                        (x.emit("onSlideChangeStart", x),
                            x.activeIndex > x.previousIndex
                                ? x.emit("onSlideNextStart", x)
                                : x.emit("onSlidePrevStart", x)));
                    }),
                    (x.onTransitionEnd = function (e) {
                        (x.animating = !1),
                            x.setWrapperTransition(0),
                        void 0 === e && (e = !0),
                        x.lazy && x.lazy.onTransitionEnd(),
                        e &&
                        (x.emit("onTransitionEnd", x),
                        x.activeIndex !== x.previousIndex &&
                        (x.emit("onSlideChangeEnd", x),
                            x.activeIndex > x.previousIndex
                                ? x.emit("onSlideNextEnd", x)
                                : x.emit("onSlidePrevEnd", x))),
                        x.params.history &&
                        x.history &&
                        x.history.setHistory(x.params.history, x.activeIndex),
                        x.params.hashnav && x.hashnav && x.hashnav.setHash();
                    }),
                    (x.slideNext = function (e, a, t) {
                        if (x.params.loop) {
                            if (x.animating) return !1;
                            x.fixLoop();
                            x.container[0].clientLeft;
                            return x.slideTo(
                                x.activeIndex + x.params.slidesPerGroup,
                                a,
                                e,
                                t
                            );
                        }
                        return x.slideTo(x.activeIndex + x.params.slidesPerGroup, a, e, t);
                    }),
                    (x._slideNext = function (e) {
                        return x.slideNext(!0, e, !0);
                    }),
                    (x.slidePrev = function (e, a, t) {
                        if (x.params.loop) {
                            if (x.animating) return !1;
                            x.fixLoop();
                            x.container[0].clientLeft;
                            return x.slideTo(x.activeIndex - 1, a, e, t);
                        }
                        return x.slideTo(x.activeIndex - 1, a, e, t);
                    }),
                    (x._slidePrev = function (e) {
                        return x.slidePrev(!0, e, !0);
                    }),
                    (x.slideReset = function (e, a, t) {
                        return x.slideTo(x.activeIndex, a, e);
                    }),
                    (x.disableTouchControl = function () {
                        return (x.params.onlyExternal = !0), !0;
                    }),
                    (x.enableTouchControl = function () {
                        return (x.params.onlyExternal = !1), !0;
                    }),
                    (x.setWrapperTransition = function (e, a) {
                        x.wrapper.transition(e),
                        "slide" !== x.params.effect &&
                        x.effects[x.params.effect] &&
                        x.effects[x.params.effect].setTransition(e),
                        x.params.parallax && x.parallax && x.parallax.setTransition(e),
                        x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
                        x.params.control &&
                        x.controller &&
                        x.controller.setTransition(e, a),
                            x.emit("onSetTransition", x, e);
                    }),
                    (x.setWrapperTranslate = function (e, a, t) {
                        var s = 0,
                            i = 0;
                        x.isHorizontal() ? (s = x.rtl ? -e : e) : (i = e),
                        x.params.roundLengths && ((s = r(s)), (i = r(i))),
                        x.params.virtualTranslate ||
                        (x.support.transforms3d
                            ? x.wrapper.transform(
                                "translate3d(" + s + "px, " + i + "px, 0px)"
                            )
                            : x.wrapper.transform("translate(" + s + "px, " + i + "px)")),
                            (x.translate = x.isHorizontal() ? s : i);
                        var n,
                            o = x.maxTranslate() - x.minTranslate();
                        (n = 0 === o ? 0 : (e - x.minTranslate()) / o),
                        n !== x.progress && x.updateProgress(e),
                        a && x.updateActiveIndex(),
                        "slide" !== x.params.effect &&
                        x.effects[x.params.effect] &&
                        x.effects[x.params.effect].setTranslate(x.translate),
                        x.params.parallax &&
                        x.parallax &&
                        x.parallax.setTranslate(x.translate),
                        x.params.scrollbar &&
                        x.scrollbar &&
                        x.scrollbar.setTranslate(x.translate),
                        x.params.control &&
                        x.controller &&
                        x.controller.setTranslate(x.translate, t),
                            x.emit("onSetTranslate", x, x.translate);
                    }),
                    (x.getTranslate = function (e, a) {
                        var t, s, r, i;
                        return (
                            void 0 === a && (a = "x"),
                                x.params.virtualTranslate
                                    ? x.rtl
                                        ? -x.translate
                                        : x.translate
                                    : ((r = window.getComputedStyle(e, null)),
                                        window.WebKitCSSMatrix
                                            ? ((s = r.transform || r.webkitTransform),
                                            s.split(",").length > 6 &&
                                            (s = s
                                                .split(", ")
                                                .map(function (e) {
                                                    return e.replace(",", ".");
                                                })
                                                .join(", ")),
                                                (i = new window.WebKitCSSMatrix("none" === s ? "" : s)))
                                            : ((i =
                                                r.MozTransform ||
                                                r.OTransform ||
                                                r.MsTransform ||
                                                r.msTransform ||
                                                r.transform ||
                                                r
                                                    .getPropertyValue("transform")
                                                    .replace("translate(", "matrix(1, 0, 0, 1,")),
                                                (t = i.toString().split(","))),
                                    "x" === a &&
                                    (s = window.WebKitCSSMatrix
                                        ? i.m41
                                        : 16 === t.length
                                            ? parseFloat(t[12])
                                            : parseFloat(t[4])),
                                    "y" === a &&
                                    (s = window.WebKitCSSMatrix
                                        ? i.m42
                                        : 16 === t.length
                                            ? parseFloat(t[13])
                                            : parseFloat(t[5])),
                                    x.rtl && s && (s = -s),
                                    s || 0)
                        );
                    }),
                    (x.getWrapperTranslate = function (e) {
                        return (
                            void 0 === e && (e = x.isHorizontal() ? "x" : "y"),
                                x.getTranslate(x.wrapper[0], e)
                        );
                    }),
                    (x.observers = []),
                    (x.initObservers = function () {
                        if (x.params.observeParents)
                            for (var e = x.container.parents(), a = 0; a < e.length; a++)
                                o(e[a]);
                        o(x.container[0], { childList: !1 }),
                            o(x.wrapper[0], { attributes: !1 });
                    }),
                    (x.disconnectObservers = function () {
                        for (var e = 0; e < x.observers.length; e++)
                            x.observers[e].disconnect();
                        x.observers = [];
                    }),
                    (x.createLoop = function () {
                        x.wrapper
                            .children(
                                "." + x.params.slideClass + "." + x.params.slideDuplicateClass
                            )
                            .remove();
                        var a = x.wrapper.children("." + x.params.slideClass);
                        "auto" !== x.params.slidesPerView ||
                        x.params.loopedSlides ||
                        (x.params.loopedSlides = a.length),
                            (x.loopedSlides = parseInt(
                                x.params.loopedSlides || x.params.slidesPerView,
                                10
                            )),
                            (x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides),
                        x.loopedSlides > a.length && (x.loopedSlides = a.length);
                        var t,
                            s = [],
                            r = [];
                        for (
                            a.each(function (t, i) {
                                var n = e(this);
                                t < x.loopedSlides && r.push(i),
                                t < a.length && t >= a.length - x.loopedSlides && s.push(i),
                                    n.attr("data-swiper-slide-index", t);
                            }),
                                t = 0;
                            t < r.length;
                            t++
                        )
                            x.wrapper.append(
                                e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass)
                            );
                        for (t = s.length - 1; t >= 0; t--)
                            x.wrapper.prepend(
                                e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass)
                            );
                    }),
                    (x.destroyLoop = function () {
                        x.wrapper
                            .children(
                                "." + x.params.slideClass + "." + x.params.slideDuplicateClass
                            )
                            .remove(),
                            x.slides.removeAttr("data-swiper-slide-index");
                    }),
                    (x.reLoop = function (e) {
                        var a = x.activeIndex - x.loopedSlides;
                        x.destroyLoop(),
                            x.createLoop(),
                            x.updateSlidesSize(),
                        e && x.slideTo(a + x.loopedSlides, 0, !1);
                    }),
                    (x.fixLoop = function () {
                        var e;
                        x.activeIndex < x.loopedSlides
                            ? ((e = x.slides.length - 3 * x.loopedSlides + x.activeIndex),
                                (e += x.loopedSlides),
                                x.slideTo(e, 0, !1, !0))
                            : (("auto" === x.params.slidesPerView &&
                                    x.activeIndex >= 2 * x.loopedSlides) ||
                                x.activeIndex >
                                x.slides.length - 2 * x.params.slidesPerView) &&
                            ((e = -x.slides.length + x.activeIndex + x.loopedSlides),
                                (e += x.loopedSlides),
                                x.slideTo(e, 0, !1, !0));
                    }),
                    (x.appendSlide = function (e) {
                        if (
                            (x.params.loop && x.destroyLoop(),
                            "object" == typeof e && e.length)
                        )
                            for (var a = 0; a < e.length; a++) e[a] && x.wrapper.append(e[a]);
                        else x.wrapper.append(e);
                        x.params.loop && x.createLoop(),
                        (x.params.observer && x.support.observer) || x.update(!0);
                    }),
                    (x.prependSlide = function (e) {
                        x.params.loop && x.destroyLoop();
                        var a = x.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var t = 0; t < e.length; t++)
                                e[t] && x.wrapper.prepend(e[t]);
                            a = x.activeIndex + e.length;
                        } else x.wrapper.prepend(e);
                        x.params.loop && x.createLoop(),
                        (x.params.observer && x.support.observer) || x.update(!0),
                            x.slideTo(a, 0, !1);
                    }),
                    (x.removeSlide = function (e) {
                        x.params.loop &&
                        (x.destroyLoop(),
                            (x.slides = x.wrapper.children("." + x.params.slideClass)));
                        var a,
                            t = x.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var s = 0; s < e.length; s++)
                                (a = e[s]),
                                x.slides[a] && x.slides.eq(a).remove(),
                                a < t && t--;
                            t = Math.max(t, 0);
                        } else
                            (a = e),
                            x.slides[a] && x.slides.eq(a).remove(),
                            a < t && t--,
                                (t = Math.max(t, 0));
                        x.params.loop && x.createLoop(),
                        (x.params.observer && x.support.observer) || x.update(!0),
                            x.params.loop
                                ? x.slideTo(t + x.loopedSlides, 0, !1)
                                : x.slideTo(t, 0, !1);
                    }),
                    (x.removeAllSlides = function () {
                        for (var e = [], a = 0; a < x.slides.length; a++) e.push(a);
                        x.removeSlide(e);
                    }),
                    (x.effects = {
                        fade: {
                            setTranslate: function () {
                                for (var e = 0; e < x.slides.length; e++) {
                                    var a = x.slides.eq(e),
                                        t = a[0].swiperSlideOffset,
                                        s = -t;
                                    x.params.virtualTranslate || (s -= x.translate);
                                    var r = 0;
                                    x.isHorizontal() || ((r = s), (s = 0));
                                    var i = x.params.fade.crossFade
                                        ? Math.max(1 - Math.abs(a[0].progress), 0)
                                        : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                    a.css({ opacity: i }).transform(
                                        "translate3d(" + s + "px, " + r + "px, 0px)"
                                    );
                                }
                            },
                            setTransition: function (e) {
                                if (
                                    (x.slides.transition(e), x.params.virtualTranslate && 0 !== e)
                                ) {
                                    var a = !1;
                                    x.slides.transitionEnd(function () {
                                        if (!a && x) {
                                            (a = !0), (x.animating = !1);
                                            for (
                                                var e = [
                                                        "webkitTransitionEnd",
                                                        "transitionend",
                                                        "oTransitionEnd",
                                                        "MSTransitionEnd",
                                                        "msTransitionEnd",
                                                    ],
                                                    t = 0;
                                                t < e.length;
                                                t++
                                            )
                                                x.wrapper.trigger(e[t]);
                                        }
                                    });
                                }
                            },
                        },
                        flip: {
                            setTranslate: function () {
                                for (var a = 0; a < x.slides.length; a++) {
                                    var t = x.slides.eq(a),
                                        s = t[0].progress;
                                    x.params.flip.limitRotation &&
                                    (s = Math.max(Math.min(t[0].progress, 1), -1));
                                    var r = t[0].swiperSlideOffset,
                                        i = -180 * s,
                                        n = i,
                                        o = 0,
                                        l = -r,
                                        p = 0;
                                    if (
                                        (x.isHorizontal()
                                            ? x.rtl && (n = -n)
                                            : ((p = l), (l = 0), (o = -n), (n = 0)),
                                            (t[0].style.zIndex =
                                                -Math.abs(Math.round(s)) + x.slides.length),
                                            x.params.flip.slideShadows)
                                    ) {
                                        var d = x.isHorizontal()
                                                ? t.find(".swiper-slide-shadow-left")
                                                : t.find(".swiper-slide-shadow-top"),
                                            m = x.isHorizontal()
                                                ? t.find(".swiper-slide-shadow-right")
                                                : t.find(".swiper-slide-shadow-bottom");
                                        0 === d.length &&
                                        ((d = e(
                                            '<div class="swiper-slide-shadow-' +
                                            (x.isHorizontal() ? "left" : "top") +
                                            '"></div>'
                                        )),
                                            t.append(d)),
                                        0 === m.length &&
                                        ((m = e(
                                            '<div class="swiper-slide-shadow-' +
                                            (x.isHorizontal() ? "right" : "bottom") +
                                            '"></div>'
                                        )),
                                            t.append(m)),
                                        d.length && (d[0].style.opacity = Math.max(-s, 0)),
                                        m.length && (m[0].style.opacity = Math.max(s, 0));
                                    }
                                    t.transform(
                                        "translate3d(" +
                                        l +
                                        "px, " +
                                        p +
                                        "px, 0px) rotateX(" +
                                        o +
                                        "deg) rotateY(" +
                                        n +
                                        "deg)"
                                    );
                                }
                            },
                            setTransition: function (a) {
                                if (
                                    (x.slides
                                        .transition(a)
                                        .find(
                                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                        )
                                        .transition(a),
                                    x.params.virtualTranslate && 0 !== a)
                                ) {
                                    var t = !1;
                                    x.slides.eq(x.activeIndex).transitionEnd(function () {
                                        if (
                                            !t &&
                                            x &&
                                            e(this).hasClass(x.params.slideActiveClass)
                                        ) {
                                            (t = !0), (x.animating = !1);
                                            for (
                                                var a = [
                                                        "webkitTransitionEnd",
                                                        "transitionend",
                                                        "oTransitionEnd",
                                                        "MSTransitionEnd",
                                                        "msTransitionEnd",
                                                    ],
                                                    s = 0;
                                                s < a.length;
                                                s++
                                            )
                                                x.wrapper.trigger(a[s]);
                                        }
                                    });
                                }
                            },
                        },
                        cube: {
                            setTranslate: function () {
                                var a,
                                    t = 0;
                                x.params.cube.shadow &&
                                (x.isHorizontal()
                                    ? ((a = x.wrapper.find(".swiper-cube-shadow")),
                                    0 === a.length &&
                                    ((a = e('<div class="swiper-cube-shadow"></div>')),
                                        x.wrapper.append(a)),
                                        a.css({ height: x.width + "px" }))
                                    : ((a = x.container.find(".swiper-cube-shadow")),
                                    0 === a.length &&
                                    ((a = e('<div class="swiper-cube-shadow"></div>')),
                                        x.container.append(a))));
                                for (var s = 0; s < x.slides.length; s++) {
                                    var r = x.slides.eq(s),
                                        i = 90 * s,
                                        n = Math.floor(i / 360);
                                    x.rtl && ((i = -i), (n = Math.floor(-i / 360)));
                                    var o = Math.max(Math.min(r[0].progress, 1), -1),
                                        l = 0,
                                        p = 0,
                                        d = 0;
                                    s % 4 == 0
                                        ? ((l = 4 * -n * x.size), (d = 0))
                                        : (s - 1) % 4 == 0
                                            ? ((l = 0), (d = 4 * -n * x.size))
                                            : (s - 2) % 4 == 0
                                                ? ((l = x.size + 4 * n * x.size), (d = x.size))
                                                : (s - 3) % 4 == 0 &&
                                                ((l = -x.size), (d = 3 * x.size + 4 * x.size * n)),
                                    x.rtl && (l = -l),
                                    x.isHorizontal() || ((p = l), (l = 0));
                                    var m =
                                        "rotateX(" +
                                        (x.isHorizontal() ? 0 : -i) +
                                        "deg) rotateY(" +
                                        (x.isHorizontal() ? i : 0) +
                                        "deg) translate3d(" +
                                        l +
                                        "px, " +
                                        p +
                                        "px, " +
                                        d +
                                        "px)";
                                    if (
                                        (o <= 1 &&
                                        o > -1 &&
                                        ((t = 90 * s + 90 * o), x.rtl && (t = 90 * -s - 90 * o)),
                                            r.transform(m),
                                            x.params.cube.slideShadows)
                                    ) {
                                        var u = x.isHorizontal()
                                                ? r.find(".swiper-slide-shadow-left")
                                                : r.find(".swiper-slide-shadow-top"),
                                            c = x.isHorizontal()
                                                ? r.find(".swiper-slide-shadow-right")
                                                : r.find(".swiper-slide-shadow-bottom");
                                        0 === u.length &&
                                        ((u = e(
                                            '<div class="swiper-slide-shadow-' +
                                            (x.isHorizontal() ? "left" : "top") +
                                            '"></div>'
                                        )),
                                            r.append(u)),
                                        0 === c.length &&
                                        ((c = e(
                                            '<div class="swiper-slide-shadow-' +
                                            (x.isHorizontal() ? "right" : "bottom") +
                                            '"></div>'
                                        )),
                                            r.append(c)),
                                        u.length && (u[0].style.opacity = Math.max(-o, 0)),
                                        c.length && (c[0].style.opacity = Math.max(o, 0));
                                    }
                                }
                                if (
                                    (x.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + x.size / 2 + "px",
                                    }),
                                        x.params.cube.shadow)
                                )
                                    if (x.isHorizontal())
                                        a.transform(
                                            "translate3d(0px, " +
                                            (x.width / 2 + x.params.cube.shadowOffset) +
                                            "px, " +
                                            -x.width / 2 +
                                            "px) rotateX(90deg) rotateZ(0deg) scale(" +
                                            x.params.cube.shadowScale +
                                            ")"
                                        );
                                    else {
                                        var g = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                            h =
                                                1.5 -
                                                (Math.sin((2 * g * Math.PI) / 360) / 2 +
                                                    Math.cos((2 * g * Math.PI) / 360) / 2),
                                            v = x.params.cube.shadowScale,
                                            f = x.params.cube.shadowScale / h,
                                            w = x.params.cube.shadowOffset;
                                        a.transform(
                                            "scale3d(" +
                                            v +
                                            ", 1, " +
                                            f +
                                            ") translate3d(0px, " +
                                            (x.height / 2 + w) +
                                            "px, " +
                                            -x.height / 2 / f +
                                            "px) rotateX(-90deg)"
                                        );
                                    }
                                var y = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                                x.wrapper.transform(
                                    "translate3d(0px,0," +
                                    y +
                                    "px) rotateX(" +
                                    (x.isHorizontal() ? 0 : t) +
                                    "deg) rotateY(" +
                                    (x.isHorizontal() ? -t : 0) +
                                    "deg)"
                                );
                            },
                            setTransition: function (e) {
                                x.slides
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e),
                                x.params.cube.shadow &&
                                !x.isHorizontal() &&
                                x.container.find(".swiper-cube-shadow").transition(e);
                            },
                        },
                        coverflow: {
                            setTranslate: function () {
                                for (
                                    var a = x.translate,
                                        t = x.isHorizontal() ? -a + x.width / 2 : -a + x.height / 2,
                                        s = x.isHorizontal()
                                            ? x.params.coverflow.rotate
                                            : -x.params.coverflow.rotate,
                                        r = x.params.coverflow.depth,
                                        i = 0,
                                        n = x.slides.length;
                                    i < n;
                                    i++
                                ) {
                                    var o = x.slides.eq(i),
                                        l = x.slidesSizesGrid[i],
                                        p = o[0].swiperSlideOffset,
                                        d = ((t - p - l / 2) / l) * x.params.coverflow.modifier,
                                        m = x.isHorizontal() ? s * d : 0,
                                        u = x.isHorizontal() ? 0 : s * d,
                                        c = -r * Math.abs(d),
                                        g = x.isHorizontal() ? 0 : x.params.coverflow.stretch * d,
                                        h = x.isHorizontal() ? x.params.coverflow.stretch * d : 0;
                                    Math.abs(h) < 0.001 && (h = 0),
                                    Math.abs(g) < 0.001 && (g = 0),
                                    Math.abs(c) < 0.001 && (c = 0),
                                    Math.abs(m) < 0.001 && (m = 0),
                                    Math.abs(u) < 0.001 && (u = 0);
                                    var v =
                                        "translate3d(" +
                                        h +
                                        "px," +
                                        g +
                                        "px," +
                                        c +
                                        "px)  rotateX(" +
                                        u +
                                        "deg) rotateY(" +
                                        m +
                                        "deg)";
                                    if (
                                        (o.transform(v),
                                            (o[0].style.zIndex = 1 - Math.abs(Math.round(d))),
                                            x.params.coverflow.slideShadows)
                                    ) {
                                        var f = x.isHorizontal()
                                                ? o.find(".swiper-slide-shadow-left")
                                                : o.find(".swiper-slide-shadow-top"),
                                            w = x.isHorizontal()
                                                ? o.find(".swiper-slide-shadow-right")
                                                : o.find(".swiper-slide-shadow-bottom");
                                        0 === f.length &&
                                        ((f = e(
                                            '<div class="swiper-slide-shadow-' +
                                            (x.isHorizontal() ? "left" : "top") +
                                            '"></div>'
                                        )),
                                            o.append(f)),
                                        0 === w.length &&
                                        ((w = e(
                                            '<div class="swiper-slide-shadow-' +
                                            (x.isHorizontal() ? "right" : "bottom") +
                                            '"></div>'
                                        )),
                                            o.append(w)),
                                        f.length && (f[0].style.opacity = d > 0 ? d : 0),
                                        w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
                                    }
                                }
                                if (x.browser.ie) {
                                    x.wrapper[0].style.perspectiveOrigin = t + "px 50%";
                                }
                            },
                            setTransition: function (e) {
                                x.slides
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e);
                            },
                        },
                    }),
                    (x.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function (a, t) {
                            if (
                                void 0 !== a &&
                                (void 0 === t && (t = !0), 0 !== x.slides.length)
                            ) {
                                var s = x.slides.eq(a),
                                    r = s.find(
                                        "." +
                                        x.params.lazyLoadingClass +
                                        ":not(." +
                                        x.params.lazyStatusLoadedClass +
                                        "):not(." +
                                        x.params.lazyStatusLoadingClass +
                                        ")"
                                    );
                                !s.hasClass(x.params.lazyLoadingClass) ||
                                s.hasClass(x.params.lazyStatusLoadedClass) ||
                                s.hasClass(x.params.lazyStatusLoadingClass) ||
                                (r = r.add(s[0])),
                                0 !== r.length &&
                                r.each(function () {
                                    var a = e(this);
                                    a.addClass(x.params.lazyStatusLoadingClass);
                                    var r = a.attr("data-background"),
                                        i = a.attr("data-src"),
                                        n = a.attr("data-srcset"),
                                        o = a.attr("data-sizes");
                                    x.loadImage(a[0], i || r, n, o, !1, function () {
                                        if (void 0 !== x && null !== x && x) {
                                            if (
                                                (r
                                                    ? (a.css("background-image", 'url("' + r + '")'),
                                                        a.removeAttr("data-background"))
                                                    : (n &&
                                                    (a.attr("srcset", n),
                                                        a.removeAttr("data-srcset")),
                                                    o &&
                                                    (a.attr("sizes", o),
                                                        a.removeAttr("data-sizes")),
                                                    i &&
                                                    (a.attr("src", i), a.removeAttr("data-src"))),
                                                    a
                                                        .addClass(x.params.lazyStatusLoadedClass)
                                                        .removeClass(x.params.lazyStatusLoadingClass),
                                                    s
                                                        .find(
                                                            "." +
                                                            x.params.lazyPreloaderClass +
                                                            ", ." +
                                                            x.params.preloaderClass
                                                        )
                                                        .remove(),
                                                x.params.loop && t)
                                            ) {
                                                var e = s.attr("data-swiper-slide-index");
                                                if (s.hasClass(x.params.slideDuplicateClass)) {
                                                    var l = x.wrapper.children(
                                                        '[data-swiper-slide-index="' +
                                                        e +
                                                        '"]:not(.' +
                                                        x.params.slideDuplicateClass +
                                                        ")"
                                                    );
                                                    x.lazy.loadImageInSlide(l.index(), !1);
                                                } else {
                                                    var p = x.wrapper.children(
                                                        "." +
                                                        x.params.slideDuplicateClass +
                                                        '[data-swiper-slide-index="' +
                                                        e +
                                                        '"]'
                                                    );
                                                    x.lazy.loadImageInSlide(p.index(), !1);
                                                }
                                            }
                                            x.emit("onLazyImageReady", x, s[0], a[0]);
                                        }
                                    }),
                                        x.emit("onLazyImageLoad", x, s[0], a[0]);
                                });
                            }
                        },
                        load: function () {
                            var a,
                                t = x.params.slidesPerView;
                            if (
                                ("auto" === t && (t = 0),
                                x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0),
                                    x.params.watchSlidesVisibility)
                            )
                                x.wrapper
                                    .children("." + x.params.slideVisibleClass)
                                    .each(function () {
                                        x.lazy.loadImageInSlide(e(this).index());
                                    });
                            else if (t > 1)
                                for (a = x.activeIndex; a < x.activeIndex + t; a++)
                                    x.slides[a] && x.lazy.loadImageInSlide(a);
                            else x.lazy.loadImageInSlide(x.activeIndex);
                            if (x.params.lazyLoadingInPrevNext)
                                if (
                                    t > 1 ||
                                    (x.params.lazyLoadingInPrevNextAmount &&
                                        x.params.lazyLoadingInPrevNextAmount > 1)
                                ) {
                                    var s = x.params.lazyLoadingInPrevNextAmount,
                                        r = t,
                                        i = Math.min(
                                            x.activeIndex + r + Math.max(s, r),
                                            x.slides.length
                                        ),
                                        n = Math.max(x.activeIndex - Math.max(r, s), 0);
                                    for (a = x.activeIndex + t; a < i; a++)
                                        x.slides[a] && x.lazy.loadImageInSlide(a);
                                    for (a = n; a < x.activeIndex; a++)
                                        x.slides[a] && x.lazy.loadImageInSlide(a);
                                } else {
                                    var o = x.wrapper.children("." + x.params.slideNextClass);
                                    o.length > 0 && x.lazy.loadImageInSlide(o.index());
                                    var l = x.wrapper.children("." + x.params.slidePrevClass);
                                    l.length > 0 && x.lazy.loadImageInSlide(l.index());
                                }
                        },
                        onTransitionStart: function () {
                            x.params.lazyLoading &&
                            (x.params.lazyLoadingOnTransitionStart ||
                                (!x.params.lazyLoadingOnTransitionStart &&
                                    !x.lazy.initialImageLoaded)) &&
                            x.lazy.load();
                        },
                        onTransitionEnd: function () {
                            x.params.lazyLoading &&
                            !x.params.lazyLoadingOnTransitionStart &&
                            x.lazy.load();
                        },
                    }),
                    (x.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function (e) {
                            var a = x.scrollbar,
                                t = x.isHorizontal()
                                    ? "touchstart" === e.type || "touchmove" === e.type
                                        ? e.targetTouches[0].pageX
                                        : e.pageX || e.clientX
                                    : "touchstart" === e.type || "touchmove" === e.type
                                        ? e.targetTouches[0].pageY
                                        : e.pageY || e.clientY,
                                s =
                                    t -
                                    a.track.offset()[x.isHorizontal() ? "left" : "top"] -
                                    a.dragSize / 2,
                                r = -x.minTranslate() * a.moveDivider,
                                i = -x.maxTranslate() * a.moveDivider;
                            s < r ? (s = r) : s > i && (s = i),
                                (s = -s / a.moveDivider),
                                x.updateProgress(s),
                                x.setWrapperTranslate(s, !0);
                        },
                        dragStart: function (e) {
                            var a = x.scrollbar;
                            (a.isTouched = !0),
                                e.preventDefault(),
                                e.stopPropagation(),
                                a.setDragPosition(e),
                                clearTimeout(a.dragTimeout),
                                a.track.transition(0),
                            x.params.scrollbarHide && a.track.css("opacity", 1),
                                x.wrapper.transition(100),
                                a.drag.transition(100),
                                x.emit("onScrollbarDragStart", x);
                        },
                        dragMove: function (e) {
                            var a = x.scrollbar;
                            a.isTouched &&
                            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                                a.setDragPosition(e),
                                x.wrapper.transition(0),
                                a.track.transition(0),
                                a.drag.transition(0),
                                x.emit("onScrollbarDragMove", x));
                        },
                        dragEnd: function (e) {
                            var a = x.scrollbar;
                            a.isTouched &&
                            ((a.isTouched = !1),
                            x.params.scrollbarHide &&
                            (clearTimeout(a.dragTimeout),
                                (a.dragTimeout = setTimeout(function () {
                                    a.track.css("opacity", 0), a.track.transition(400);
                                }, 1e3))),
                                x.emit("onScrollbarDragEnd", x),
                            x.params.scrollbarSnapOnRelease && x.slideReset());
                        },
                        draggableEvents: (function () {
                            return x.params.simulateTouch !== !1 || x.support.touch
                                ? x.touchEvents
                                : x.touchEventsDesktop;
                        })(),
                        enableDraggable: function () {
                            var a = x.scrollbar,
                                t = x.support.touch ? a.track : document;
                            e(a.track).on(a.draggableEvents.start, a.dragStart),
                                e(t).on(a.draggableEvents.move, a.dragMove),
                                e(t).on(a.draggableEvents.end, a.dragEnd);
                        },
                        disableDraggable: function () {
                            var a = x.scrollbar,
                                t = x.support.touch ? a.track : document;
                            e(a.track).off(a.draggableEvents.start, a.dragStart),
                                e(t).off(a.draggableEvents.move, a.dragMove),
                                e(t).off(a.draggableEvents.end, a.dragEnd);
                        },
                        set: function () {
                            if (x.params.scrollbar) {
                                var a = x.scrollbar;
                                (a.track = e(x.params.scrollbar)),
                                x.params.uniqueNavElements &&
                                "string" == typeof x.params.scrollbar &&
                                a.track.length > 1 &&
                                1 === x.container.find(x.params.scrollbar).length &&
                                (a.track = x.container.find(x.params.scrollbar)),
                                    (a.drag = a.track.find(".swiper-scrollbar-drag")),
                                0 === a.drag.length &&
                                ((a.drag = e('<div class="swiper-scrollbar-drag"></div>')),
                                    a.track.append(a.drag)),
                                    (a.drag[0].style.width = ""),
                                    (a.drag[0].style.height = ""),
                                    (a.trackSize = x.isHorizontal()
                                        ? a.track[0].offsetWidth
                                        : a.track[0].offsetHeight),
                                    (a.divider = x.size / x.virtualSize),
                                    (a.moveDivider = a.divider * (a.trackSize / x.size)),
                                    (a.dragSize = a.trackSize * a.divider),
                                    x.isHorizontal()
                                        ? (a.drag[0].style.width = a.dragSize + "px")
                                        : (a.drag[0].style.height = a.dragSize + "px"),
                                    a.divider >= 1
                                        ? (a.track[0].style.display = "none")
                                        : (a.track[0].style.display = ""),
                                x.params.scrollbarHide && (a.track[0].style.opacity = 0);
                            }
                        },
                        setTranslate: function () {
                            if (x.params.scrollbar) {
                                var e,
                                    a = x.scrollbar,
                                    t = (x.translate, a.dragSize);
                                (e = (a.trackSize - a.dragSize) * x.progress),
                                    x.rtl && x.isHorizontal()
                                        ? ((e = -e),
                                            e > 0
                                                ? ((t = a.dragSize - e), (e = 0))
                                                : -e + a.dragSize > a.trackSize &&
                                                (t = a.trackSize + e))
                                        : e < 0
                                            ? ((t = a.dragSize + e), (e = 0))
                                            : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                                    x.isHorizontal()
                                        ? (x.support.transforms3d
                                            ? a.drag.transform("translate3d(" + e + "px, 0, 0)")
                                            : a.drag.transform("translateX(" + e + "px)"),
                                            (a.drag[0].style.width = t + "px"))
                                        : (x.support.transforms3d
                                            ? a.drag.transform("translate3d(0px, " + e + "px, 0)")
                                            : a.drag.transform("translateY(" + e + "px)"),
                                            (a.drag[0].style.height = t + "px")),
                                x.params.scrollbarHide &&
                                (clearTimeout(a.timeout),
                                    (a.track[0].style.opacity = 1),
                                    (a.timeout = setTimeout(function () {
                                        (a.track[0].style.opacity = 0), a.track.transition(400);
                                    }, 1e3)));
                            }
                        },
                        setTransition: function (e) {
                            x.params.scrollbar && x.scrollbar.drag.transition(e);
                        },
                    }),
                    (x.controller = {
                        LinearSpline: function (e, a) {
                            var t = (function () {
                                var e, a, t;
                                return function (s, r) {
                                    for (a = -1, e = s.length; e - a > 1; )
                                        s[(t = (e + a) >> 1)] <= r ? (a = t) : (e = t);
                                    return e;
                                };
                            })();
                            (this.x = e), (this.y = a), (this.lastIndex = e.length - 1);
                            var s, r;
                            this.x.length;
                            this.interpolate = function (e) {
                                return e
                                    ? ((r = t(this.x, e)),
                                        (s = r - 1),
                                    ((e - this.x[s]) * (this.y[r] - this.y[s])) /
                                    (this.x[r] - this.x[s]) +
                                    this.y[s])
                                    : 0;
                            };
                        },
                        getInterpolateFunction: function (e) {
                            x.controller.spline ||
                            (x.controller.spline = x.params.loop
                                ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid)
                                : new x.controller.LinearSpline(x.snapGrid, e.snapGrid));
                        },
                        setTranslate: function (e, t) {
                            function s(a) {
                                (e =
                                    a.rtl && "horizontal" === a.params.direction
                                        ? -x.translate
                                        : x.translate),
                                "slide" === x.params.controlBy &&
                                (x.controller.getInterpolateFunction(a),
                                    (i = -x.controller.spline.interpolate(-e))),
                                (i && "container" !== x.params.controlBy) ||
                                ((r =
                                    (a.maxTranslate() - a.minTranslate()) /
                                    (x.maxTranslate() - x.minTranslate())),
                                    (i = (e - x.minTranslate()) * r + a.minTranslate())),
                                x.params.controlInverse && (i = a.maxTranslate() - i),
                                    a.updateProgress(i),
                                    a.setWrapperTranslate(i, !1, x),
                                    a.updateActiveIndex();
                            }
                            var r,
                                i,
                                n = x.params.control;
                            if (Array.isArray(n))
                                for (var o = 0; o < n.length; o++)
                                    n[o] !== t && n[o] instanceof a && s(n[o]);
                            else n instanceof a && t !== n && s(n);
                        },
                        setTransition: function (e, t) {
                            function s(a) {
                                a.setWrapperTransition(e, x),
                                0 !== e &&
                                (a.onTransitionStart(),
                                    a.wrapper.transitionEnd(function () {
                                        i &&
                                        (a.params.loop &&
                                        "slide" === x.params.controlBy &&
                                        a.fixLoop(),
                                            a.onTransitionEnd());
                                    }));
                            }
                            var r,
                                i = x.params.control;
                            if (Array.isArray(i))
                                for (r = 0; r < i.length; r++)
                                    i[r] !== t && i[r] instanceof a && s(i[r]);
                            else i instanceof a && t !== i && s(i);
                        },
                    }),
                    (x.hashnav = {
                        onHashCange: function (e, a) {
                            var t = document.location.hash.replace("#", "");
                            t !== x.slides.eq(x.activeIndex).attr("data-hash") &&
                            x.slideTo(
                                x.wrapper
                                    .children(
                                        "." + x.params.slideClass + '[data-hash="' + t + '"]'
                                    )
                                    .index()
                            );
                        },
                        attachEvents: function (a) {
                            var t = a ? "off" : "on";
                            e(window)[t]("hashchange", x.hashnav.onHashCange);
                        },
                        setHash: function () {
                            if (x.hashnav.initialized && x.params.hashnav)
                                if (
                                    x.params.replaceState &&
                                    window.history &&
                                    window.history.replaceState
                                )
                                    window.history.replaceState(
                                        null,
                                        null,
                                        "#" + x.slides.eq(x.activeIndex).attr("data-hash") || ""
                                    );
                                else {
                                    var e = x.slides.eq(x.activeIndex),
                                        a = e.attr("data-hash") || e.attr("data-history");
                                    document.location.hash = a || "";
                                }
                        },
                        init: function () {
                            if (x.params.hashnav && !x.params.history) {
                                x.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var a = 0, t = x.slides.length; a < t; a++) {
                                        var s = x.slides.eq(a),
                                            r = s.attr("data-hash") || s.attr("data-history");
                                        if (r === e && !s.hasClass(x.params.slideDuplicateClass)) {
                                            var i = s.index();
                                            x.slideTo(i, 0, x.params.runCallbacksOnInit, !0);
                                        }
                                    }
                                x.params.hashnavWatchState && x.hashnav.attachEvents();
                            }
                        },
                        destroy: function () {
                            x.params.hashnavWatchState && x.hashnav.attachEvents(!0);
                        },
                    }),
                    (x.history = {
                        init: function () {
                            if (x.params.history) {
                                if (!window.history || !window.history.pushState)
                                    return (x.params.history = !1), void (x.params.hashnav = !0);
                                (x.history.initialized = !0),
                                    (this.paths = this.getPathValues()),
                                (this.paths.key || this.paths.value) &&
                                (this.scrollToSlide(
                                    0,
                                    this.paths.value,
                                    x.params.runCallbacksOnInit
                                ),
                                x.params.replaceState ||
                                window.addEventListener(
                                    "popstate",
                                    this.setHistoryPopState
                                ));
                            }
                        },
                        setHistoryPopState: function () {
                            (x.history.paths = x.history.getPathValues()),
                                x.history.scrollToSlide(
                                    x.params.speed,
                                    x.history.paths.value,
                                    !1
                                );
                        },
                        getPathValues: function () {
                            var e = window.location.pathname.slice(1).split("/"),
                                a = e.length;
                            return { key: e[a - 2], value: e[a - 1] };
                        },
                        setHistory: function (e, a) {
                            if (x.history.initialized && x.params.history) {
                                var t = x.slides.eq(a),
                                    s = this.slugify(t.attr("data-history"));
                                window.location.pathname.includes(e) || (s = e + "/" + s),
                                    x.params.replaceState
                                        ? window.history.replaceState(null, null, s)
                                        : window.history.pushState(null, null, s);
                            }
                        },
                        slugify: function (e) {
                            return e
                                .toString()
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w\-]+/g, "")
                                .replace(/\-\-+/g, "-")
                                .replace(/^-+/, "")
                                .replace(/-+$/, "");
                        },
                        scrollToSlide: function (e, a, t) {
                            if (a)
                                for (var s = 0, r = x.slides.length; s < r; s++) {
                                    var i = x.slides.eq(s),
                                        n = this.slugify(i.attr("data-history"));
                                    if (n === a && !i.hasClass(x.params.slideDuplicateClass)) {
                                        var o = i.index();
                                        x.slideTo(o, e, t);
                                    }
                                }
                            else x.slideTo(0, e, t);
                        },
                    }),
                    (x.disableKeyboardControl = function () {
                        (x.params.keyboardControl = !1), e(document).off("keydown", l);
                    }),
                    (x.enableKeyboardControl = function () {
                        (x.params.keyboardControl = !0), e(document).on("keydown", l);
                    }),
                    (x.mousewheel = {
                        event: !1,
                        lastScrollTime: new window.Date().getTime(),
                    }),
                x.params.mousewheelControl &&
                (x.mousewheel.event =
                    navigator.userAgent.indexOf("firefox") > -1
                        ? "DOMMouseScroll"
                        : (function () {
                            var e = "onwheel" in document;
                            if (!e) {
                                var a = document.createElement("div");
                                a.setAttribute("onwheel", "return;"),
                                    (e = "function" == typeof a.onwheel);
                            }
                            return (
                                !e &&
                                document.implementation &&
                                document.implementation.hasFeature &&
                                document.implementation.hasFeature("", "") !== !0 &&
                                (e = document.implementation.hasFeature(
                                    "Events.wheel",
                                    "3.0"
                                )),
                                    e
                            );
                        })()
                            ? "wheel"
                            : "mousewheel"),
                    (x.disableMousewheelControl = function () {
                        if (!x.mousewheel.event) return !1;
                        var a = x.container;
                        return (
                            "container" !== x.params.mousewheelEventsTarged &&
                            (a = e(x.params.mousewheelEventsTarged)),
                                a.off(x.mousewheel.event, d),
                                (x.params.mousewheelControl = !1),
                                !0
                        );
                    }),
                    (x.enableMousewheelControl = function () {
                        if (!x.mousewheel.event) return !1;
                        var a = x.container;
                        return (
                            "container" !== x.params.mousewheelEventsTarged &&
                            (a = e(x.params.mousewheelEventsTarged)),
                                a.on(x.mousewheel.event, d),
                                (x.params.mousewheelControl = !0),
                                !0
                        );
                    }),
                    (x.parallax = {
                        setTranslate: function () {
                            x.container
                                .children(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                                )
                                .each(function () {
                                    m(this, x.progress);
                                }),
                                x.slides.each(function () {
                                    var a = e(this);
                                    a.find(
                                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                                    ).each(function () {
                                        m(this, Math.min(Math.max(a[0].progress, -1), 1));
                                    });
                                });
                        },
                        setTransition: function (a) {
                            void 0 === a && (a = x.params.speed),
                                x.container
                                    .find(
                                        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                                    )
                                    .each(function () {
                                        var t = e(this),
                                            s =
                                                parseInt(t.attr("data-swiper-parallax-duration"), 10) ||
                                                a;
                                        0 === a && (s = 0), t.transition(s);
                                    });
                        },
                    }),
                    (x.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            slide: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            image: void 0,
                            imageWrap: void 0,
                            zoomMax: x.params.zoomMax,
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {},
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0,
                        },
                        getDistanceBetweenTouches: function (e) {
                            if (e.targetTouches.length < 2) return 1;
                            var a = e.targetTouches[0].pageX,
                                t = e.targetTouches[0].pageY,
                                s = e.targetTouches[1].pageX,
                                r = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(s - a, 2) + Math.pow(r - t, 2));
                        },
                        onGestureStart: function (a) {
                            var t = x.zoom;
                            if (!x.support.gestures) {
                                if (
                                    "touchstart" !== a.type ||
                                    ("touchstart" === a.type && a.targetTouches.length < 2)
                                )
                                    return;
                                t.gesture.scaleStart = t.getDistanceBetweenTouches(a);
                            }
                            if (
                                !(
                                    (t.gesture.slide && t.gesture.slide.length) ||
                                    ((t.gesture.slide = e(this)),
                                    0 === t.gesture.slide.length &&
                                    (t.gesture.slide = x.slides.eq(x.activeIndex)),
                                        (t.gesture.image = t.gesture.slide.find("img, svg, canvas")),
                                        (t.gesture.imageWrap = t.gesture.image.parent(
                                            "." + x.params.zoomContainerClass
                                        )),
                                        (t.gesture.zoomMax =
                                            t.gesture.imageWrap.attr("data-swiper-zoom") ||
                                            x.params.zoomMax),
                                    0 !== t.gesture.imageWrap.length)
                                )
                            )
                                return void (t.gesture.image = void 0);
                            t.gesture.image.transition(0), (t.isScaling = !0);
                        },
                        onGestureChange: function (e) {
                            var a = x.zoom;
                            if (!x.support.gestures) {
                                if (
                                    "touchmove" !== e.type ||
                                    ("touchmove" === e.type && e.targetTouches.length < 2)
                                )
                                    return;
                                a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
                            }
                            a.gesture.image &&
                            0 !== a.gesture.image.length &&
                            (x.support.gestures
                                ? (a.scale = e.scale * a.currentScale)
                                : (a.scale =
                                    (a.gesture.scaleMove / a.gesture.scaleStart) *
                                    a.currentScale),
                            a.scale > a.gesture.zoomMax &&
                            (a.scale =
                                a.gesture.zoomMax -
                                1 +
                                Math.pow(a.scale - a.gesture.zoomMax + 1, 0.5)),
                            a.scale < x.params.zoomMin &&
                            (a.scale =
                                x.params.zoomMin +
                                1 -
                                Math.pow(x.params.zoomMin - a.scale + 1, 0.5)),
                                a.gesture.image.transform(
                                    "translate3d(0,0,0) scale(" + a.scale + ")"
                                ));
                        },
                        onGestureEnd: function (e) {
                            var a = x.zoom;
                            (!x.support.gestures &&
                                ("touchend" !== e.type ||
                                    ("touchend" === e.type && e.changedTouches.length < 2))) ||
                            (a.gesture.image &&
                                0 !== a.gesture.image.length &&
                                ((a.scale = Math.max(
                                    Math.min(a.scale, a.gesture.zoomMax),
                                    x.params.zoomMin
                                )),
                                    a.gesture.image
                                        .transition(x.params.speed)
                                        .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                                    (a.currentScale = a.scale),
                                    (a.isScaling = !1),
                                1 === a.scale && (a.gesture.slide = void 0)));
                        },
                        onTouchStart: function (e, a) {
                            var t = e.zoom;
                            t.gesture.image &&
                            0 !== t.gesture.image.length &&
                            (t.image.isTouched ||
                                ("android" === e.device.os && a.preventDefault(),
                                    (t.image.isTouched = !0),
                                    (t.image.touchesStart.x =
                                        "touchstart" === a.type
                                            ? a.targetTouches[0].pageX
                                            : a.pageX),
                                    (t.image.touchesStart.y =
                                        "touchstart" === a.type
                                            ? a.targetTouches[0].pageY
                                            : a.pageY)));
                        },
                        onTouchMove: function (e) {
                            var a = x.zoom;
                            if (
                                a.gesture.image &&
                                0 !== a.gesture.image.length &&
                                ((x.allowClick = !1), a.image.isTouched && a.gesture.slide)
                            ) {
                                a.image.isMoved ||
                                ((a.image.width = a.gesture.image[0].offsetWidth),
                                    (a.image.height = a.gesture.image[0].offsetHeight),
                                    (a.image.startX =
                                        x.getTranslate(a.gesture.imageWrap[0], "x") || 0),
                                    (a.image.startY =
                                        x.getTranslate(a.gesture.imageWrap[0], "y") || 0),
                                    (a.gesture.slideWidth = a.gesture.slide[0].offsetWidth),
                                    (a.gesture.slideHeight = a.gesture.slide[0].offsetHeight),
                                    a.gesture.imageWrap.transition(0),
                                x.rtl && (a.image.startX = -a.image.startX),
                                x.rtl && (a.image.startY = -a.image.startY));
                                var t = a.image.width * a.scale,
                                    s = a.image.height * a.scale;
                                if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                                    if (
                                        ((a.image.minX = Math.min(
                                            a.gesture.slideWidth / 2 - t / 2,
                                            0
                                        )),
                                            (a.image.maxX = -a.image.minX),
                                            (a.image.minY = Math.min(
                                                a.gesture.slideHeight / 2 - s / 2,
                                                0
                                            )),
                                            (a.image.maxY = -a.image.minY),
                                            (a.image.touchesCurrent.x =
                                                "touchmove" === e.type
                                                    ? e.targetTouches[0].pageX
                                                    : e.pageX),
                                            (a.image.touchesCurrent.y =
                                                "touchmove" === e.type
                                                    ? e.targetTouches[0].pageY
                                                    : e.pageY),
                                        !a.image.isMoved && !a.isScaling)
                                    ) {
                                        if (
                                            (x.isHorizontal() &&
                                                Math.floor(a.image.minX) ===
                                                Math.floor(a.image.startX) &&
                                                a.image.touchesCurrent.x < a.image.touchesStart.x) ||
                                            (Math.floor(a.image.maxX) ===
                                                Math.floor(a.image.startX) &&
                                                a.image.touchesCurrent.x > a.image.touchesStart.x)
                                        )
                                            return void (a.image.isTouched = !1);
                                        if (
                                            (!x.isHorizontal() &&
                                                Math.floor(a.image.minY) ===
                                                Math.floor(a.image.startY) &&
                                                a.image.touchesCurrent.y < a.image.touchesStart.y) ||
                                            (Math.floor(a.image.maxY) ===
                                                Math.floor(a.image.startY) &&
                                                a.image.touchesCurrent.y > a.image.touchesStart.y)
                                        )
                                            return void (a.image.isTouched = !1);
                                    }
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        (a.image.isMoved = !0),
                                        (a.image.currentX =
                                            a.image.touchesCurrent.x -
                                            a.image.touchesStart.x +
                                            a.image.startX),
                                        (a.image.currentY =
                                            a.image.touchesCurrent.y -
                                            a.image.touchesStart.y +
                                            a.image.startY),
                                    a.image.currentX < a.image.minX &&
                                    (a.image.currentX =
                                        a.image.minX +
                                        1 -
                                        Math.pow(a.image.minX - a.image.currentX + 1, 0.8)),
                                    a.image.currentX > a.image.maxX &&
                                    (a.image.currentX =
                                        a.image.maxX -
                                        1 +
                                        Math.pow(a.image.currentX - a.image.maxX + 1, 0.8)),
                                    a.image.currentY < a.image.minY &&
                                    (a.image.currentY =
                                        a.image.minY +
                                        1 -
                                        Math.pow(a.image.minY - a.image.currentY + 1, 0.8)),
                                    a.image.currentY > a.image.maxY &&
                                    (a.image.currentY =
                                        a.image.maxY -
                                        1 +
                                        Math.pow(a.image.currentY - a.image.maxY + 1, 0.8)),
                                    a.velocity.prevPositionX ||
                                    (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                                    a.velocity.prevPositionY ||
                                    (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                                    a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                                        (a.velocity.x =
                                            (a.image.touchesCurrent.x - a.velocity.prevPositionX) /
                                            (Date.now() - a.velocity.prevTime) /
                                            2),
                                        (a.velocity.y =
                                            (a.image.touchesCurrent.y - a.velocity.prevPositionY) /
                                            (Date.now() - a.velocity.prevTime) /
                                            2),
                                    Math.abs(
                                        a.image.touchesCurrent.x - a.velocity.prevPositionX
                                    ) < 2 && (a.velocity.x = 0),
                                    Math.abs(
                                        a.image.touchesCurrent.y - a.velocity.prevPositionY
                                    ) < 2 && (a.velocity.y = 0),
                                        (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                                        (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                                        (a.velocity.prevTime = Date.now()),
                                        a.gesture.imageWrap.transform(
                                            "translate3d(" +
                                            a.image.currentX +
                                            "px, " +
                                            a.image.currentY +
                                            "px,0)"
                                        );
                                }
                            }
                        },
                        onTouchEnd: function (e, a) {
                            var t = e.zoom;
                            if (t.gesture.image && 0 !== t.gesture.image.length) {
                                if (!t.image.isTouched || !t.image.isMoved)
                                    return (t.image.isTouched = !1), void (t.image.isMoved = !1);
                                (t.image.isTouched = !1), (t.image.isMoved = !1);
                                var s = 300,
                                    r = 300,
                                    i = t.velocity.x * s,
                                    n = t.image.currentX + i,
                                    o = t.velocity.y * r,
                                    l = t.image.currentY + o;
                                0 !== t.velocity.x &&
                                (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
                                0 !== t.velocity.y &&
                                (r = Math.abs((l - t.image.currentY) / t.velocity.y));
                                var p = Math.max(s, r);
                                (t.image.currentX = n), (t.image.currentY = l);
                                var d = t.image.width * t.scale,
                                    m = t.image.height * t.scale;
                                (t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0)),
                                    (t.image.maxX = -t.image.minX),
                                    (t.image.minY = Math.min(
                                        t.gesture.slideHeight / 2 - m / 2,
                                        0
                                    )),
                                    (t.image.maxY = -t.image.minY),
                                    (t.image.currentX = Math.max(
                                        Math.min(t.image.currentX, t.image.maxX),
                                        t.image.minX
                                    )),
                                    (t.image.currentY = Math.max(
                                        Math.min(t.image.currentY, t.image.maxY),
                                        t.image.minY
                                    )),
                                    t.gesture.imageWrap
                                        .transition(p)
                                        .transform(
                                            "translate3d(" +
                                            t.image.currentX +
                                            "px, " +
                                            t.image.currentY +
                                            "px,0)"
                                        );
                            }
                        },
                        onTransitionEnd: function (e) {
                            var a = e.zoom;
                            a.gesture.slide &&
                            e.previousIndex !== e.activeIndex &&
                            (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                                a.gesture.imageWrap.transform("translate3d(0,0,0)"),
                                (a.gesture.slide =
                                    a.gesture.image =
                                        a.gesture.imageWrap =
                                            void 0),
                                (a.scale = a.currentScale = 1));
                        },
                        toggleZoom: function (a, t) {
                            var s = a.zoom;
                            if (
                                (s.gesture.slide ||
                                ((s.gesture.slide = a.clickedSlide
                                    ? e(a.clickedSlide)
                                    : a.slides.eq(a.activeIndex)),
                                    (s.gesture.image = s.gesture.slide.find("img, svg, canvas")),
                                    (s.gesture.imageWrap = s.gesture.image.parent(
                                        "." + a.params.zoomContainerClass
                                    ))),
                                s.gesture.image && 0 !== s.gesture.image.length)
                            ) {
                                var r, i, n, o, l, p, d, m, u, c, g, h, v, f, w, y, x, T;
                                void 0 === s.image.touchesStart.x && t
                                    ? ((r =
                                        "touchend" === t.type
                                            ? t.changedTouches[0].pageX
                                            : t.pageX),
                                        (i =
                                            "touchend" === t.type
                                                ? t.changedTouches[0].pageY
                                                : t.pageY))
                                    : ((r = s.image.touchesStart.x),
                                        (i = s.image.touchesStart.y)),
                                    s.scale && 1 !== s.scale
                                        ? ((s.scale = s.currentScale = 1),
                                            s.gesture.imageWrap
                                                .transition(300)
                                                .transform("translate3d(0,0,0)"),
                                            s.gesture.image
                                                .transition(300)
                                                .transform("translate3d(0,0,0) scale(1)"),
                                            (s.gesture.slide = void 0))
                                        : ((s.scale = s.currentScale =
                                            s.gesture.imageWrap.attr("data-swiper-zoom") ||
                                            a.params.zoomMax),
                                            t
                                                ? ((x = s.gesture.slide[0].offsetWidth),
                                                    (T = s.gesture.slide[0].offsetHeight),
                                                    (n = s.gesture.slide.offset().left),
                                                    (o = s.gesture.slide.offset().top),
                                                    (l = n + x / 2 - r),
                                                    (p = o + T / 2 - i),
                                                    (u = s.gesture.image[0].offsetWidth),
                                                    (c = s.gesture.image[0].offsetHeight),
                                                    (g = u * s.scale),
                                                    (h = c * s.scale),
                                                    (v = Math.min(x / 2 - g / 2, 0)),
                                                    (f = Math.min(T / 2 - h / 2, 0)),
                                                    (w = -v),
                                                    (y = -f),
                                                    (d = l * s.scale),
                                                    (m = p * s.scale),
                                                d < v && (d = v),
                                                d > w && (d = w),
                                                m < f && (m = f),
                                                m > y && (m = y))
                                                : ((d = 0), (m = 0)),
                                            s.gesture.imageWrap
                                                .transition(300)
                                                .transform("translate3d(" + d + "px, " + m + "px,0)"),
                                            s.gesture.image
                                                .transition(300)
                                                .transform(
                                                    "translate3d(0,0,0) scale(" + s.scale + ")"
                                                ));
                            }
                        },
                        attachEvents: function (a) {
                            var t = a ? "off" : "on";
                            if (x.params.zoom) {
                                var s =
                                    (x.slides,
                                    !(
                                        "touchstart" !== x.touchEvents.start ||
                                        !x.support.passiveListener ||
                                        !x.params.passiveListeners
                                    ) && { passive: !0, capture: !1 });
                                x.support.gestures
                                    ? (x.slides[t]("gesturestart", x.zoom.onGestureStart, s),
                                        x.slides[t]("gesturechange", x.zoom.onGestureChange, s),
                                        x.slides[t]("gestureend", x.zoom.onGestureEnd, s))
                                    : "touchstart" === x.touchEvents.start &&
                                    (x.slides[t](x.touchEvents.start, x.zoom.onGestureStart, s),
                                        x.slides[t](x.touchEvents.move, x.zoom.onGestureChange, s),
                                        x.slides[t](x.touchEvents.end, x.zoom.onGestureEnd, s)),
                                    x[t]("touchStart", x.zoom.onTouchStart),
                                    x.slides.each(function (a, s) {
                                        e(s).find("." + x.params.zoomContainerClass).length > 0 &&
                                        e(s)[t](x.touchEvents.move, x.zoom.onTouchMove);
                                    }),
                                    x[t]("touchEnd", x.zoom.onTouchEnd),
                                    x[t]("transitionEnd", x.zoom.onTransitionEnd),
                                x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom);
                            }
                        },
                        init: function () {
                            x.zoom.attachEvents();
                        },
                        destroy: function () {
                            x.zoom.attachEvents(!0);
                        },
                    }),
                    (x._plugins = []);
                for (var Y in x.plugins) {
                    var A = x.plugins[Y](x, x.params[Y]);
                    A && x._plugins.push(A);
                }
                return (
                    (x.callPlugins = function (e) {
                        for (var a = 0; a < x._plugins.length; a++)
                            e in x._plugins[a] &&
                            x._plugins[a][e](
                                arguments[1],
                                arguments[2],
                                arguments[3],
                                arguments[4],
                                arguments[5]
                            );
                    }),
                        (x.emitterEventListeners = {}),
                        (x.emit = function (e) {
                            x.params[e] &&
                            x.params[e](
                                arguments[1],
                                arguments[2],
                                arguments[3],
                                arguments[4],
                                arguments[5]
                            );
                            var a;
                            if (x.emitterEventListeners[e])
                                for (a = 0; a < x.emitterEventListeners[e].length; a++)
                                    x.emitterEventListeners[e][a](
                                        arguments[1],
                                        arguments[2],
                                        arguments[3],
                                        arguments[4],
                                        arguments[5]
                                    );
                            x.callPlugins &&
                            x.callPlugins(
                                e,
                                arguments[1],
                                arguments[2],
                                arguments[3],
                                arguments[4],
                                arguments[5]
                            );
                        }),
                        (x.on = function (e, a) {
                            return (
                                (e = u(e)),
                                x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
                                    x.emitterEventListeners[e].push(a),
                                    x
                            );
                        }),
                        (x.off = function (e, a) {
                            var t;
                            if (((e = u(e)), void 0 === a))
                                return (x.emitterEventListeners[e] = []), x;
                            if (
                                x.emitterEventListeners[e] &&
                                0 !== x.emitterEventListeners[e].length
                            ) {
                                for (t = 0; t < x.emitterEventListeners[e].length; t++)
                                    x.emitterEventListeners[e][t] === a &&
                                    x.emitterEventListeners[e].splice(t, 1);
                                return x;
                            }
                        }),
                        (x.once = function (e, a) {
                            e = u(e);
                            var t = function () {
                                a(
                                    arguments[0],
                                    arguments[1],
                                    arguments[2],
                                    arguments[3],
                                    arguments[4]
                                ),
                                    x.off(e, t);
                            };
                            return x.on(e, t), x;
                        }),
                        (x.a11y = {
                            makeFocusable: function (e) {
                                return e.attr("tabIndex", "0"), e;
                            },
                            addRole: function (e, a) {
                                return e.attr("role", a), e;
                            },
                            addLabel: function (e, a) {
                                return e.attr("aria-label", a), e;
                            },
                            disable: function (e) {
                                return e.attr("aria-disabled", !0), e;
                            },
                            enable: function (e) {
                                return e.attr("aria-disabled", !1), e;
                            },
                            onEnterKey: function (a) {
                                13 === a.keyCode &&
                                (e(a.target).is(x.params.nextButton)
                                    ? (x.onClickNext(a),
                                        x.isEnd
                                            ? x.a11y.notify(x.params.lastSlideMessage)
                                            : x.a11y.notify(x.params.nextSlideMessage))
                                    : e(a.target).is(x.params.prevButton) &&
                                    (x.onClickPrev(a),
                                        x.isBeginning
                                            ? x.a11y.notify(x.params.firstSlideMessage)
                                            : x.a11y.notify(x.params.prevSlideMessage)),
                                e(a.target).is("." + x.params.bulletClass) &&
                                e(a.target)[0].click());
                            },
                            liveRegion: e(
                                '<span class="' +
                                x.params.notificationClass +
                                '" aria-live="assertive" aria-atomic="true"></span>'
                            ),
                            notify: function (e) {
                                var a = x.a11y.liveRegion;
                                0 !== a.length && (a.html(""), a.html(e));
                            },
                            init: function () {
                                x.params.nextButton &&
                                x.nextButton &&
                                x.nextButton.length > 0 &&
                                (x.a11y.makeFocusable(x.nextButton),
                                    x.a11y.addRole(x.nextButton, "button"),
                                    x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                                x.params.prevButton &&
                                x.prevButton &&
                                x.prevButton.length > 0 &&
                                (x.a11y.makeFocusable(x.prevButton),
                                    x.a11y.addRole(x.prevButton, "button"),
                                    x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                                    e(x.container).append(x.a11y.liveRegion);
                            },
                            initPagination: function () {
                                x.params.pagination &&
                                x.params.paginationClickable &&
                                x.bullets &&
                                x.bullets.length &&
                                x.bullets.each(function () {
                                    var a = e(this);
                                    x.a11y.makeFocusable(a),
                                        x.a11y.addRole(a, "button"),
                                        x.a11y.addLabel(
                                            a,
                                            x.params.paginationBulletMessage.replace(
                                                /{{index}}/,
                                                a.index() + 1
                                            )
                                        );
                                });
                            },
                            destroy: function () {
                                x.a11y.liveRegion &&
                                x.a11y.liveRegion.length > 0 &&
                                x.a11y.liveRegion.remove();
                            },
                        }),
                        (x.init = function () {
                            x.params.loop && x.createLoop(),
                                x.updateContainerSize(),
                                x.updateSlidesSize(),
                                x.updatePagination(),
                            x.params.scrollbar &&
                            x.scrollbar &&
                            (x.scrollbar.set(),
                            x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                            "slide" !== x.params.effect &&
                            x.effects[x.params.effect] &&
                            (x.params.loop || x.updateProgress(),
                                x.effects[x.params.effect].setTranslate()),
                                x.params.loop
                                    ? x.slideTo(
                                        x.params.initialSlide + x.loopedSlides,
                                        0,
                                        x.params.runCallbacksOnInit
                                    )
                                    : (x.slideTo(
                                        x.params.initialSlide,
                                        0,
                                        x.params.runCallbacksOnInit
                                    ),
                                    0 === x.params.initialSlide &&
                                    (x.parallax &&
                                    x.params.parallax &&
                                    x.parallax.setTranslate(),
                                    x.lazy &&
                                    x.params.lazyLoading &&
                                    (x.lazy.load(), (x.lazy.initialImageLoaded = !0)))),
                                x.attachEvents(),
                            x.params.observer && x.support.observer && x.initObservers(),
                            x.params.preloadImages &&
                            !x.params.lazyLoading &&
                            x.preloadImages(),
                            x.params.zoom && x.zoom && x.zoom.init(),
                            x.params.autoplay && x.startAutoplay(),
                            x.params.keyboardControl &&
                            x.enableKeyboardControl &&
                            x.enableKeyboardControl(),
                            x.params.mousewheelControl &&
                            x.enableMousewheelControl &&
                            x.enableMousewheelControl(),
                            x.params.hashnavReplaceState &&
                            (x.params.replaceState = x.params.hashnavReplaceState),
                            x.params.history && x.history && x.history.init(),
                            x.params.hashnav && x.hashnav && x.hashnav.init(),
                            x.params.a11y && x.a11y && x.a11y.init(),
                                x.emit("onInit", x);
                        }),
                        (x.cleanupStyles = function () {
                            x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                                x.wrapper.removeAttr("style"),
                            x.slides &&
                            x.slides.length &&
                            x.slides
                                .removeClass(
                                    [
                                        x.params.slideVisibleClass,
                                        x.params.slideActiveClass,
                                        x.params.slideNextClass,
                                        x.params.slidePrevClass,
                                    ].join(" ")
                                )
                                .removeAttr("style")
                                .removeAttr("data-swiper-column")
                                .removeAttr("data-swiper-row"),
                            x.paginationContainer &&
                            x.paginationContainer.length &&
                            x.paginationContainer.removeClass(
                                x.params.paginationHiddenClass
                            ),
                            x.bullets &&
                            x.bullets.length &&
                            x.bullets.removeClass(x.params.bulletActiveClass),
                            x.params.prevButton &&
                            e(x.params.prevButton).removeClass(
                                x.params.buttonDisabledClass
                            ),
                            x.params.nextButton &&
                            e(x.params.nextButton).removeClass(
                                x.params.buttonDisabledClass
                            ),
                            x.params.scrollbar &&
                            x.scrollbar &&
                            (x.scrollbar.track &&
                            x.scrollbar.track.length &&
                            x.scrollbar.track.removeAttr("style"),
                            x.scrollbar.drag &&
                            x.scrollbar.drag.length &&
                            x.scrollbar.drag.removeAttr("style"));
                        }),
                        (x.destroy = function (e, a) {
                            x.detachEvents(),
                                x.stopAutoplay(),
                            x.params.scrollbar &&
                            x.scrollbar &&
                            x.params.scrollbarDraggable &&
                            x.scrollbar.disableDraggable(),
                            x.params.loop && x.destroyLoop(),
                            a && x.cleanupStyles(),
                                x.disconnectObservers(),
                            x.params.zoom && x.zoom && x.zoom.destroy(),
                            x.params.keyboardControl &&
                            x.disableKeyboardControl &&
                            x.disableKeyboardControl(),
                            x.params.mousewheelControl &&
                            x.disableMousewheelControl &&
                            x.disableMousewheelControl(),
                            x.params.a11y && x.a11y && x.a11y.destroy(),
                            x.params.history &&
                            !x.params.replaceState &&
                            window.removeEventListener(
                                "popstate",
                                x.history.setHistoryPopState
                            ),
                            x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                                x.emit("onDestroy"),
                            e !== !1 && (x = null);
                        }),
                        x.init(),
                        x
                );
            }
        };
    a.prototype = {
        isSafari: (function () {
            var e = window.navigator.userAgent.toLowerCase();
            return (
                e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0
            );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            window.navigator.userAgent
        ),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch:
                (window.navigator.msPointerEnabled &&
                    window.navigator.msMaxTouchPoints > 1) ||
                (window.navigator.pointerEnabled &&
                    window.navigator.maxTouchPoints > 1),
            lteIE9: (function () {
                var e = document.createElement("div");
                return (
                    (e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->"),
                    1 === e.getElementsByTagName("i").length
                );
            })(),
        },
        device: (function () {
            var e = window.navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return { ios: t || r || s, android: a };
        })(),
        support: {
            touch:
                (window.Modernizr && Modernizr.touch === !0) ||
                (function () {
                    return !!(
                        "ontouchstart" in window ||
                        (window.DocumentTouch && document instanceof DocumentTouch)
                    );
                })(),
            transforms3d:
                (window.Modernizr && Modernizr.csstransforms3d === !0) ||
                (function () {
                    var e = document.createElement("div").style;
                    return (
                        "webkitPerspective" in e ||
                        "MozPerspective" in e ||
                        "OPerspective" in e ||
                        "MsPerspective" in e ||
                        "perspective" in e
                    );
                })(),
            flexbox: (function () {
                for (
                    var e = document.createElement("div").style,
                        a =
                            "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                                " "
                            ),
                        t = 0;
                    t < a.length;
                    t++
                )
                    if (a[t] in e) return !0;
            })(),
            observer: (function () {
                return (
                    "MutationObserver" in window || "WebkitMutationObserver" in window
                );
            })(),
            passiveListener: (function () {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0;
                        },
                    });
                    window.addEventListener("testPassiveListener", null, a);
                } catch (e) {}
                return e;
            })(),
            gestures: (function () {
                return "ongesturestart" in window;
            })(),
        },
        plugins: {},
    };
    for (var t = ["jQuery", "Zepto", "Dom7"], s = 0; s < t.length; s++)
        window[t[s]] &&
        (function (e) {
            e.fn.swiper = function (t) {
                var s;
                return (
                    e(this).each(function () {
                        var e = new a(this, t);
                        s || (s = e);
                    }),
                        s
                );
            };
        })(window[t[s]]);
    var r;
    (r =
        "undefined" == typeof Dom7
            ? window.Dom7 || window.Zepto || window.jQuery
            : Dom7),
    r &&
    ("transitionEnd" in r.fn ||
    (r.fn.transitionEnd = function (e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a);
        }
        var t,
            s = [
                "webkitTransitionEnd",
                "transitionend",
                "oTransitionEnd",
                "MSTransitionEnd",
                "msTransitionEnd",
            ],
            r = this;
        if (e) for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this;
    }),
    "transform" in r.fn ||
    (r.fn.transform = function (e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform =
                t.MsTransform =
                    t.msTransform =
                        t.MozTransform =
                            t.OTransform =
                                t.transform =
                                    e;
        }
        return this;
    }),
    "transition" in r.fn ||
    (r.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration =
                t.MsTransitionDuration =
                    t.msTransitionDuration =
                        t.MozTransitionDuration =
                            t.OTransitionDuration =
                                t.transitionDuration =
                                    e;
        }
        return this;
    }),
    "outerWidth" in r.fn ||
    (r.fn.outerWidth = function (e) {
        return this.length > 0
            ? e
                ? this[0].offsetWidth +
                parseFloat(this.css("margin-right")) +
                parseFloat(this.css("margin-left"))
                : this[0].offsetWidth
            : null;
    })),
        (window.Swiper = a);
})(),
    "undefined" != typeof module
        ? (module.exports = window.Swiper)
        : "function" == typeof define &&
        define.amd &&
        define([], function () {
            "use strict";
            return window.Swiper;
        });
//# sourceMappingURL=maps/swiper.jquery.min.js.map


// header 返回按钮
$(".backbtn").click(() => {
    // history历史记录对象
    window.history.back();
});

// 公共头尾
// header car
$(".header .right .car").click(function(){
    console.log("Alipay")
    window.location.pathname="Alipay"
})

// header vip
$(".header .right .vip").click(function(){
    console.log("vip")
    window.location.pathname="loft_HD"
})

//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c131adc40651cdf84b4c7d5fdfbec963";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//百度H5独立统计
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?58c876840e482c529ff6de71b1a89baf";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();
