---
title: "RC for two days"
date: 2019-08-20T17:27:43-04:00
tags: [RC]
categories: [blog]
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

### Morning of August 21

I spent most of the time reading [Higher-Order Perl](https://hop.perl.plover.com) and tweaking my blog's layout using Hugo templates. The book is particularly heavy in ideas and I needed time to go through them in order to grasp what was being described.

### Afternoon of August 21

I learnt from Zulip that two Recursers had done something cool around MIDI and music synthesis. Since there is a digital piano in Turing I started wondering if I could connect it to my mac and somehow read the notes being played on it. I got to know of the [pretty-midi python library](http://craffel.github.io/pretty-midi/) but that didn't seem to be exactly what I wanted.

Further searching lead me to [portmidi](http://portmedia.sourceforge.net), a C library which seemed to be capable of everything around MIDI. I downloaded it and tried to build it. The cmake-based build didn't work so I went about compiling the relevant C files manually. This wasn't hard because my goal was to compile it once in whatever hacky way. After this I went searching for a USB-to-USB-C converter. Fortunately another Recurser lent me one, I connected the piano to my mac and ran one of the test programs .... and it worked! Notes played on the piano were showing up on the terminal as MIDI events. Some sample notes emitted by the program went into the piano and it was playing. I was really excited and showed this to someone.

After that I wrote a small program for myself which linked in the portmidi library and played a few notes on the piano. Since I forget stuff very fast I pushed it to [github](https://github.com/debamitro/portmiditest).

## The end

I think I can safely conclude that spending two days at the Recurse Center is very much worth it. A lot can happen here because the space is very conducive towards tinkering and programming. I guess it helps not to have any fixed plan -  that way you try to do what works and leave what does not. The definition of 'works' also stays flexible if you don't have a plan.