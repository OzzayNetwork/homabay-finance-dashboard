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
                    "name": "Suba",
                    "path": "M52,148,50,151,48,150,48,151,48,151,47,152,45,152,44,151,41,154,40,152,38,154,37,154,36,153,36,154,36,154,33,154,31,157,31,157,29,157,29,156,29,156,29,154,30,154,31,154,30,152,30,152,30,151,30,151,29,151,29,152,28,152,27,151,28,151,28,151,29,150,29,146,27,144,26,143,26,143,25,144,24,144,24,145,23,146,23,146,22,145,22,145,21,145,21,145,22,145,23,145,23,144,23,144,25,143,25,143,26,142,26,142,26,140,25,140L25,139L25,139,25,138,25,138,25,137,25,137,25,137,25,136,25,136,25,135,25,135,26,134,26,133,25,132,25,132,25,131,25,131,26,130,26,129,25,129L25,129L24,129,24,129,24,128,24,128,25,128,26,128,26,126,27,126,28,126,28,126,28,126,29,125,30,125,31,124,31,124,31,123,32,123,32,122,33,121,33,121,33,120,33,119,32,119,32,119,32,120L30,120L29,119,29,119,29,119,30,118,29,118,29,117,28,117,28,117,28,116,28,115,27,115,27,115,28,114,28,114,29,113,30,114,30,114,31,115,33,115,33,113,35,113,35,113,36,112,36,111,35,111,35,110,35,110,37,108,37,108,37,109,37,110,37,111,40,111,41,111,42,110,43,110,43,110,44,110,44,110,45,110,45,109,45,108,45,107,45,104,45,104,45,102,45,101,45,99,47,98,49,95,50,95,51,94,51,93,51,93,52,92,53,90L53,88L53,88,54,88,54,88,54,90,55,90,55,90,55,90,56,91,56,90,57,90,57,89,57,89,57,90,57,90,58,91,59,91,59,91L60,91L60,91,62,91,62,92,62,92,63,93,63,93,64,94,64,93,65,93,65,94,66,94,66,94,67,94,67,95,67,96,67,96,68,97,70,97,72,98,72,99,73,98,72,98L72,98L73,98,72,97,71,96,71,96,72,96,73,95,73,94,74,93,74,93,75,94L75,95L75,96,77,97,77,98,77,101,78,101,78,101,78,102,78,102L79,102L80,102,80,101,80,100,80,99,80,99,81,99,81,99,81,99,83,98,83,98,83,95,82,95,82,95,82,94,82,94,83,93,83,93L84,93L84,94,84,94,86,94,87,94L88,94L88,94,89,94,89,96,89,96,90,96L90,96L90,97,90,97,89,97,89,98,91,99,92,99,92,101,92,101,94,101L95,101L95,101,95,101,95,102,96,102,95,103,95,103,93,103,92,104,92,105,92,106,92,106,92,107,91,107,91,108,90,109,91,109,90,110,90,110,90,111,89,111,89,112,89,113,89,113,89,114,89,114,89,114,89,115,88,115,88,115,87,116,87,116,86,116,86,117,86,117,85,118,85,119,84,119,84,119,82,119,82,120,82,120,80,121,80,124,80,124,80,125,80,125,80,126,79,126,79,127,79,127,79,127,79,128,79,128,78,128,78,129,77,129,77,129,77,129,77,129,77,130,76,130,75,130,75,130,74,130,74,130,73,131,72,132,71,132,71,132,70,133,67,135,65,136,64,137,63,137,62,138,61,139,60,139,59,141,57,142,56,142,56,143,55,144,54,144,53,144,53,144,52,144,52,144,51,145,51,145L51,146L50,146L50,147L51,147,51,146,52,146,52,147,52,147L52,147zM57,76,56,78,55,81,55,82,55,84,55,85,53,86,53,87,53,87,52,87,52,87,51,87,51,87,50,87,49,88,49,89,48,90,47,90,46,91,46,91,45,91,43,90,42,89,41,89,41,89,41,89,41,90,40,90,40,90,39,90,38,90,37,88,37,88,37,87,37,87,37,86,38,86,38,86,39,86,41,86,41,86,43,84,44,84,44,83,45,83,45,82,45,81,44,81,44,80,45,79,47,80,47,80,47,80,48,81,48,81,49,81,49,81,50,81,51,81,51,82,51,82,52,83,53,83,54,82L54,81L54,81,54,81,54,80,54,77,55,77,55,77,55,76L56,76L56,75,57,75,57,76,57,76zM21,88,22,89,23,91,25,92,26,93,26,93,27,94,27,94,27,95,27,96,28,97,28,97,27,98,26,99,25,99,25,100,23,100,21,100L21,101L20,102,19,102,19,101,18,102,18,102,17,102,17,101,16,101,15,101,14,100,13,99L11,99L10,98,10,98,9,98,9,98,8,97,8,97,6,97L6,97L6,96,7,96,8,96,8,95,7,95,7,94,7,93,7,93,8,93L8,92L9,92,9,91,10,91,10,91,11,92,11,93,12,93,12,93,13,93,13,92,14,92,14,91,16,91,16,90,18,91,19,90,19,89,20,88,21,88zM31,108,31,107,31,107L31,106L31,105,32,106,32,106,33,106,32,107,33,107L33,107L33,108,32,108,32,108zM31,99,31,99,32,98,33,97,33,97,33,96,33,96,33,97,32,97,32,97,31,97,31,97,31,97,31,97,30,98,31,98,30,99,30,99,30,99z"
                  },
                  {
                    "id": "id1",
                    "name": "Rachuonyo",
                    "path": "M136,122,141,121,144,116,145,116,145,115,145,114,145,113,148,113,149,113,152,114,155,111,164,106,168,105,170,105,173,102,176,100,181,99,185,97,189,95,192,92,195,91,198,90,199,88,202,87,202,85,201,85,201,84,200,82,199,84,199,85,198,85,197,85,196,86,196,87,194,87,194,86,193,86,192,86,191,87,188,87,188,87,187,87,186,86,185,86,185,85,183,85,182,83,183,82,183,82,182,82,179,83,179,83,178,84,177,83,176,84,174,83,173,84L173,84L172,83,169,83,167,82,166,82,165,82,166,81,166,80,166,79,163,76,163,76,161,76,160,74,160,74,159,73,158,72,159,72,159,72,159,70,156,68,154,68,154,67,154,65,153,65,153,65,152,66,152,67,153,67,152,69,154,70,155,70,155,73,154,74,154,75,151,75,150,75,150,75,147,75,145,75,144,74,144,74,143,75,143,75,141,75,140,75,140,76,139,76,138,76,137,75,136,75,136,76,135,75,133,75,133,75,131,75,130,73L128,73L127,74,126,74,124,74,122,74,118,71,117,70,113,71,112,71,110,71,109,72,107,73,105,74,104,74,103,74,101,75,100,75,100,77,99,78,98,79,98,81,97,81,97,82,97,83,97,84,98,84,98,86,98,87,101,90,102,91,104,93,105,93,106,92,108,93,108,94,107,94,107,95,108,96,110,95,111,95,113,95,113,95,114,95,114,96,116,96,119,96,120,95,122,95,123,95,123,94,123,95,123,95,124,96,126,97,127,98,128,98,128,98,129,98,129,98,129,99,130,99,130,99,131,100,132,100,132,101,131,102,131,102,131,103L131,104L131,104L131,104L131,104,130,105,130,106,131,106,131,106,132,107,131,108,131,108,131,108,131,109,131,110,132,111,132,112,132,112,133,113,133,114,133,115,134,116,134,117,134,117,134,118L134,118L134,118,135,119,135,120,135,121,136,121z"
                  },
                  {
                    "id": "id2",
                    "name": "HomaBay",
                    "path": "M136,122,135,123,133,125,132,128,132,129,132,131,132,132,131,132,129,131,128,130,126,130,125,130L122,130L122,131,121,132,119,132,118,133,117,133,117,133,115,131,114,131,114,132,112,132,112,132,110,132,110,132,109,132,108,132,108,132,107,132,107,133,107,133,105,133,104,133,103,133,103,132,99,129,98,128,98,128,97,127,97,126,96,123,96,122L96,121L96,120,95,119,95,119,93,117,92,116,91,114,90,113,90,113,89,113,89,111,90,110,91,109,90,109,91,108,91,107,92,108,92,108,93,109,94,108,95,107,96,107,97,107,97,106,98,106,99,106,100,105,102,104,104,104L105,102L105,101L108,100,108,99,109,98,109,97,110,97,113,97,114,97,114,96,116,96,119,96,120,95,122,95,123,95,123,94,123,95,124,96,125,97,127,98,128,98,128,98,129,98,129,98,129,99,130,99,130,99,131,100,132,100,132,100,132,101,131,102,131,102,131,103L131,104L131,104L131,104L131,104,130,105,130,105,131,106,131,106,131,106,132,107,131,108,131,108,131,108,131,109,131,109,131,110,131,110,132,111,133,113,133,115,134,116,134,117,134,117L134,117L134,117,134,118,134,118,135,119,135,121,136,121z"
                  },
                  {
                    "id": "id3",
                    "name": "Ndhiwa",
                    "path": "M52,148L52,147L52,147,52,146,50,147L50,146L51,146L51,145L51,145,52,144,53,144,53,144,55,144,57,142,60,139,64,137,68,134,71,132,71,132,72,132,74,130,75,130,77,130,77,129,78,129,78,128,79,128,79,128,79,127,79,127,80,126,80,125,80,125,80,124,80,124,80,121,82,120,82,120,82,119,84,119,84,119,85,119,86,117,86,116,87,116,88,115,89,114,89,114,89,113,89,113,90,113,90,113,91,114,91,114,92,116,93,117,95,119,95,119,96,120,96,122,96,123,97,124,97,126,97,127,98,128,98,128,99,129,99,129,100,130,101,130,103,132,103,133,104,133,104,133,105,133,106,133,107,133,107,133,107,133,107,132,108,132,108,132,109,132,109,132,110,132,110,132,110,132,112,132,112,132,113,132,114,132,114,132,114,131,115,131,116,132,117,133,117,133,117,133,117,134,116,135,115,137,115,137,115,139,114,139,114,140,114,140,114,144,113,144,113,147,111,150,110,150,110,150,108,150L108,150L108,150,107,151,108,151,108,152,107,153,106,154,105,154,104,154,104,155,104,155,104,156,103,156,103,157,105,157,106,158,106,159,104,162,103,162,103,163,102,163,101,163,100,165,100,166,100,167,100,170,99,169,97,166,97,165,97,165,95,165,94,165,92,165,90,162,89,161,88,161,88,160,87,160,86,160,86,160,86,161,87,162,87,162,87,163,86,164,86,165,85,166,85,166,83,166,83,167L82,167L80,166,80,167L79,167L79,166,78,166,77,167,76,167L75,167L75,166,74,166,73,168,73,168,72,167,70,164,69,163,67,161,66,161,64,161,63,161,60,159,60,158,59,156,58,154,55,152,55,152,54,152,54,151,54,150,53,149z"
                  }
            ],
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
                    value: 3
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
