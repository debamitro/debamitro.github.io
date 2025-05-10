---
title: "Attempting to Vibe Code in Rust"
date: 2025-05-09T11:05:34-04:00
draft: false
tags: ["rust", "gmail cleaner", "ai", "llm", "windsurf", "gpui"]
---

It all started with a post on X I made, more than a month ago

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">is anybody doing vibe coding in rust?</p>&mdash; DebamitroChakraborti (@debamitro) <a href="https://twitter.com/debamitro/status/1905308219477545266?ref_src=twsrc%5Etfw">March 27, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Based on the responses, I knew I had to try it out. So I started looking for a project to do.

## The project

A few months ago, I had vibe coded a tiny [python project which classified Gmail messages by size](https://github.com/debamitro/gmail-size-classifier).
I decided to create a Rust version of it. I thought if I succeeded, it would be easier to distribute as a desktop application.

## Choice of UI framework

I tried out [iced](https://iced.rs) which both Cursor and Windsurf seemed to understand. 
I was actually surprised to see Rust vibe coding working out, even though I used a counter increment/decrement app for
the test drive. But after that I started some digging, and wanted to try out [gpui](https://www.gpui.rs).
I think I was inspired by [Zed](https://zed.dev) where this framework was born. And I liked its simplicity.

## Adventures with gpui

My first attempts to generate working gpui code using both Cursor and Windsurf were quite rough.
Nothing was compiling, and I had to correct almost all of the code in order to get going. Once the build succeeded, I didn't want to stop.
My UI needs were simple enough, and all I needed was a window with a button. Everything else was going to be done by a local http server.

The great thing about gpui is that if you know html and [tailwindcss](http://tailwindcss.com/) you can create gpui UIs.
There is only one building block, and it is called 'div()' for obvious reasons. Everything else is done by adding style classes.

## The server

This was the guts of the project. I am glad that I chose [rocket](https://rocket.rs) for this part.
Windsurf glided through this part with minimum issues. 

## And weeks passed

I kept going on with the project, falling into the rabbit hole of Rust aided by AI coding tools.
I should say that I was mostly finding out what code to write, and using AI help to fix build errors.
There were some things like [tokio](https://tokio.rs) and [rocket](https://rocket.rs) that I didn't need to think about - AI coding tools know them well.

## Current state of the project

Last week I managed to upload [a MacOS .dmg file](https://github.com/debamitro/gmail-size-classifier-rs/releases/tag/v0.1.0-beta) with the app to the [github repo](https://github.com/debamitro/gmail-size-classifier-rs).
It is open source, although I plan to upload pre-built Windows and Linux binaries as well, for ease of use.

## Conclusion

A few years ago I actively spent [6 weeks learning Rust](/blog/almost-6-weeks-of-rust). At that time I could compile a few lines of code after spending an entire day!
I used to tell people that if you want to become a philosopher go learn Rust. Fast forward to today, I am at least 3x more productive. I didn't learn any more Rust in these years - I didn't even touch it.
But I have the power of AI a.k.a. 'vibe coding'. And even though it is not an expert in Rust yet, it knows more than what I had learned in those 6 weeks.

