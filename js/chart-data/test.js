$(function() {
    var geoj = Highcharts.maps['custom/world-continents'],
      cities = [{
        name: 'London',
        continent: 'Europe',
        lat: 51.507222,
        lon: -0.1275
      }, {
        name: 'Sydney',
        continent: 'Oceania',
        lat: -33.8688,
        lon: 151.2093
      }, {
        name: 'Johannesburg',
        continent: 'Africa',
        lat: -26.2041,
        lon: 28.0473
      }, {
        name: 'Morocco',
        continent: 'Africa',
        lat: 31.7917,
        lon: 7.0926
      }, {
        name: 'Tokyo',
        continent: 'Asia',
        lat: 35.6895,
        lon: 139.6917
      }, {
        name: 'New York',
        continent: 'North America',
        lat: 40.7128,
        lon: -74.0059
      }, {
        name: 'Los Angeles',
        continent: 'North America',
        lat: 34.0522,
        lon: -118.2437
      }, {
        name: 'Bogota',
        continent: 'South America',
        lat: 4.7110,
        lon: -74.0721
      }],
      data = [{
        code: 'eu',
        drilldown: 'europe',
        value: 0
      }, {
        code: 'oc',
        drilldown: 'oceania',
        value: 1
      }, {
        code: 'af',
        drilldown: 'africa',
        value: 2
      }, {
        code: 'as',
        drilldown: 'asia',
        value: 3
      }, {
        code: 'na',
        drilldown: 'north-america',
        value: 4
      }, {
        code: 'sa',
        drilldown: 'south-america',
        value: 5
      }];
  
    $('#container').highcharts('Map', {
      chart: {
        events: {
          drilldown: function(e) {
            if (!e.seriesOptions) {
              var chart = this,
                mapKey = 'custom/' + e.point.drilldown,
                drilldowns = {
                  'Europe': {
                    type: 'bar',
                    name: 'Europe',
                    colorByPoint: true,
                    data: [
                      ['Column1EU', 5],
                      ['Column2EU', 7],
                      ['Column3EU', 2]
                    ]
                  },
                  'Oceania': {
                    type: 'bar',
                    name: 'Oceania',
                    colorByPoint: true,
                    data: [
                      ['Column1OC', 9],
                      ['Column2OC', 1],
                      ['Column3OC', 4]
                    ]
                  },
                  'Africa': {
                    type: 'bar',
                    name: 'Africa',
                    colorByPoint: true,
                    data: [
                      ['Column1AF', 6],
                      ['Column2AF', 6],
                      ['Column3AF', 5]
                    ]
                  },
                  'Asia': {
                    type: 'bar',
                    name: 'Asia',
                    colorByPoint: true,
                    data: [
                      ['Column1AS', 9],
                      ['Column2AS', 1],
                      ['Column3AS', 2]
                    ]
                  },
                  'North America': {
                    type: 'bar',
                    name: 'North America',
                    colorByPoint: true,
                    data: [
                      ['Column1NA', 9],
                      ['Column2NA', 1],
                      ['Column3NA', 9]
                    ]
                  },
                  'South America': {
                    type: 'bar',
                    name: 'South America',
                    colorByPoint: true,
                    data: [
                      ['Column1SA', 2],
                      ['Column2SA', 9],
                      ['Column3SA', 2]
                    ]
                  }
                },
                series = drilldowns[e.point.name],
                name = e.point.name;
  
              chart.addSeriesAsDrilldown(e.point, series);
              chart.update({
                chart: {
                  type: 'column',
                  inverted: true,
                  animation: false
                },
                title: {
                  text: name
                },
                xAxis: [{
                  visible: true
                }],
                yAxis: [{
                  visible: true,
                  reversed: false
                }]
              });
            }
  
            this.setTitle(null, {
              text: e.point.name
            });
          },
          drillupall: function() {
            this.update({
              chart: {
                type: 'map',
                inverted: false,
                animation: false
              },
              title: {
                text: 'World'
              },
              xAxis: [{
                visible: false
              }],
              yAxis: [{
                visible: false,
                reversed: true
              }]
            });
          }
        }
      },
      title: {
        text: 'World'
      },
      subtitle: {
        text: 'USA',
        floating: true,
        align: 'right',
        y: 50,
        style: {
          fontSize: '16px'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      mapNavigation: {
        enabled: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      plotOptions: {
        map: {
          states: {
            hover: {
              color: '#EEDD66'
            }
          }
        }
      },
      series: [{
        name: 'World',
        data: data,
        mapData: geoj,
        joinBy: ['hc-key', 'code'],
        dataLabels: {
          enabled: true,
          allowOverlap: true,
          formatter: function() {
            return this.point.code.toUpperCase();
          }
        }
      }, {
        name: 'Cities',
        type: 'mappoint',
        marker: {
          symbol: 'square',
          fillColor: 'black'
        },
        data: cities
      }],
      drilldown: {
        animation: false,
        activeDataLabelStyle: {
          color: '#FFFFFF',
          textDecoration: 'none',
          textShadow: '0 0 3px #000000'
        },
        drillUpButton: {
          relativeTo: 'spacingBox',
          position: {
            x: 0,
            y: 60
          }
        }
      }
    });
  });
  