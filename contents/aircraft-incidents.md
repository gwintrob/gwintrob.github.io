---
title: Mayday! Mayday! Are airplanes getting more dangerous?
date: 2015-03-31
collection: articles
template: graph_article.jade
---

Modern airplane travel is spectacular.
The Department of Transportation [reported](http://www.rita.dot.gov/bts/press_releases/bts015_15) that an all-time high 848 million passengers flew in the U.S. in 2014.
And remarkably, all of those passengers survived.

With recent tragedies like the missing [Malaysia Airlines flight](http://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370) and [Germanwings crash](http://www.nytimes.com/interactive/2015/03/24/world/europe/germanwings-plane-crash-map.html), I wondered if airplane crashes are changing.
Although technology lowers the incidence of crashes, perhaps the few remaining incidents are increasingly catastrophic.
As dangerous situations become less likely, do they also become more fatal?
To answer this question, I gathered statistics from the [Bureau of Aircraft Accidents](http://www.baaa-acro.com/presentation/) and released the data on [GitHub](https://github.com/gwintrob/aircraft-incidents/).

Here's a look at some of the initial data for commercial flights.
Total aviation fatalities have been decreasing since 1976, especially in the US:

<h2 class="center">Total Fatalities</h2>
<div id="chart-fatalities" class="chart"></div>

This high level of safety is only possible with massive investments in safety and automation.
Thanks to more reliable engines and the latest autopilot systems, human error is the most common factor in airplane crashes.
My guess is that these errors make the remaining accidents more lethal.
Here's what I found about risk and safety in modern aviation.

### Potential Autopilot Dangers

By 1980, when cockpit automation was pervasive, researchers began to consider potential negative effects of autopilot (e.g. [PDF link](http://www.ise.ncsu.edu/nsf_itr/794B/papers/Wiener_Curry_1980_Ergo.pdf)).
Intuitively, autopilot creates additional challenges for pilots.
They can accidentally misconfigure the system, write off a legitimate problem as computer error, or incorrectly compensate beyond autopilot corrections.

Another potential challenge: if the vast majority of flight time is controlled via automation, then perhaps pilots have less experience handling real-world incidents.
A [2014 paper](http://hfs.sagepub.com/content/56/8/1506) examines how well pilots retained manual flying skills in a flight simulator.
The researchers find some issues with remaining focused on flight tasks without autopilot.
Although advanced autopilot may reduce problems in the cockpit, it might make pilots less prepared and accidents more severe.

### Analyzing Airplane Crashes

To understand whether or not planes are getting more dangerous, I focused on catastrophic accidents when all of the passengers and crew perish.
I expected a higher percentage of catastrophic accidents over time due to the increased usage of autopilot.
The data shows mixed results:

<h2 class="center">Accidents with no Survivors</h2>
<div id="chart-survivors" class="chart"></div>

From 1976 to 2011, the percentage of accidents with no survivors fell to a low of 14%.
More recently, catastrophic incidents increased dramatically: nearly 45% of commercial accidents in 2014 had no survivors.
Catastrophic crashes like [AirAsia 8501](http://en.wikipedia.org/wiki/Indonesia_AirAsia_Flight_8501), make up 9 of the 20 incidents in the dataset from 2014.
The upwards trend supports my hypothesis that aircraft accidents are increasingly fatal, but the causes range from bad weather to a Boeing&nbsp;777 [shot down over Ukraine](http://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_17).
Ultimately, fatal incidents are so rare that it's difficult to draw a conclusion.

Accidents with no survivors tend to stick out in our minds, but I also wanted to consider the overall plane crash fatality rate.
This graph shows the ratio of fatalities to passengers onboard the aircraft:

<h2 class="center">Accident Fatality Rate</h2>
<div id="chart-fatality-rate" class="chart"></div>

After hitting a low of 9% in 1990, the fatality rate has hit record highs in the past two years.
In 2014, 79% of passengers involved in aircraft incidents perished.
Like catastrophic crashes, the overall fatality rate is clearly trending downwards and 2014 may have been an outlier year.

###  Aviation Safety Data

Are airplanes getting more dangerous?
Absolutely not.
In 2014, there was one accident for every [4.4 million flights](http://www.iii.org/fact-statistic/aviation), the lowest rate in history.
This dataset shows that there might be a recent increase in accident fatality rate, but accidents are thankfully so rare that there's no clear trend.

Importantly, government organizations like the [FAA](http://www.ntsb.gov/investigations/AccidentReports/Pages/aviation.aspx) and [EASA](http://easa.europa.eu/newsroom-and-events/general-publications) generally release written reports on aviation incidents, rather than machine-readable data.
I encourage others to help standardize and analyze this data on [GitHub](https://github.com/gwintrob/aircraft-incidents).
Rigorously studying disasters makes everyone's lives safer.
