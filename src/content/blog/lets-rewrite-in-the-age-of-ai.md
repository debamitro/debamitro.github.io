---
title: "'Let's Rewrite It' in the Age of AI"
date: 2025-08-18T19:23:37-04:00
tags: ["ai", "rewrite", "engineering"]
---

I feel everybody who has been a software engineer for more than five years has hit a point where a bunch of people on the team feel that the entire codebase has become unmaintainable. I have always seen this happen on projects which are successful. That's right - the cleanest code I have ever worked on was a product which had zero customers!

This cry of 'let's rewrite it from scratch' keeps coming up again and again. I have seen this in action twice in my engineering career. Both times it was a disaster. The new codebase was never complete, and in the end it got abandoned. This is not surprising, because experts and giants in the industry have warned against it. The most famous article is probably [the one by Joel Spolsky](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/).

## Enter AI-assisted coding

As readers of this blog know, I have mostly been using AI for coding in the year 2025. Like many people I am suprised at how big a force multiplier this is. Yes, the code is not perfect, but you don't need to write all of it. You only tweak it, or throw it away and ask your AI coding tool to try harder. Or, move to a different AI coding tool.

## Let's rewrite with AI

So, is it possible to drastically rewrite entire codebases using AI coding tools? It sounds possible, but maybe I am wrong. In case this is possible, one of the use cases I can imagine is that of technical leaders and architects who sometimes have a sweeping vision of a new version of the entire codebase. Perhaps someone like that might come up with one or two new versions of a product just as a proof-of-concept. Without AI this would have taken several man years, and potentially many millions of dollars.

## Refactoring

A minuscule version of a rewrite is refactoring. 
The best definition of refactoring is from [Martin Fowler](https://martinfowler.com/books/refactoring.html):

> Refactoring is a controlled technique for improving the design of an existing code 
> base. Its essence is applying a series of small behavior-preserving transformations, 
> each of which “too small to be worth doing”. However the cumulative effect of each of 
> these transformations is quite significant. By doing them in small steps you reduce the 
> risk of introducing errors. You also avoid having the system broken while you are carrying 
> out the restructuring - which allows you to gradually refactor a system over an extended 
> period of time.

This is a very practical way of improving an existing codebase. It has been around for some time, and has been done in successful software products. The problem with refactoring is that it is much more tricky than it sounds. I have personally seen uncontrolled refactoring wreck software products and make them more unmaintainable than they ever were.

## AI-assisted refactoring

Safe and successful refactoring is a very boring and tedious task. Every step is a set of 'no-brainer' changes, usually done in a lot of places. Some of these could be changing a code snippet which has been almost identically copied around in many places. Others could be changes in the names of functions or classes. These changes are hard to review - they mostly look 'all right' and maybe one small bug might creep in.

Recently I saw one refactoring change done by an AI coding tool. It involved the replacement of a suffix present in a function name with another one. The 'Find and Replace' in your editor cannot do this, because you only want function names changed. An old-school refactoring tool would parse the entire codebase, make the changes and then print out the new version - which would be terrible to review as a diff with the old version. AI doesn't need to parse the code, it can understand code structure and patterns like human eyes and brains do. I was impressed by how cleanly and surgically the change was done.

So, does this show a path for rapid refactoring of codebases using AI? Seems very much possible to me. Imagine the amount of time a big company with [technical debt](https://en.wikipedia.org/wiki/Technical_debt) in their codebase can save by doing AI-assisted refactoring.

## The future

We should check what happens a year from now. Ideally AI should enable drastic improvements in existing software, and also make software maintenance much easier.