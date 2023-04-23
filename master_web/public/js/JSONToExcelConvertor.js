function JSONToExcelConvertor(FileName, JSONData, title,filter) {
    if(!JSONData)
        return;

    var excel = "<table>";
    //设置表头
    var row = "<tr>";

    if(typeof title == 'function'){
        title(function (value) {
            row += "<th align='center'>" + value + '</th>';
        })
    }else if(title) {
        for (var i in title) {
            if (typeof title[i] != 'function') {
                row += "<th align='center'>" + title[i] + '</th>';
            }
        }
    }

    excel += row + "</tr>";
    // 回调方法处理
    if(typeof JSONData == 'function'){
        JSONData(function (value) {
            excel += value;
        })
    }else {
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
        //设置数据
        for (var i = 0; i < arrData.length; i++) {
            var row = "<tr>";

            for (var index in arrData[i]) {
                //判断是否有过滤行
                if (filter) {
                    if (filter.indexOf(index) == -1) {
                        var value = arrData[i][index] == null ? "" : arrData[i][index];
                        row += '<td>' + value + '</td>';
                    }
                } else {
                    var value = arrData[i][index] == null ? "" : arrData[i][index];
                    row += "<td align='center'>" + value + "</td>";
                }
            }

            excel += row + "</tr>";
        }
    }

    excel += "</table>";
    console.log(excel, 'excel')
    var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
    excelFile += '; charset=UTF-8">';
    excelFile += "<head>";
    excelFile += "<!--[if gte mso 9]>";
    excelFile += "<xml>";
    excelFile += "<x:ExcelWorkbook>";
    excelFile += "<x:ExcelWorksheets>";
    excelFile += "<x:ExcelWorksheet>";
    excelFile += "<x:Name>";
    excelFile += "{worksheet}";
    excelFile += "</x:Name>";
    excelFile += "<x:WorksheetOptions>";
    excelFile += "<x:DisplayGridlines/>";
    excelFile += "</x:WorksheetOptions>";
    excelFile += "</x:ExcelWorksheet>";
    excelFile += "</x:ExcelWorksheets>";
    excelFile += "</x:ExcelWorkbook>";
    excelFile += "</xml>";
    excelFile += "<![endif]-->";
    excelFile += "</head>";
    excelFile += "<body>";
    excelFile += excel;
    excelFile += "</body>";
    excelFile += "</html>";

    // console.log(excelFile, 'excelFile')
    var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

    var link = document.createElement("a");
    link.href = uri;

    link.style = "visibility:hidden";
    link.download = FileName + ".xls";

    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
}