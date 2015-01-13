COUNTRY_CHART_THRESHOLD = 0.025;
REGION_CHART_THRESHOLD = 0.025;
AGGREGATE_KEY = 'segment-data-agg';

function getPieChartData(data, threshold) {
  var keys = Object.keys(data);
  var total = 0;
  keys.forEach(function (key) {
    total += data[key];
  });

  var chartData = {Other: 0};
  keys.forEach(function (key) {
    var val = data[key];
    if (key === '') {
      chartData.Unknown = val;
    } else {
      if (val / total > threshold) {
        chartData[key] = val;
      } else {
        chartData.Other += val;
      }
    }
  });

  return chartData;
}

function getTopChartData(data, n, sortFn) {
  var allTrackers = [];
  for (var key in data) {
    allTrackers.push([key, data[key]]);
  }

  allTrackers.sort(sortFn);

  var trackers = allTrackers.slice(0, n);
  return [
    trackers.map(function (tracker) {
      return tracker[0];
    }),
    trackers.map(function (tracker) {
      return tracker[1].total;
    }),
    trackers.map(function (tracker) {
      return tracker[1].segmentRatio;
    })
  ];
}

function plotPopularCharts(popularData1, popularData2) {
  var popularChart1 = c3.generate({
    bindto: '#popular-chart1',
    size: {
      height: 480
    },
    data: {
      columns: [
        popularData1[1],
        popularData1[2]
      ],
      type: 'bar',
      axes: {
        'Companies': 'y',
        'Segment Penetration': 'y2'
      },
      types: {
        'Segment Penetration': 'line'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: popularData1[0],
        tick: {
          rotate: 45,
          multiline: false
        },
        height: 130
      },
      y: {
        max: 14000,
        min: 1000,
        padding: {
          top: 0, bottom: 0
        },
        tick: {
          count: 5
        }
      },
      y2: {
        show: true,
        max: 0.1,
        min: 0,
        padding: {
          top: 0,
          bottom: 0
        },
        tick: {
          format: d3.format('%'),
          count: 6
        }
      }
    }
  });

  var popularChart2 = c3.generate({
    bindto: '#popular-chart2',
    size: {
      height: 480
    },
    data: {
      columns: [
        popularData2[1],
        popularData2[2]
      ],
      type: 'bar',
      axes: {
        'Companies': 'y',
        'Segment Penetration': 'y2'
      },
      types: {
        'Segment Penetration': 'line'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: popularData2[0],
        tick: {
          rotate: 45,
          multiline: false
        },
        height: 130
      },
      y: {
        max: 1300,
        min: 400,
        padding: {
          top: 0, bottom: 0
        },
        tick: {
          count: 5
        }
      },
      y2: {
        show: true,
        max: 0.2,
        min: 0,
        padding: {
          top: 0,
          bottom: 0
        },
        tick: {
          format: d3.format('%'),
          count: 6
        }
      }
    }
  });
}

function getMarketChartData(data, n) {
  var allTrackers = [];
  for (var key in data) {
    if (key !== '') {
      allTrackers.push([key.trim(), data[key]]);
    }
  }

  allTrackers.sort(function (tracker1, tracker2) {
    return tracker2[1].total - tracker1[1].total;
  });

  var trackers = allTrackers.slice(0, n);
  trackers.sort(function (tracker1, tracker2) {
    return tracker2[1].averageCount - tracker1[1].averageCount;
  });
  return [
    trackers.map(function (tracker) {
      return tracker[0];
    }),
    trackers.map(function (tracker) {
      return tracker[1].averageCount;
    }),
    trackers.map(function (tracker) {
      return tracker[1].segmentRatio;
    })
  ];
}

function plotMarketChart(marketData) {
  var marketChart = c3.generate({
    bindto: '#market-chart',
    size: {
      height: 480
    },
    data: {
      columns: [
        marketData[1],
        marketData[2]
      ],
      type: 'line',
      axes: {
        'Tracker Count': 'y',
        'Segment Penetration': 'y2'
      },
    },
    axis: {
      x: {
        type: 'category',
        categories: marketData[0],
        tick: {
          rotate: 55,
          multiline: false
        },
        height: 150
      },
      y: {
        max: 7,
        min: 0,
        padding: {
          top: 0, bottom: 0
        },
        tick: {
          count: 8,
          format: d3.format('.2g')
        }
      },
      y2: {
        show: true,
        tick: {
          format: d3.format('.2p')
        }
      }
    }
  });
}

function getFundingChartData(data) {
  var chartData = [[], [], []];

  for (var key in data) {
    var stats = data[key];
    chartData[0].push(key);
    chartData[1].push(stats.total);
    chartData[2].push(stats.segmentRatio);
  }

  return chartData;
}

function plotFundingChart(fundingData) {
  var popularChart1 = c3.generate({
    bindto: '#funding-chart',
    size: {
      height: 480
    },
    data: {
      columns: [
        fundingData[1],
        fundingData[2]
      ],
      type: 'bar',
      axes: {
        'Companies': 'y',
        'Segment Penetration': 'y2'
      },
      types: {
        'Segment Penetration': 'line'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: fundingData[0].map(
          function (x) { return d3.format('$')(x) + 'm'; }
        )
      },
      y: {
        max: 6000,
        min: 0,
        padding: {
          top: 0, bottom: 0
        },
        tick: {
          count: 7
        }
      },
      y2: {
        show: true,
        max: 0.02,
        min: 0,
        padding: {
          top: 0,
          bottom: 0
        },
        tick: {
          format: d3.format('.2p'),
          count: 5
        }
      }
    }
  });
}

function plotChangingChart(changingData) {
  var changingChart = c3.generate({
    bindto: '#changing-chart',
    size: {
      height: 480
    },
    data: {
      columns: [
        changingData[1],
        changingData[2]
      ],
      type: 'bar',
      axes: {
        'Companies': 'y',
        'Segment Penetration': 'y2'
      },
      types: {
        'Segment Penetration': 'line'
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: changingData[0],
        tick: {
          rotate: 45,
          multiline: false
        },
        height: 80
      },
      y: {
        max: 100,
        min: 0,
        padding: {
          top: 0, bottom: 0
        },
        tick: {
          count: 6
        }
      },
      y2: {
        show: true,
        max: 0.8,
        min: 0.2,
        padding: {
          top: 0,
          bottom: 0
        },
        tick: {
          format: d3.format('%'),
          count: 4
        }
      }
    }
  });
}

$(function () {
  var countryData = aggregate_data.allCompanies.countries;
  var regionData = aggregate_data.allCompanies.regions;
  var allStats = aggregate_data.allCompanies.allStats;
  var marketStats = aggregate_data.markets;
  var fundingStats = aggregate_data.funding;
  delete allStats[AGGREGATE_KEY];

  var countryChart = c3.generate({
    bindto: '#country-chart',
    data: {
      json: getPieChartData(countryData, COUNTRY_CHART_THRESHOLD),
      type : 'pie',
    }
  });

  var regionChart = c3.generate({
    bindto: '#region-chart',
    data: {
      json: getPieChartData(regionData, REGION_CHART_THRESHOLD),
      type : 'pie',
    }
  });

  var popularSortFn = function (tracker1, tracker2) {
    return tracker2[1].total - tracker1[1].total;
  };
  var popularData = getTopChartData(allStats, 20, popularSortFn);
  var popularData1 = popularData.map(function (data) { return data.slice(0, 10); });
  popularData1[1].unshift('Companies');
  popularData1[2].unshift('Segment Penetration');
  var popularData2 = popularData.map(function (data) { return data.slice(10, 20); });
  popularData2[1].unshift('Companies');
  popularData2[2].unshift('Segment Penetration');
  plotPopularCharts(popularData1, popularData2);

  var marketData = getMarketChartData(marketStats, 10);
  marketData[1].unshift('Tracker Count');
  marketData[2].unshift('Segment Penetration');
  plotMarketChart(marketData);

  var fundingData = getFundingChartData(fundingStats);
  fundingData[1].unshift('Companies');
  fundingData[2].unshift('Segment Penetration');
  plotFundingChart(fundingData);

  var changingStats = {};
  for (var tracker in allStats) {
    var stat = allStats[tracker];
    if (tracker != 'Segment.io' && stat.total > 10)
      changingStats[tracker] = stat;
  }
  var changingSortFn = function (tracker1, tracker2) {
    return tracker2[1].segmentRatio - tracker1[1].segmentRatio;
  };
  var changingData = getTopChartData(changingStats, 10, changingSortFn);
  changingData[1].unshift('Companies');
  changingData[2].unshift('Segment Penetration');
  plotChangingChart(changingData);
});