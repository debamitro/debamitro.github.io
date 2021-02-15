---
title: "Joel Test for 2021"
date: 2021-02-15T11:27:55-05:00
tags: ["programming","software quality"]
---

The [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) is quite famous and has inspired many programmers and organizations over the last two decades. I was highly impressed by it when I read it more than a decade ago. Nowadays I tend to think that it needs to be revised. I am not alone. If you search for 'joel test' on your search engine you'll probably see a handful of posts which try to describe a modified version of the test as appropriate for a more recent year (the original test was published in 2000).

## Modifications to Joel's version

Here it goes. I am going to pick each of the old questions and then give my version.

### 1. Do you use source control?

<a name="newq1"></a>
In 2021 this question is probably redundant. Every software development organization is using some kind of version control system. The important question now is whether engineers know how to use version control effectively. Every system comes with some features and some shortcomings. Today's programmer needs to know the best way to use any given version control system.

**New version: Do programmers know how to use your version control system effectively?**

### 2. Can you make a build in one step?

This is still relevant and I am keeping it as-is.

### 3. Do you make daily builds?

<a name="newq3"></a>
This is relevant as well, because most organizations do this but maybe not all do. The frequency doesn't need to be daily any more - it should multiple times in a day. It is ideal to build after every checkin, but I feel it is more important to use the automated builds properly. Figuring out the culprit checkin for a newly-introduced bug should be automated, and this should use automated buidls.

**New version: Do you use automated builds for finding the root causes of defects?**

### 4. Do you have a bug database?

<a name="newq4"></a>
This has become redundant as well. What is less common, I feel, is the ability to manage the bug database to bring down the number of bugs. Using a bug database to keep recording the bugs and solving a small fraction of them is not going to help anyone. If the majority of unsolved bugs are irrelevant then they should be deleted. A bug database should be like a to-do list - it should be manageable and help you reduce bugs.

**New version: Are you using a bug database to keep the number of bugs low?**

### 5. Do you fix bugs before writing new code?

<a name="newq5"></a>
This is a tricky one and I feel it cannot be the same for all organizations all the time. In today's world a lot of software is not used for critical tasks. New features and changes need to roll out quickly and some errors are acceptable. Think of social media - if your timeline is not refreshing immediately it is a bit irritating but not dangerous. On the other hand, software is increasingly being used for critical tasks like performing surgery or driving vehicles. In such cases even a small error can take a human life. So this question needs to be a bit more flexible.

**New version: Do you know when to prioritize fixing bugs over writing new code, and vice versa?**

### 6. Do you have an up-to-date schedule?

This question is still relevant. I am not modifying it at all.

### 7. Do you have a spec?

This question is still relevant as well. The definition of spec should be flexible. For some tasks the spec can be a single line, for others it will be much longer.

### 8. Do programmers have quiet working conditions?

This is also pretty much relevant.

### 9. Do you use the best tools money can buy?

I am striking this question out from my list, because I no longer believe that the best tools produce the best craftsmen. As of 2021 we have quite a lot of good software development tools, but we don't always have the people who can use them and be productive.

### 10. Do you have testers?

<a name="newq9"></a>
This is important, but needs to be slightly modified. In 2021 manual testing is incomplete, and automated testing is a must. At the same time the need for testers has not totally gone away. Somewhere a bunch of human beings need to create and maintain the automated tests so that meaningful testing is happening. It is also okay not to have dedicated testers - developers can play this role as well.

**New version: Do you have testers who use automated testing?**

### 11. Do new candidates write code during their interview?

This is still very important, perhaps even more than before. I am keeping this one

### 12. Do you do hallway usability testing?

I don't think this is very relevant for all kinds of programming or for all kinds of products.

## New questions in my version

### <a name="newq11"></a> 1. Do you have effective developer documentation?

In 2021, software development is like 'standing on the shoulders of giants'. Every programming task I have seen involves using a ton of code which has already been written and used by others. Sometimes the existing code is present in the current project. At other times it is part of packages which you need to use. Unless you have good developer documentation programmers will do one of the following:

* Reinvent the wheel again and again
* Write code that needs increasing amounts of refactoring
* Debug or reverse engineer existing code

This is wasteful in today's age when software updates are rolled out in a matter of hours or days. The absence of effective developer documentation also makes life difficult for new engineers on a team.

### <a name="newq12"></a> 2. Do programmers have the judgement to choose the right tool/approach?

Today a lot of programming tasks have multiple possible solutions. For example, you might have multiple APIs to choose from, or multiple software packages. A lot of software in today's world has multiple parts, and the same change can be performed in more than one place. Today's programmer needs to have excellent judgement to decide the course of action every day. At times you do need to come up with the best new algorithm, but mostly you need to choose an existing algorithm or an implementation of it from a bunch of candidates. Programmers need to be aware of the consequences of their choices before they act.

## The full list

1. [Do programmers know how to use your version control system effectively?](#newq1)
2. Can you make a build in one step?
3. [Do you use automated builds for finding the root causes of defects?](#newq3)
4. [Are you using a bug database to keep the number of bugs low?](#newq4)
5. [Do you know when to prioritize fixing bugs over writing new code, and vice versa?](#newq5)
6. Do you have an up-to-date schedule?
7. Do you have a spec?
8. Do programmers have quiet working conditions?
9. [Do you have testers who use automated testing?](#newq9)
10. Do new candidates write code during their interview?
11. [Do you have effective developer documentation?](#newq11)
12. [Do programmers have the judgement to choose the right tool/approach?](#newq12)
