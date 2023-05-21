$(function () {

    // Initiate the chart
    $('#the-map-container').highcharts('Map', {
        series: [{
            animation: {
                duration: 1000
            },
            name: "Collected Revenue",
            colorByPoint: false,
            color: '#3b3b3b', // blue
            borderWidth: 1,
            borderColor: '#212327',
			borderColor: '#212327',
             dataLabels: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: 0,
                padding: 4,
//                color: '#a5a8ad',
                format: '{point.name}',
				 shadow: "none",
               
                style: {
                    textTransform: 'uppercase',
                    fontWeight: '500',
					fontFamily: '"Muli", sans-serif',
  					fontSize: '1rem'
                }
            },
			symbol:'circle',
			 marker: {
            symbol: 'square'
        },
    

            "type": "map",
            "joinBy": "id",
            "mapData": [
                {
                  "id": "id0",
                  "name": "Budalangi",
                  "path": "M82,156,90,147,98,147L102,147L102,148,107,148,109,149L109,149L110,149,111,149,111,151,112,151,112,151,112,151,112,152,113,152,112,153,112,154,111,153,111,154,111,154,110,154,110,154,110,154,110,154,109,155,109,155,109,156,109,157,109,157,109,158,108,158,108,159,108,159,108,159,108,159,108,160,108,161,108,161,107,162,107,162,107,163,107,163,105,172,104,174,103,176L88,176Z"
                },
                {
                  "id": "id1",
                  "name": "Funyula",
                  "path": "M90,147,98,135,99,134,99,134,99,133,100,132,101,132,100,131,101,131,101,131,101,130,101,130,102,130,102,130,103,130,104,129,104,127,104,127,104,126,105,126,105,126,105,125,105,125,105,125,105,125,105,124,106,124,106,124,106,124,107,123,106,121,107,121,107,122,107,121,107,121,109,122,109,121,109,121,109,121,110,121,110,121,110,120,111,120,111,120,113,118,114,117,114,116,114,116,114,115,114,115,115,116,115,116,115,115,116,115,116,115,117,115,117,115,118,115,118,116,118,116,118,116,118,116,119,117,119,117,119,117,119,117,119,117,119,117,120,118,120,118,121,118,121,118,122,119,122,119,123,120L123,120L124,121,124,121,124,121,125,121,125,122,125,122,125,122,125,123,125,123,126,123,126,123,126,123,126,123,126,123,126,124,125,124,125,124,125,125,125,125,123,125,123,125,123,126,123,126,123,127,122,129,122,129,121,129,121,130,121,130,121,131,120,131,120,132,120,132L120,132L120,133,119,133,119,133,119,133,118,133,118,134,118,134,117,134,116,134,116,135,116,139,116,139,116,140,116,140,115,140,115,142,115,142,115,143,115,143,115,143L114,143L114,144L115,144L115,144L115,144,115,145,115,149,116,149,116,150,116,150,116,150,116,150,116,151,115,152,115,152,115,152,114,154,114,153,114,153,114,152,114,152,114,152,113,152,113,152,113,152,112,152,112,151,112,151,111,151,111,149,110,149,109,149L109,149L107,148,102,148,102,147L98,147L96,147z"
                },
                {
                  "id": "id2",
                  "name": "Matayos",
                  "path": "M114,115,115,116,115,116,115,115,116,115,116,115,117,115,117,115,118,115,118,116,118,116,118,116,118,116,119,117,119,117,119,117,119,117,119,117,119,117,120,118,120,118,121,118,121,118,122,119,122,119,123,120L123,120L124,121,124,121,124,121,125,121,125,122,125,122,125,122,125,123,125,123,126,123,126,123,126,123,126,123,126,123,126,124,125,124,125,124,125,125,126,125,126,125L126,125L126,124,127,124,127,124,127,124,127,124,127,124,128,124,127,123,128,122,128,122,129,121,129,120,129,120,129,120,130,120,130,119,130,118,130,118,130,117,130,116,129,116,129,115,129,114,130,113,130,113,130,112L132,112L132,113,133,113,133,113,135,113,135,113,136,113,136,112,137,112,137,112,137,112,137,111,138,111,138,111,139,110,139,110,139,110,140,110,140,109,140,108,140,108L139,108L139,107,139,107,138,107,138,107,137,107,136,107,136,106,136,107,135,107,134,107,134,107,134,106,134,105,134,104,134,104,133,104,133,103,133,103,133,100,133,100,133,99,133,98,133,98,133,97L133,97L133,97,132,97,132,97,131,97,130,98,129,98,129,98,128,98,127,99,127,99,126,99,126,99L125,99L125,98,124,98,124,97,122,97,122,97,121,97,121,98,121,98,121,99,121,99L121,100L120,101,120,101,119,101,118,100,117,99,117,99L116,99L116,99,115,99,114,99,114,98,113,98,112,100,112,100,112,101,112,102,111,103,112,105,112,105,112,106,113,106,113,106,114,107,114,107,114,108,114,109,114,109,115,111,115,111,115,112,115,113,115,114,115,114,115,114,115,115z"
                },
                {
                  "id": "id3",
                  "name": "Butula",
                  "path": "M140,110,141,110,142,109,142,109,143,109,144,108,146,108L146,108L147,108,147,107,147,107,148,107,148,107,149,106,150,106,151,106,151,105,151,105,152,105,153,105,153,105L154,105L154,106,155,107,155,108,156,108,156,108,156,108,156,108,159,108,159,108,159,108,160,109,160,109,161,109,161,110,161,110,162,111,163,111,163,111,163,111,165,113,165,113,166,114,166,114,166,114,165,114,165,114,165,114,164,115,163,115,162,115,161,116,161,116,160,116,160,117,160,117,160,119,160,119,160,120,160,120L160,122L159,122,160,123,159,124,158,124,157,125,156,125,156,124,154,124,153,124,152,124,152,123L150,123L150,124,145,124,145,124,144,124,143,124,143,124,143,124,142,123,142,124L141,124L141,124,140,124,140,124,140,124,139,123L138,123L137,124,137,124,137,124,137,126,136,126,136,126,136,127L135,127L135,127,134,127,133,127,132,127,132,127,131,127,131,130,130,130,130,131,131,131,131,131,130,132,130,131,130,130,129,130,129,130,128,130,128,129,128,129,127,129,127,128,127,128,127,127,126,127,126,127,126,127,126,126,126,126,125,126,125,126,124,126,124,125,126,125,127,125,127,125,128,125,128,125L128,125L128,124,129,124,129,124,129,124,129,124,129,124,130,124,129,123,130,122,130,122,131,121,131,120,131,120,131,120,132,120,132,119,132,118,132,118,132,117,132,116,131,116,131,115,131,114,132,113,132,113,132,112L134,112L134,113,135,113,135,113,137,113,137,113,138,113,138,112,139,112,139,112,139,112,139,111,140,111,140,111,141,110,141,110,141,110z"
                },
                {
                  "id": "id4",
                  "name": "Nambale",
                  "path": "M131,97,131,96,132,96,132,95,132,95,133,94,134,95,135,94,135,93,136,92,136,92,137,92,138,92,143,92,143,94,143,94,142,94,142,94,142,95,143,95,143,96,144,95,144,95,145,95,145,95,146,94,146,93,147,92,147,91,148,90,149,90,149,90,150,89,151,89,151,89,152,88,153,87,153,86,154,85,154,85,154,84,153,84,153,83,153,83,153,82L153,82L153,81,154,81,154,80,152,80,150,79,150,79,149,77,149,77,149,76L149,76L149,76,149,75,149,75,150,74L150,74L151,75,151,75,151,75,152,76,152,76,152,76,155,76,155,76,155,76,155,75,156,76,156,75,158,75,157,76,158,77,158,79,158,79,159,80,159,80,158,81,158,81,158,82,158,82,158,83,157,83,158,84,158,84,159,85,160,86,160,86,161,87,161,87,162,88,162,89,162,89,163,90,164,91,164,92,164,92,163,93,162,93,161,93,161,93L161,93L160,94,160,95,160,96,161,97L161,97L161,98,161,99,160,99,160,100,159,99,158,99,158,99,158,99,158,100,157,100,157,101,157,101,157,102,157,103,156,103,155,104L154,104L154,104,154,105,153,105,153,105,152,105,151,105,151,105,151,106,150,106,149,106,148,107,148,107,147,107,147,107,147,108,146,108L146,108L144,108,143,109,142,109,142,109,141,110,140,110,140,109,140,108,140,108L139,108L139,107,139,107,138,107,138,107,137,107,136,107,136,106,136,107,134,107,134,107,134,106,134,105,134,104,133,104,133,103,133,103,133,100,133,100,133,99,133,98,133,98,133,97L133,97L133,97,132,97,132,97z"
                },
                {
                  "id": "id5",
                  "name": "Teso South",
                  "path": "M114,98,115,97,115,97,115,96,116,96,116,96,116,96,117,96,117,95,116,95L116,91L117,90,117,90L117,90L117,90,116,89,116,89,117,88,117,87,118,86,118,84,118,84,118,83,119,82,119,81,120,79,120,79,121,79,121,79,121,79,122,79,124,76,125,76,125,76L126,76L126,75,127,75,127,75,127,75,128,75,128,74,129,74,129,73,129,73,129,73,129,72,130,72,130,73,131,73,131,72,131,72,132,72,134,72,134,73,135,73,135,73,136,73,137,74,138,75,138,75,137,76,137,77,138,78,139,78,140,78,141,78,142,78,143,79,144,79,144,79,145,79,145,79,145,78,145,77,145,76,145,75,146,77,146,77,147,77,147,78,147,77,149,79,150,79,151,79,152,80,154,80,154,81,153,82L153,82L153,83,153,83,153,84,154,84,154,85,154,85,153,86,153,87,152,88,151,89,151,89,150,89,149,90,149,90,148,90,147,91,147,92,146,93,146,94,145,95,145,95,144,95,144,95,143,96,143,95,142,95,142,94,142,94,143,94,143,94,143,92,138,92,137,92,136,92,136,92,135,93,135,94,134,95,133,94,132,96,131,96,131,97,130,98,129,98,129,98,128,98,127,99,126,99,126,99L125,99L124,98,124,97,122,97,122,97,121,97,121,98,121,98,121,99,121,99L121,100L120,101,120,101,118,100,117,99,117,99L116,99L116,99,115,99,114,99z"
                },
                {
                  "id": "id6",
                  "name": "Teso North",
                  "path": "M133,72,132,72,133,71,134,71,134,72,135,72,135,72,135,72,135,72,136,72,136,71,137,71,137,71,138,72,138,71,139,71,139,71,140,71,140,70,141,70,141,70,142,70,142,69,143,69,143,66,143,66L143,65L142,65,142,64,142,64,142,63,143,63,144,63,145,63,145,63,146,62,146,62,147,61L148,61L148,61,148,60,148,59,148,58,147,56,148,56,148,55,147,56,147,54,148,54,148,53,148,53,148,52,148,51,148,51,148,50,149,50,149,50,150,50,150,49,152,49,152,49,153,49,153,48,155,48,155,48,156,48,157,48,157,48,157,49,159,49,159,48,160,48,160,49,160,50,161,50,161,50,161,51,162,51,162,51,163,51,164,50,165,50,166,51,166,51,167,51,167,51,167,52,167,52,167,53,168,53,168,53,168,53,168,56,168,56,168,56,167,56,167,56,166,56,166,56,166,56,165,57,165,56,165,56,165,56,165,57,164,57,164,56,164,56,164,56,163,56,163,57,163,57,164,58,164,59,164,60,164,60,165,61,165,61,165,62,165,62,165,62,164,63,164,63,164,63,164,64,164,65,165,65,165,66,165,66,165,67,164,67,164,67,163,68,163,68,162,68,161,68,161,69,161,69,160,69,160,70,160,70,160,71,159,72,159,72,159,72,159,75,159,75L159,75L158,75,156,75,156,76,155,75,155,76,155,76,155,76,152,76,152,76,152,76,151,75,151,75,151,75,150,74L150,74L149,75,149,75,149,76,149,76L149,76L149,77,149,77,150,79,150,79,151,79,150,79,149,79,147,77,147,78,147,77,146,77,146,77,145,75,145,76,145,77,145,78,145,79,145,79,144,79,144,79,143,79,142,78,141,78,140,78,139,78,138,78,137,77,137,76,138,75,138,75,136,73,135,73,135,73,134,73,134,72z"
                }
              ]
            ,
            data: [{
                    //Langata
                    "id": "id0",
                    "y": 0,
                    drilldown: 'langata',
                    value: 30890
                },
                {
                    //dagoreti south
                    "id": "id1",
                    "y": 1,
                    value: 6,
                    drilldown: 'dagoreti_south',
                    name: "Point2",
                },
                {
                    //kibra
                    "id": "id2",
                    "y": 2,
                    drilldown: 'kibra',
                    value: 252389
                },
                {
                    //dagoreti north
                    "id": "id3",
                    "y": 3,
                    value: 256488
                },
                {
                    //starehe
                    "id": "id4",
                    "y": 4,
                    value: 924656
                },
                {
                    //westlands
                    "id": "id5",
                    "y": 5,
                    value: 333
                },
                {
                    //embakasi south
                    "id": "id6",
                    "y": 6,
                    value: 3216
                },
                {
                    //makadara
                    "id": "id7",
                    "y": 7,
                    value: 23215
                },
                {
                    //embakasi west
                    "id": "id8",
                    "y": 8,
                    value: 1564962
                },
                {
                    //embakasi central
                    "id": "id9",
                    "y": 9,
                    value: 3165

                },
                {
                    //kamkunji
                    "id": "id10",
                    "y": 10,
                    value: 6216532
                },
                {
                    //embakasi north
                    "id": "id11",
                    "y": 11,
                    value: 56523
                },
                {
                    //embakasi east
                    "id": "id12",
                    "y": 12,
                    value: 132132
                },
                {
                    //kasarani
                    "id": "id13",
                    "y": 13,
                    value: 65413
                },
                {
                    //ruaraka 
                    "id": "id14",
                    "y": 14,
                    value: 656132
                },
                {
                    //mathare
                    "id": "id15",
                    "y": 15,
                    value: 321165
                },
                {
                    //roysambu
                    "id": "id16",
                    "y": 16,
                    value: 1632
                },
                {
                    //unmatched      
                    "id": "id18",
                    "y": 18,
                    value: 11365895
                },
                {
                    //langata
                    "id": "id19",
                    "y": 19,
                    value: 3090
                }
            ]
        }],
        drilldown: {
            chart: {
                backgroundColor: 'transparent',
                type: 'column'
          },
            series: [{
              type: 'bar',
              id: 'langata',
              name: 'langata',
              colorByPoint: true,
              data: [{
                name: '1st',
                y: 22,
                drilldown: 'dec1'
            },
            {
                name: '2nd',
                y: 22,
                drilldown: 'dec2'
            },
            {
                name: '3rd',
                y: 224,
                drilldown: 'dec3'
            },
            {
                name: '4th',
                y: 202,
                drilldown: 'dec3'
            },
            {
                name: '5th',
                y: 272,
                drilldown: 'dec5'
            },
            {
                name: '6th',
                y: 172,
                drilldown: 'dec6'
            }, {
                name: '7th',
                y: 122,
                drilldown: 'dec6'
            }, {
                name: '8th',
                y: 172,
                drilldown: 'dec8'
            }, {
                name: '9th',
                y: 105,
                drilldown: 'dec9'
            }, {
                name: '10th',
                y: 272,
                drilldown: 'dec10'
            }, {
                name: '11th',
                y: 272,
                drilldown: 'dec11'
            }, {
                name: '12th',
                y: 572,
                drilldown: 'dec12'
            }, {
                name: '13th',
                y: 72,
                drilldown: 'dec13'
            }, {
                name: '13th',
                y: 292,
                drilldown: 'dec13'
            }, {
                name: '14th',
                y: 472,
                drilldown: 'dec14'
            }, {
                name: '15th',
                y: 272,
                drilldown: 'dec15'
            }, {
                name: '16th',
                y: 394,
                drilldown: 'dec16'
            }, {
                name: '17th',
                y: 27,
                drilldown: 'dec17'
            }, {
                name: '18th',
                y: 372,
                drilldown: 'dec18'
            }, {
                name: '19th',
                y: 524,
                drilldown: 'dec19'
            }, {
                name: '20th',
                y: 564,
                drilldown: 'dec20'
            }, {
                name: '21st',
                y: 272,
                drilldown: 'dec21'
            }, {
                name: '22nd',
                y: 22,
                drilldown: 'dec22'
            }, {
                name: '23rd',
                y: 272,
                drilldown: 'dec23'
            }, {
                name: '24th',
                y: 272,
                drilldown: 'dec24'
            }, {
                name: '25th',
                y: 172,
                drilldown: 'dec25'
            }, {
                name: '26th',
                y: 272,
                drilldown: 'dec26'
            }, {
                name: '27th',
                y: 272,
                drilldown: 'dec27'
            }, {
                name: '28th',
                y: 452,
                drilldown: 'dec28'
            }, {
                name: '29th',
                y: 458,
                drilldown: 'dec29'
            }, {
                name: '30th',
                y: 226,
                drilldown: 'dec30'
            }, {
                name: '31st',
                y: 152,
                drilldown: 'dec31'
            }
              ]
            },{
              type: 'bar',
              id: 'dagoreti_south',
              name: 'dagoreti_south',
              colorByPoint: true,
              data: [
                ['Column1OC', 9],
                ['Column2OC', 1],
                ['Column3OC', 4]
              ]
            },{
              type: 'bar',
              name: 'kibra',
              id: 'kibra',
              colorByPoint: true,
              data: [
                ['Column1AF', 6],
                ['Column2AF', 6],
                ['Column3AF', 5]
              ]
            },{
              type: 'bar',
              name: 'Asia',
              colorByPoint: true,
              data: [
                ['Column1AS', 9],
                ['Column2AS', 1],
                ['Column3AS', 2]
              ]
            },{
              type: 'bar',
              name: 'North America',
              colorByPoint: true,
              data: [
                ['Column1NA', 9],
                ['Column2NA', 1],
                ['Column3NA', 9]
              ]
            },{
              type: 'bar',
              name: 'South America',
              colorByPoint: true,
              data: [
                ['Column1SA', 2],
                ['Column2SA', 9],
                ['Column3SA', 2]
              ]
            }]
          },
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: 'Collections By sub County',
            style: {
                color: '#a5a8ad',
				align: 'left'
            }
        },
        mapNavigation: {
            enabled: true,


        },
        colorAxis: {
            fill: 'red',
            min: 1,
            backgroundColor: 'red',
            type: 'logarithmic',
            minColor: '#3b3b3b',
            maxColor: '#45d21a',
            /* stops: [
                [0, '#3b3b3b'],
                [0.46, '#40802c'],
                [1, '#45d21a']
            ] */
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor: 'transparent',
            shadow: false

        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}; text-transform:ucapitalize;">{point.name}</span>: <b style="color:{point.color}">KES {point.value}</b><br/>',


        },

        /* navigation: {
          buttonOptions: {
            theme: {
              'stroke-width': 1,
              stroke: 'white',
              r: 0,
              states: {
                hover: {
                  fill: '#bada55'
                },
                select: {
                  stroke: '#039',
                  fill: '#bbadab'
                }
              }
            }
          }
        } */


    });

});

//setting todays date
var the_date =moment().format("MMMM Do YYYY");
	$('.map-date').text(the_date);

// button functions

// the financial year's data
$('#financial-year').click(function () {
	//getting financial year
	var this_year=moment().format("YYYY");
	var last_year=moment().subtract(1, 'year').format("YYYY");
	var next_year=moment().add(1, 'years').format("YYYY");
	var this_month=moment().format("MM");
	var this_month=parseInt(this_month);
	var fy=last_year+"/"+this_year;
	if(this_month>6){
		fy=this_year+"/"+next_year;
	}
	
	$('.map-date').text(fy+" Financial Year");
	 //changing color axis colors
	$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
        .colorAxis[0].update({
            min: 1,

            minColor: '#3b3b3b',
            maxColor: '#2e71ff'
        });
    var chart2 = $('#the-map-container').highcharts();
    //the data 
    chart2.series[0].update([{
            "id": "id0",
            "y": 0,
            value: 330
        },
        {
            //dagoreti south
            "id": "id1",
            "y": 1,
            value: 36,

        },
        {
            //kibra
            "id": "id2",
            "y": 2,
            value: 3252389
        },
        {
            //dagoreti north
            "id": "id3",
            "y": 3,
            value: 3256488
        },
        {
            //starehe
            "id": "id4",
            "y": 4,
            value: 3924656
        },
        {
            //westlands
            "id": "id5",
            "y": 5,
            value: 3333
        },
        {
            //embakasi south
            "id": "id6",
            "y": 6,
            value: 33216
        },
        {
            //makadara
            "id": "id7",
            "y": 7,
            value: 323215
        },
        {
            //embakasi west
            "id": "id8",
            "y": 8,
            value: 31564962
        },
        {
            //embakasi central
            "id": "id9",
            "y": 9,
            value: 33165

        },
        {
            //kamkunji
            "id": "id10",
            "y": 10,
            value: 36216532
        },
        {
            //embakasi north
            "id": "id11",
            "y": 11,
            value: 356523
        },
        {
            //embakasi east
            "id": "id12",
            "y": 12,
            value: 3132132
        },
        {
            //kasarani
            "id": "id13",
            "y": 13,
            value: 365413
        },
        {
            //ruaraka 
            "id": "id14",
            "y": 14,
            value: 656132
        },
        {
            //mathare
            "id": "id15",
            "y": 15,
            value: 321165
        },
        {
            //roysambu
            "id": "id16",
            "y": 16,
            value: 30000000
        },
        {
            //unmatched      
            "id": "id18",
            "y": 18,
            value: 300000
        },
        {
            //langata
            "id": "id19",
            "y": 19,
            value: 332568962
        }
    ]);
    $(this).attr('disabled', true).siblings().attr('disabled', false);
    $('#this-month').attr('disabled', false);
    $('#today').attr('disabled', false);
});

//monthly data for this month
$('#this-month').click(function () {
	
	//geting the date
	var the_date =moment().format("MMMM YYYY");
	$('.map-date').text(the_date);
	
    //changing color
	$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
        .colorAxis[0].update({
            min: 1,

            minColor: '#3b3b3b',
            maxColor: '#fdc502'
        });

    var chart2 = $('#the-map-container').highcharts();
    chart2.series[0].update([{
            "id": "id0",
            "y": 0,
            value: 230
        },
        {
            //dagoreti south
            "id": "id1",
            "y": 1,
            value: 26,
            name: "Point2",
        },
        {
            //kibra
            "id": "id2",
            "y": 2,
            value: 2252389
        },
        {
            //dagoreti north
            "id": "id3",
            "y": 3,
            value: 2256488
        },
        {
            //starehe
            "id": "id4",
            "y": 4,
            value: 2924656
        },
        {
            //westlands
            "id": "id5",
            "y": 5,
            value: 2333
        },
        {
            //embakasi south
            "id": "id6",
            "y": 6,
            value: 23216
        },
        {
            //makadara
            "id": "id7",
            "y": 7,
            value: 223215
        },
        {
            //embakasi west
            "id": "id8",
            "y": 8,
            value: 21564962
        },
        {
            //embakasi central
            "id": "id9",
            "y": 29,
            value: 23165

        },
        {
            //kamkunji
            "id": "id10",
            "y": 10,
            value: 26216532
        },
        {
            //embakasi north
            "id": "id11",
            "y": 11,
            value: 256523
        },
        {
            //embakasi east
            "id": "id12",
            "y": 12,
            value: 2132132
        },
        {
            //kasarani
            "id": "id13",
            "y": 13,
            value: 265413
        },
        {
            //ruaraka 
            "id": "id14",
            "y": 14,
            value: 2656132
        },
        {
            //mathare
            "id": "id15",
            "y": 15,
            value: 2321165
        },
        {
            //roysambu
            "id": "id16",
            "y": 16,
            value: 21632
        },
        {
            //unmatched      
            "id": "id18",
            "y": 18,
            value: 211365895
        },
        {
            //langata
            "id": "id19",
            "y": 19,
            value: 23
        }
    ]);
     $(this).attr('disabled', true).siblings().attr('disabled', false);
    $('#financial-year').attr('disabled', false);
    $('#today').attr('disabled', false);
});

//daily data for today
$('#today').click(function () {
	//geting the date
	var the_date =moment().format("MMMM Do YYYY");
	$('.map-date').text(the_date);
//	alert(the_date);
    //color change
	$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
        .colorAxis[0].update({
            min: 1,

            minColor: '#3b3b3b',
            maxColor: '#45d21a'
        });
    var chart2 = $('#the-map-container').highcharts();
    chart2.series[0].update([{
                "id": "id0",
                "y": 0,
                value: 30
            },
            {
                //dagoreti south
                "id": "id1",
                "y": 1,
                value: 6,
                name: "Point2",
            },
            {
                //kibra
                "id": "id2",
                "y": 2,
                value: 252389
            },
            {
                //dagoreti north
                "id": "id3",
                "y": 3,
                value: 256488
            },
            {
                //starehe
                "id": "id4",
                "y": 4,
                value: 924656
            },
            {
                //westlands
                "id": "id5",
                "y": 5,
                value: 333
            },
            {
                //embakasi south
                "id": "id6",
                "y": 6,
                value: 3216
            },
            {
                //makadara
                "id": "id7",
                "y": 7,
                value: 23215
            },
            {
                //embakasi west
                "id": "id8",
                "y": 8,
                value: 1564962
            },
            {
                //embakasi central
                "id": "id9",
                "y": 9,
                value: 3165

            },
            {
                //kamkunji
                "id": "id10",
                "y": 10,
                value: 6216532
            },
            {
                //embakasi north
                "id": "id11",
                "y": 11,
                value: 56523
            },
            {
                //embakasi east
                "id": "id12",
                "y": 12,
                value: 132132
            },
            {
                //kasarani
                "id": "id13",
                "y": 13,
                value: 65413
            },
            {
                //ruaraka 
                "id": "id14",
                "y": 14,
                value: 656132
            },
            {
                //mathare
                "id": "id15",
                "y": 15,
                value: 321165
            },
            {
                //roysambu
                "id": "id16",
                "y": 16,
                value: 1632
            },
            {
                //unmatched      
                "id": "id18",
                "y": 18,
                value: 11365895
            },
            {
                //langata
                "id": "id19",
                "y": 19,
                value: 3
            }
        ]

    );
     $(this).attr('disabled', true).siblings().attr('disabled', false);
    $('#financial-year').attr('disabled', false);
    $('#this-month').attr('disabled', false);
});

//this week
    $('#this-week').click(function() {
		//getting this weeks dates
		const today = moment();
		const otherday=moment()
		const too_date = otherday.endOf('week');	
		const from_date = today.startOf('week');			
		const the_date=from_date.format("MMMM Do YYYY")+' To '+too_date.format("MMMM Do YYYY");
		$('.map-date').text(the_date);
		
		
    //color change
		$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
            .colorAxis[0].update({
				min: 1,
				
				minColor: '#3b3b3b',
				maxColor: '#ea00d9'
			});
    		 var chart2 = $('#the-map-container').highcharts();
        chart2.series[0].update( [
      {
        "id": "id0",
        "y": 0,
        value: 30
      },
      {
        //dagoreti south
        "id": "id1",
        "y": 1,
        value: 6,
        name: "Point2",
      },
      {
      	//kibra
        "id": "id2",
        "y": 2,
        value: 2572389
      },
      {
      	//dagoreti north
        "id": "id3",
        "y": 3,
        value:2576488
      },
      {
      //starehe
        "id": "id4",
        "y": 4,
        value: 9274656
      },
      {
      	//westlands
        "id": "id5",
        "y": 5,
        value:3337776
      },
      {
      	//embakasi south
        "id": "id6",
        "y": 6,
        value:673216
      },
      {
      	//makadara
        "id": "id7",
        "y": 7,
        value: 2328715
      },
      {
      	//embakasi west
        "id": "id8",
        "y": 8,
        value:15564962
      },
      {
      	//embakasi central
        "id": "id9",
        "y": 9,
        value:3166785
        
      },
      {
      	//kamkunji
        "id": "id10",
        "y": 10,
        value:6216789532
      },
      {
      	//embakasi north
        "id": "id11",
        "y": 11,
        value:565423
      },
      {
      	//embakasi east
        "id": "id12",
        "y": 12,
        value:1325132
      },
      {
      	//kasarani
        "id": "id13",
        "y": 13,
        value:657413
      },
      {
      	//ruaraka 
        "id": "id14",
        "y": 14,
        value:6567132
      },
      {
      	//mathare
        "id": "id15",
        "y": 15,
        value:3271165
      },
      {
      	//roysambu
        "id": "id16",
        "y": 16,
        value:1789632
      },      
      {
      //unmatched      
        "id": "id18",
        "y": 18,
        value:11365895
      },
      {
      	//langata
        "id": "id19",
        "y": 19,
        value:78903
      }
    ]
        
        );
        $(this).attr('disabled', true).siblings().attr('disabled', false);
        $('#financial-year').attr('disabled', false);
         $('#this-month').attr('disabled', false);
    });
