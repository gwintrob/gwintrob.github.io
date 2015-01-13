---
title: How Segment is Changing the SaaS Marketplace
date: 2015-01-15
collection: articles
template: graph_article.jade
---

Segment is a customer data hub that makes it ridiculously easy to send data to 3rd-party analytics and tracking tools.
Basically, you integrate Segment (through a JavaScript snippet, mobile SDK, or API) and then use their simple interface to manage how data flows to all of their [integrations](https://segment.com/integrations).

![Segment Integrations](images/segment_integrations.png)

This is brilliant for three reasons:

1. Segment defines a single clean API and you save engineering time from having to integrate individual tools.
2. You avoid lock-in and can experiment with new tools rapidly.
3. Through this customer data hub, Segment can combine the different tools in ways that weren't possible before.
   For example, they have a [SQL interface](https://segment.com/redshift) that lets you query all of your analytics data that was previously silo-ed with separate services.

Full disclosure - I'm close with the Segment team and they were customers of my company [StackLead](https://stacklead.com/).
Everything in this post uses public data.
I think they're poised to win with:
an [incredible team](http://www.forbes.com/pictures/mll45kfhf/calvin-french-owen-25-ian-storm-taylor-25-llya-volodarsky-24-peter-reinhardt-25/) with [serious fundraising](http://www.forbes.com/sites/benkepes/2014/10/08/segment-raises-15m-for-a-customer-data-hub/),
[serious](https://github.com/segmentio/analytics.js) [open-source](https://github.com/segmentio/myth) [contributions](https://github.com/segmentio/nightmare),
and a number of important enterprise-level customers like Nokia and Live Nation.

Below I break down Segment's penetration into funded startups and discuss how they're opening up a new SaaS distribution channel.

## Dataset

### Overview

For the initial dataset, I used the [Crunchbase Data Export](https://info.crunchbase.com/about/crunchbase-data-exports/) from December 2, 2014.
I filtered this data down to the 20,186 companies that have raised more than $1m USD in funding and are still operating.

Across this set of companies, there were 895 distinct trackers (e.g. analytics tools, web bugs, and ad pixels).
You can use a tool like [Ghostery](https://www.ghostery.com) to manually view the trackers on a site you're browsing.
On average, each company used 3 trackers.

### Countries and Regions

The company dataset is very US-focused, with 17% based in the SF Bay Area.
You can deselect the "Other" label to drill down into the most common regions.

<div id="country-chart" class="chart">
</div>

<div id="region-chart" class="chart">
</div>

### Popular Trackers and Segment

Here is the number of companies for each of the top 10 customer data trackers, along with the percentage of those companies that use Segment.
These are all free tools that provide ads or mobile install attribution.
Google Analytics dominates - nearly 13,000 companies (63% of the dataset) use the popular service, which is free for up to [huge limits](https://support.google.com/analytics/answer/1070983).
Only 224 companies in this group (2%) are also Segment customers.

<div id="popular-chart1" class="chart">
</div>

The next 10 most popular trackers include a number of paid analytics and marketing automation products.
Two datapoints jump out:
1. **Marketo**: Only 2% of Marketo customers also use Segment.
Marketo, a public company worth about $1.4 billion, sells enterprise-grade marketing automation software.
Companies that use Marketo are willing to a premium and Segment will need to continue expanding its enterprise offering to compete for their analytics spend.
2. **Mixpanel**: Mixpanel is an advanced analytics platform that lots of startups love (and recently raised a [$65 million Series B](http://techcrunch.com/2014/12/18/mixpanel-raises-65-million/)).
Segment has a solid 17% penetration with their customer base.

<div id="popular-chart2" class="chart">
</div>

### Drilling down by Market

The next chart shows data for the top 5 markets, representing 47% of the companies in the dataset.
The datapoints are sorted based on the average number of trackers used by the companies in each market.

<div id="market-chart" class="chart">
</div>

We see an interesting correlation: as the number of trackers per company website decreases, Segment's penetration in the market also goes down.
This makes sense - Segment's basic value proposition appeals to companies that don't want to waste engineering effort on integrating trackers.

### Drilling down by Funding

Here's a breakdown of the number of companies in the dataset by amount of funding.
Although the percentages are small, Segment's greatest customer gains will come from companies that have raised $3-5m and $11-13m.

<div id="funding-chart" class="chart">
</div>

### How Segment is Changing the SaaS Marketplace

Segment's biggest impact is unprecedented distribution for new analytics tools and trackers.
For companies like [Customer.io](http://customer.io/) and [Amplitude](https://amplitude.com/), two thirds of their customers in the dataset are also Segment users.
This chart shows the trackers with the highest percentage of customers using Segment:

<div id="changing-chart" class="chart">
</div>

Previously, integration pains were a huge barrier for new SaaS products to gain traction.
Segment is well-positioned to solve this problem and make it extremely easy for businesses (from startups to large enterprises) to mix and match their ideal customer data setup.
