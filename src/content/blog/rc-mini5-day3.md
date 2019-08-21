---
title: "RC Mini 5 - Day 3"
date: 2018-08-15T08:15:43-04:00
tags: RC
categories: blog
---

(*My notes from the third day of RC Mini 5 batch*)

### 8:19 am
I have been reading The Joy of Clojure everyday. I need to find ways to improve my Clojure code. So far I have succeeded in avoiding loops by using recursion. I haven't been able to operate on lists as a whole yet, and neither have I been able to use things like the continuation-passing-style. I can't use something 'foo' unless the code stares at me in the face and says "this is the place to try out foo". I think I need to re-read the portions of the book I read last night, and also re-read my code.

Looking back at my time at RC till now I have spent most of it in Clojure. And I have been loving my journey. It will be good if I can figure out how to do some general-purpose tasks in Clojure, e.g., reading files, collecting data, making HTTP requests etc.

### 11:52 am
I had to take a light nap on the bean bag at around 9 o'clock - I think today will be a low-energy day. It was bound to happen after the way I have been super excited and super working for the last two days. I read Stuart Halloway's book a bit, and then had a long discussion with someone who is working on visualizing functional programming. She gave me some good ideas for simplify my Clojure code. Talking to her I also realized some directions in which I should go with my code.

Someone else suggested using Parinfer with Atom as my editing environment. Maybe I'll try that out someday.

### 2:53 am
I just saw some awesome use of css and even more mind-blowing use of p5.js! The results are interactive visualizations which work in the browser. I need to get back to Clojure-ing after feelings checkin.

### 6:16 pm
I am just back from a conversation about parallel programming in different languages. It would be good to understand how Clojure helps a programmer launch parallel jobs. Someday!

### 7:00 pm
I packaged my work into a demo which I have added to http://debamitro.github.io/generate-bangla-utf8-cljs-demo/. I just checked that "hu^ko mukho hyA;lA bArhi tAr bA;lA" does get converted to "হুঁকো মুখো হ্যাংলা বাড়ি তার বাংলা". I have also started simplifying my code.

### 11:15 pm
I tried my application with a string consisting of 10000 repetitions of "hAhA". It took a long time but didn't overflow the stack. I have not been able to use tail call recursion yet. I have been trying to. I have, however, succeeded in using some functions to generate other functions. And I hope to be able to shrink my code some more.
