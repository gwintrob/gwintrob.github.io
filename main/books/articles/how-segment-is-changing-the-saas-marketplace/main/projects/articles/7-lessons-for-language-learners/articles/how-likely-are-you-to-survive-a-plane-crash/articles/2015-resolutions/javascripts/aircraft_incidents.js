var YEARS = ['Year', 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
var ALL_FATALITIES = ['Worldwide', 184, 690, 150, 45, 16, 6, 217, 61, 35, 135, 71, 318, 72, 193, 15, 232, 0, 72, 187, 62, 589, 82, 274, 277, 1, 18, 75, 102, 44, 375, 616, 143, 494, 610, 1024, 749, 724, 468, 1322, 258];
var US_FATALITIES = ['USA', 0, 63, 135, 1, 2, 0, 154, 10, 0, 32, 64, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 217, 0, 18, 0, 0, 0, 0, 0, 3, 37, 76, 53, 48, 43, 71, 41, 12];
var ALL_SURVIVOR_RATE = ['Worldwide', 0.816479401, 0.817073171, 0.850144092, 0.816513761, 0.830769231, 0.819852941, 0.802419355, 0.815899582, 0.819742489, 0.85440613, 0.844537815, 0.836363636, 0.868525896, 0.908745247, 0.892720307, 0.89958159, 0.883018868, 0.934545455, 0.922077922, 0.936090226, 0.891566265, 0.948275862, 0.942222222, 0.945701357, 0.948979592, 0.980952381, 0.959390863, 0.960199005, 0.971910112, 0.948453608, 0.921875, 0.928571429, 0.85106383, 0.73125, 0.691358025, 0.668831169, 0.593548387, 0.554744526, 0.525, 0.619047619];
var US_SURVIVOR_RATE = ['USA', 0.9875, 0.964285714, 0.959459459, 1, 0.957983193, 0.990825688, 0.931818182, 0.952941176, 0.987654321, 0.965811966, 0.959459459, 0.97826087, 0.987179487, 0.986666667, 0.98630137, 1, 1, 1, 0.959183673, 1, 0.982758621, 1, 1, 0.981481481, 0.980392157, 0.983606557, 0.982142857, 1, 1, 1, 1, 0.973684211, 0.815789474, 0.6875, 0.517241379, 0.651162791, 0.454545455, 0.424242424, 0.44, 0.4];

$(function () {
  c3.generate({
    bindto: '#chart-fatalities',
    data: {
      x: 'Year',
      columns: [
        YEARS,
        ALL_FATALITIES,
        US_FATALITIES
      ]
    },
    axis: {
      'Worldwide': {
        tick: {
          count: 8,
          format: d3.format('.2g')
        }
      }
    }
  });

  c3.generate({
    bindto: '#chart-survivors',
    data: {
      x: 'Year',
      columns: [
        YEARS,
        ALL_SURVIVOR_RATE,
        US_SURVIVOR_RATE
      ]
    },
  });
});