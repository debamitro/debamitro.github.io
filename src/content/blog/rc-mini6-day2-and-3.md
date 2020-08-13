---
title: "Rc Mini 6 2020 Day2 and 3"
date: 2020-08-12T17:45:34-04:00
tags: ["RC", "Mini 6 2020"]
---

So now I am at the end of day 3 of this batch - which means more than half is over! A lot has happened that I want to write about, although I have made very little progress on the side projects I planned to work on. Like the previous post, I am organizing this one by theme.

## Interaction with Recursers

This is going really well - again, by my own standards. Yesterday I had a nice long chat with a fellow Recurser on build systems, C++ and PHP in the modern era. I also attended a group music listening session late in the night, and it was very therapeutic for me. As I realize time and again - music has a profound effect on my life.

## _The_ project

The project I am working on is [homesocial](https://github.com/debamitro/homesocial), as I mentioned before. I started this nearly a year ago and hadn't touched it beyond an initial proof-of-concept.

I spent Tuesday (day 2) simplifying the way the browser-based client finds the server. Instead of making the user specify the server's IP address during logging in, I used the URL from the request made to the client.

Today I added a timestamp to each post, and sorted the feed based on them. This took some time, because I was sending an integer from the client, and the server was finally writing a floating point number to the database. I finally found out that JavaScript's [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) method returns a value in _milliseconds_ which was going beyond 64 bits. Sqlite [stores an integer as a floating point number if it cannot fit into 64 bits](https://www.sqlite.org/datatype3.html#type_affinity). The simple solution was to send this to the database

```javascript
Math.round(Date.now() / 1000)
```
## Other work

### Building that Rust project

I finally succeeded in building [this Rust project](https://github.com/fabianschuiki/moore). The errors were due to a git submodule whose files weren't copied to my local repo. I didn't even know that something called a submodule existed - thankfuly the Git book [explained pretty well](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

### Pushing out a project to Heroku

I had been building a demo of a website for _browsing_ (not searching) Indian Classical music recordings on YouTube. While this is far from complete, I needed to make it visible since I wanted to demo it to a few people. It took me a while to figure out Heroku's use of the PORT environment variable, but after that it was quite easy to push.

### Trying to extract weather data

I got started on this idea which I had long ago, about organizing weather data by temperature and not by location. I am trying to see if the [NOAA's](https://www.ncei.noaa.gov/) CSV files can help me. They seem to be the best free option available.

## How I am feeling

For a large part of these two days I felt a bit guilty about enjoying my time in the batch like a vacation instead of treating it like a sprint. I think I managed to get over these feelings and start pushing myself. Some counseling from my wife definitely helped, and so did two hours of music last night! 