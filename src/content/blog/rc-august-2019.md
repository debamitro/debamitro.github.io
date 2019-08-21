---
title: "RC August 2019"
date: 2019-08-20T17:27:43-04:00
draft: true
tags: RC
categories: blog
---

After a lot of thought and planning I came down to RC for two days, alongwith a fellow Recurser from Boston.

## Recap

In 2018 I did a mini batch at RC and simply loved it! I did not like staying away from my nine-month-old son for five days, though. So I decided against doing another batch for a year or two.

## NGW 2019

I attended Never Graduate Week with my wife (a senior Recurser) and son and loved the experience! I began toying with the idea of coming down to RC for two days whenever possible. I didn't want to have any planned project because I felt I wouldn't be doing justice to it. Also I didn't want to lose out on the conversations and the random good things that happen in RC which don't happen in your daily life. I was lucky to get a companion in this plan of mine (who also happens to be the father of a very young baby).

## Back to now

Fast forward to August 20 and 21 2019, here's what I ended up doing. Nothing is a project - everything is a bit of programming that I did for fun.

### On the train (evening of August 19)

Tried to print Bengali letters as ASCII art in python. I could print two letters and it was one of the dumbest programs I have ever written. My companion taught me how to use the __future__ package in python and also a bit of numpy - I count these two as useful parts of this exercise.

### Morning of August 20

Fished out the source to my hugo-powered blog, and tried to learn how to add tags and categories. I never got to the point of using the tags though. Next, I installed mitmproxy and after a few hiccups succeeded in using it for web traffic from my iPhone. I could watch the HTTP requests coming from my iPhone from various apps. I don't know why three Facebook apps (Facebook, Messenger and Instagram) didn't work with the proxy. WhatsApp was working fine. I must have needed to something more. I think what I got going is good enough to watch the traffic from any apps I am curious about.

### Afternoon of August 20

I started writing a Swift script for using CLLocationManager to get the current location on my laptop. It wasn't working for a while and I was almost about to give up. I thought I needed some kind of permissions from my Mac and needed to use XCode. The [example](https://github.com/fulldecent/corelocationcli) I was following was done as a CLI project in XCode. Then I tried a slightly different location request (standard location service instead of significant-change location service) and it started working like a bang! I went ahead and use the CLGeocoder class to find out a name and address of the location, and sort of worked as well. Apple's developer documentation was very helpful and so was the [Swift site](https://www.swift.org). The result is at https://github.com/debamitro/small-examples/blob/master/location.swift .

### Evening of August 20

I went to [Localhost IX](https://www.recurse.com/events/localhost-lightning-talks-august-2019) after dinner and managed to reach when it was nearly half over. I bumped into other two Recursers I happen to know and had a happy time!