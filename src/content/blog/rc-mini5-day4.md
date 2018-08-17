---
title: "RC Mini 5 - Day 4"
date: 2018-08-16T09:37:15-04:00
---

(*My notes from the fourth day of RC Mini 5 batch*)

### 9:47 am
I started a bit late today, and got delayed by having to skip one subway train because it was soooo crowded. I am beginning to feel that although I have completed most of my work in Clojure, I haven't done _functional programming_ yet. I have not used any global state, and accomplished everything by calling a series of functions from other functions. I have used recursion a lot, even though Stu Halloway warns people against using it.

### 11:04 am
Finally I have my unit testing system ready. The way to get here was to have my core code in a .cljc file so that both the Clojure test and the ClojureScript app can see it.

### 12:07 pm
I have started using Atom for Clojure. I was using it for writing my blog posts since yesterday. I moved to it for code because my unit tests have Unicode characters and emacs doesn't show them well in terminal mode. Let's see how long I can use Atom - haven't switched to a new editing environment in years!

### 2:54 pm
Had a really nice post-lunch conversation about JavaScript virtual machines and other stuff. On the Atom front, I haven't given up yet. The fonts and editing experience are really nice. I was suspecting I would miss my emacs shortcuts but I haven't. I guess the reason may be most of my shortcuts are specific to C/C++ development. This might be a nice lesson for future me: when learning a new programming language try to use a new editor for that.

### 4:43 pm
Paired with someone here and learned how to use the "thread-first macro" operator in Clojure. It seems to be a neat way to write a series of function calls which need to happen in a pipeline-like manner. Previously I was calling  functions from other functions. So in order to ensure that function1 happened before function2, I would do (or think about doing) either of the following:
* call function2 with a call to function1 as the argument
* write function2 as an anonymous function which calls function1
* pass function2 as an argument to function1 and call it from inside

With the [-> operator](https://clojure.org/guides/threading_macros#thread-first) code is sooo much more readable now!

### 11:02 pm
The evening went by in presentations followed by a lot of conversations with different people. I need to find a way to cope with reality after RC, specially from next week!
