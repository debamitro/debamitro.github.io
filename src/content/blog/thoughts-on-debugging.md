---
title: "Thoughts on Debugging, over the years"
date: 2021-03-03T15:49:00-05:00
tags: ["debugging","future"]
---

I used to *love* debugging. The tougher the problem, the better I felt after finding out the answer. In my day job I happen to work in a product that has been continuously developed over the last 25 years or so. Anything that has seen so much change is bound to have complex internals, and this one is no exception. There was a time when I would spend days and nights chasing a very hard problem. I would invent all kinds of tricks to find out what I needed. Just like solving a good mystery there is no formula for debugging. Every case is unique in its own way. I felt I was lucky to keep getting such cases regularly for years. Whenever I found out the reason behind and the solution to a bug I would have an 'Eureka!!!' moment that would motivate me to keep debugging the next unsolved problem.

## Winds of change

Over the years, my attitude started changing. I started realizing that debugging is one part of programming, but there is *so* much more. I also started becoming conscious of how much time I spend and how it decreases the amount of time I have for better things. This [blog post by Scott Hanselman](https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes), for example, influenced me. Should I really keep swimming in existing bugs just because I was having fun? Or should I create new software and try to minimize the time spent in other tasks?

## More questions

I also started thinking about how to create software useful for general human beings. Something that requires frequent troubleshooting will always be restricted to expert users. The next generation of programmers needs to build upon the software we are writing today. And progress is faster when you are not stuck in fixing the past. I tried to think about the most useful software programs or libraries I have used. What was common to them? How were they constructed? How can I construct such software?

## It is not only the code

I noticed that most of the software tools that I use extensively - for example, emacs, the C and C++ programming languages, the gdb debugger have one thing in common. They have very good documentation - be it in the form of manuals, or helpful messages, or books, or internet blog posts. All of these tools and systems have shortcomings. For example, in some ways the C programming language leads to error-prone programming - because it allows way too much freedom. However 'The C Programming Language' by Kernighan and Ritchie was such a great guide to the language it has been pretty easy to use for decades.

## How to reduce debugging

So my new goal is to do less and less debugging of existing code. For example, last week I had to debug a pretty hard problem at work and I could do it in a day only because of a [reversible debugger](https://rr-project.org) available to me. Even then it took time. After finding out the relatively simple solution I started thinking about how I can avoid doing such things.

I think it is becoming more and more important to describe how existing code works. The more clearly we understand existing code the less we have to debug it. I think our understanding of existing code needs to be as good as our understanding of, let's say - newtonian mechanics. We should be able to describe every tiny detail and explain it from first principles. The next generation of programmers will need to deal with many decades of existing code. Now is the time to create new teachers who can explain code so well that the next programmers can easily take big leaps forward. I think this is an opportunity for people from all disciplines. There is a global 'learn to code' movement going on, about which I have no comment. I wish there is a 'learn to explain code' movement as well someday. That, I hope, will reduce the need to spend time debugging software.
