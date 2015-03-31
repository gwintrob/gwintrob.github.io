---
title: How likely are you to survive a plane crash?
date: 2015-03-31
collection: articles
template: graph_article.jade
---

Modern airplane travel is spectacular.
The Department of Transportation [reported](http://www.rita.dot.gov/bts/press_releases/bts015_15) that an all-time high 848.1 million passengers flew in the U.S. in 2014.
And remarkably, only 41 of these passengers were killed.

<h2 class="center">Total Fatalities</h2>
<div id="chart-fatalities" class="chart"></div>

This engineering feat is only possible thanks to massive investments in safety and automation.
Thanks to modern autopilot systems, human error is now the most common accident factor.
With modern tragedies like the missing [Malaysia air flight](http://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370) or [Germanwings crash](http://www.nytimes.com/interactive/2015/03/24/world/europe/germanwings-plane-crash-map.html), I wondered if airplane crashes are increasingly catastrophic.
As dangerous situations become less likely, do the few remaining accidents become more fatal?

To answer this question, I gathered statistics from the [Bureau of Aircraft Accidents](http://www.baaa-acro.com/presentation/) and released the data on [GitHub](https://github.com/gwintrob/aircraft-incidents/).
This graph shows the fraction of accidents with survivors over time:

<h2 class="center">Percent of Accidents with Survivors</h2>
<div id="chart-survivors" class="chart"></div>

The results are bleak.
Accidents with at least one survivor fell by 43% worldwide from 2007 to 2014.
And the numbers are even worse for the US.
97% of plane accidents had some survivors in 2007, but only 44% in 2014.

<h2 class="center">Percent of Accidents with Survivors</h2>
<div id="chart-fatality-rate" class="chart"></div>
