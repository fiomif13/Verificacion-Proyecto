/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 47.1, "KoPercent": 52.9};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.471, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.86, 500, 1500, "EliminarJuegosSeleccionados"], "isController": false}, {"data": [0.57, 500, 1500, "VerJuegosSeleccionados"], "isController": false}, {"data": [0.2, 500, 1500, "VerVentaNuevos"], "isController": false}, {"data": [0.53, 500, 1500, "VerEstados"], "isController": false}, {"data": [0.6, 500, 1500, "VerCategorias"], "isController": false}, {"data": [0.19, 500, 1500, "VerVentaUsados"], "isController": false}, {"data": [0.78, 500, 1500, "Login"], "isController": false}, {"data": [0.49, 500, 1500, "VerDetalleProducto"], "isController": false}, {"data": [0.49, 500, 1500, "VerJuegoDetalle"], "isController": false}, {"data": [0.0, 500, 1500, "Registrarse"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1000, 529, 52.9, 2.438000000000004, 0, 70, 2.0, 5.0, 6.0, 10.0, 100.44194455604661, 118.86284024708719, 18.371851772800323], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["EliminarJuegosSeleccionados", 100, 14, 14.0, 1.7200000000000002, 1, 4, 2.0, 3.0, 3.0, 4.0, 10.114291493880854, 2.874276196014969, 1.886552417315667], "isController": false}, {"data": ["VerJuegosSeleccionados", 100, 43, 43.0, 1.47, 0, 3, 1.0, 2.0, 2.9499999999999886, 3.0, 10.11326860841424, 2.6369557797330097, 1.6690843699433657], "isController": false}, {"data": ["VerVentaNuevos", 100, 80, 80.0, 2.169999999999999, 1, 6, 2.0, 3.0, 4.0, 6.0, 10.097950116126427, 43.88269337574472, 1.5876659850550336], "isController": false}, {"data": ["VerEstados", 100, 47, 47.0, 1.5700000000000005, 0, 6, 1.0, 2.0, 3.0, 5.97999999999999, 10.094891984655765, 3.292669846557642, 1.5378937007874014], "isController": false}, {"data": ["VerCategorias", 100, 40, 40.0, 1.4399999999999997, 1, 3, 1.0, 2.0, 2.0, 3.0, 10.116337885685383, 5.3249083206879115, 1.5707985584218513], "isController": false}, {"data": ["VerVentaUsados", 100, 81, 81.0, 2.2899999999999996, 1, 11, 2.0, 3.0, 4.0, 10.949999999999974, 10.102030508132135, 46.73175636427922, 1.588307531063744], "isController": false}, {"data": ["Login", 100, 22, 22.0, 2.92, 1, 7, 3.0, 4.0, 5.0, 7.0, 10.090817356205854, 2.828188067608476, 2.315763748738648], "isController": false}, {"data": ["VerDetalleProducto", 100, 51, 51.0, 1.6900000000000008, 1, 5, 2.0, 3.0, 3.0, 4.989999999999995, 10.093873019077419, 5.796091147673362, 1.6461687443221964], "isController": false}, {"data": ["VerJuegoDetalle", 100, 51, 51.0, 1.6500000000000004, 1, 7, 2.0, 2.0, 3.0, 6.97999999999999, 10.111223458038422, 3.0807633973710815, 1.619375631951466], "isController": false}, {"data": ["Registrarse", 100, 100, 100.0, 7.460000000000001, 4, 70, 6.0, 10.0, 11.949999999999989, 69.55999999999977, 10.063399416322834, 3.0760195481533663, 3.046536932675858], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 302, 57.088846880907376, 30.2], "isController": false}, {"data": ["The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 2 milliseconds.", 2, 0.3780718336483932, 0.2], "isController": false}, {"data": ["The operation lasted too long: It took 26 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, 0.1890359168241966, 0.1], "isController": false}, {"data": ["The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 3 milliseconds.", 6, 1.1342155009451795, 0.6], "isController": false}, {"data": ["The operation lasted too long: It took 7 milliseconds, but should not have lasted longer than 3 milliseconds.", 3, 0.5671077504725898, 0.3], "isController": false}, {"data": ["The operation lasted too long: It took 12 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, 0.1890359168241966, 0.1], "isController": false}, {"data": ["The operation lasted too long: It took 13 milliseconds, but should not have lasted longer than 1 milliseconds.", 2, 0.3780718336483932, 0.2], "isController": false}, {"data": ["The operation lasted too long: It took 70 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, 0.1890359168241966, 0.1], "isController": false}, {"data": ["The operation lasted too long: It took 7 milliseconds, but should not have lasted longer than 1 milliseconds.", 17, 3.213610586011342, 1.7], "isController": false}, {"data": ["The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 3 milliseconds.", 13, 2.4574669187145557, 1.3], "isController": false}, {"data": ["The operation lasted too long: It took 11 milliseconds, but should not have lasted longer than 1 milliseconds.", 4, 0.7561436672967864, 0.4], "isController": false}, {"data": ["The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 18, 3.402646502835539, 1.8], "isController": false}, {"data": ["The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 68, 12.854442344045369, 6.8], "isController": false}, {"data": ["The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 2 milliseconds.", 12, 2.268431001890359, 1.2], "isController": false}, {"data": ["The operation lasted too long: It took 10 milliseconds, but should not have lasted longer than 1 milliseconds.", 3, 0.5671077504725898, 0.3], "isController": false}, {"data": ["The operation lasted too long: It took 9 milliseconds, but should not have lasted longer than 1 milliseconds.", 5, 0.945179584120983, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 8 milliseconds, but should not have lasted longer than 1 milliseconds.", 11, 2.0793950850661624, 1.1], "isController": false}, {"data": ["The operation lasted too long: It took 6 milliseconds, but should not have lasted longer than 1 milliseconds.", 29, 5.482041587901701, 2.9], "isController": false}, {"data": ["The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 31, 5.8601134215500945, 3.1], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1000, 529, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 302, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 68, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 31, "The operation lasted too long: It took 6 milliseconds, but should not have lasted longer than 1 milliseconds.", 29, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 18], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["EliminarJuegosSeleccionados", 100, 14, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 2 milliseconds.", 12, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 2 milliseconds.", 2, "", "", "", "", "", ""], "isController": false}, {"data": ["VerJuegosSeleccionados", 100, 43, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 38, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 5, "", "", "", "", "", ""], "isController": false}, {"data": ["VerVentaNuevos", 100, 80, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 56, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 16, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 5, "The operation lasted too long: It took 6 milliseconds, but should not have lasted longer than 1 milliseconds.", 2, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 1], "isController": false}, {"data": ["VerEstados", 100, 47, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 40, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 5, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, "The operation lasted too long: It took 6 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, "", ""], "isController": false}, {"data": ["VerCategorias", 100, 40, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 36, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 4, "", "", "", "", "", ""], "isController": false}, {"data": ["VerVentaUsados", 100, 81, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 52, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 21, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 4, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 2, "The operation lasted too long: It took 11 milliseconds, but should not have lasted longer than 1 milliseconds.", 1], "isController": false}, {"data": ["Login", 100, 22, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 3 milliseconds.", 13, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 3 milliseconds.", 6, "The operation lasted too long: It took 7 milliseconds, but should not have lasted longer than 3 milliseconds.", 3, "", "", "", ""], "isController": false}, {"data": ["VerDetalleProducto", 100, 51, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 37, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 11, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 2, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, "", ""], "isController": false}, {"data": ["VerJuegoDetalle", 100, 51, "The operation lasted too long: It took 2 milliseconds, but should not have lasted longer than 1 milliseconds.", 43, "The operation lasted too long: It took 3 milliseconds, but should not have lasted longer than 1 milliseconds.", 6, "The operation lasted too long: It took 7 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 1, "", ""], "isController": false}, {"data": ["Registrarse", 100, 100, "The operation lasted too long: It took 5 milliseconds, but should not have lasted longer than 1 milliseconds.", 26, "The operation lasted too long: It took 6 milliseconds, but should not have lasted longer than 1 milliseconds.", 25, "The operation lasted too long: It took 7 milliseconds, but should not have lasted longer than 1 milliseconds.", 16, "The operation lasted too long: It took 8 milliseconds, but should not have lasted longer than 1 milliseconds.", 11, "The operation lasted too long: It took 4 milliseconds, but should not have lasted longer than 1 milliseconds.", 6], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
