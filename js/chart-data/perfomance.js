Highcharts.chart('perfomance', {
    chart: {
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: 'Revenue Collections performance',
		style: {
            color: '#a5a8ad'
        }
    },
    subtitle: {
        text: 'Comparisons between this year, last year and the current target collections',
		style: {
            color: '#a5a8ad'
        }
    },
	 legend: {
        enabled: true,
        backgroundColor: 'transparent',
		 color: '#a5a8ad',
		  itemStyle: {
//                 fontSize:'35px',
//                 font: '35pt Trebuchet MS, Verdana, sans-serif',
                 color: '#a5a8ad'
              },
              itemHoverStyle: {
                 color: 'white'
              },
              itemHiddenStyle: {
                 color: '#444'
              },
        style: {
            color: '#a5a8ad',

        }
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Collections in (KES)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>KES {point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Last FY',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'Current Target',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    },{
        name: 'This FY',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, ]
});