var URL = "http://dati.lazio.it/catalog/api/action/datastore_search?resource_id=4f0fb401-43c2-45ab-a884-8bd543c34cf1&limit=3"
var months = ['GENNAIO', 'FEBBRAIO', 'MARZO', 'APRILE', 'MAGGIO', 'GIUGNO', 'LUGLIO', 'AGOSTO', 'SETTEMBRE', 'OTTOBRE', 'NOVEMBRE', 'DICEMBRE']

var material;

$.getJSON(URL, function (data) {
    // console.log(data);

    TESTER = document.getElementById('tester');
    Plotly.plot(TESTER, data.result.records.map(function (el) {
        return {
            x: months,
            y: months.map(function (month) {
                return parseInt(el[month] || "0");
            }),
            mode: 'lines',
            connectgaps: true,
            name: el.MATERIALE,
            line: {
                shape: 'spline',
                width: 3,
            },
        };
    }), {
        margin: {
            t: 30
        }
    });
});
