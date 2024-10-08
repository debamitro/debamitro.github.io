---
title: "(Almost) 6 weeks of Rust"
date: 2021-12-10T14:57:27-05:00
tags: ["RC","rust","programming languages","audio"]
---

I spent most of my working hours in the last six weeks learning about and using the [Rust programming language](https://www.rust-lang.org). Here is an account of that. No, I am still nothing more than a beginner in Rust.

## The opportunity

I could spend this time in this fashion by being in a remote batch at the [Recurse Center](https://www.recurse.com) (also known as RC). I learnt a lot by myself, but only because I had the opportunity to chat and pair with other programmers. As I have proably written before, RC is a great ecosystem for learning anything related to programming.

## Starting off with a parser

I had learnt that Rust is a good language for writing parsers. Which was one of the reasons why I started [a small Rust project](https://github.com/debamitro/c-introspect-rs) last year which needed a parser for a subset of C. In the initial week or two I got that project off the ground, and eventually [managed to handle all the headers in /usr/include](https://debamitro.github.io/blog/programmatic-access-of-c-structures).

## A fun spinoff project

I learned about [National Novel Generation Month](https://github.com/NaNoGenMo/2021) from other people in RC, and one day before Thanksgiving I decided to participate in it. I used my c-introspect-rs library to generate a 'novel' about the structs defined in the C headers on my laptop. Perhaps robots of the future would appreciate my [generated novel](https://github.com/debamitro/StructNovel2021/blob/main/novel.md) some day.

## Reading the code for Servo

[Servo](https://www.servo.org) is an experimental browser enginer written in Rust. Some of its parts are used in Mozilla Firefox. I didn't end up doing anything more than building this project and reading the source code. The build process consumes way too much memory - I could build it only when nothing else was running on my Mac. Reading the code was instructive - this was by far the biggest Rust codebase I have seen. It might be the biggest software codebase I have seen outside of my day job. I find a lot of things to learn from large codebases, and the Servo code demonstrates how good an ecosystem Rust has for handling massive amounts of code.

## Using cpal, and investigating CoreAudio

I got to know about a Coursera course on Audio Signal Processing, and decided to do the assignments in Rust. I never did them in any language, but I got my hands dirty with the [cpal library](https://github.com/RustAudio/cpal/). Somehow I spent a long time investigating why I was not getting 44100 audio samples per second when I had requested a 44100 Hz sampling rate. In order to locate the bug, I used the portaudio library written in C and found that it was getting every single sample. Both of these libraries were relying on CoreAudio for the heavy-lifting. My unproved hypothesis is that portaudio does something extra which cpal does not. I ended up reading the source code of portaudio, as well as that of cpal and coreaudio-rs (which cpal depends upon). I also posted in developer mailing lists for portaudio and cpal. Probably I was falling down a rabbit hole, but it was educational all the time.

## Using tokio

Next, I wanted to do write some kind of server with Rust. I followed the example in the [Rust book](https://doc.rust-lang.org/book/ch20-01-single-threaded.html) and created a single-threaded http server which served an MP3 file. For testing the server I used another static web page with an HTML5 audio tag. This was working fine as long I opened one browser tab. [Tokio](https://tokio.rs) sounded like the latest and greatest Rust library for asynchronous programming, so I decided to use it to make my server handle concurrent requests. It took me a few days to wrap my head around asynchronous programming. Once it was done I could open multiple browser tabs at the same time and play the same audio file (an old MP3 version of [this track ](https://www.youtube.com/watch?v=Y7YGwpLt_Ec)). I wish I can do something more with this library.

## Trying out nannou

[Nannou](https://nannou.cc) is a creative coding framework in Rust. Having participated in a couple of creative coding sessions in my batch, I thought of trying this out. It took me a while to get past a build error in the wgpu-hal crate. Adding the following line in my Cargo.toml solved the issue

```toml
resolver = "2"
```

I don't know the details, it seems cargo changed the way it looks up dependent crates. Or something close to that.

Once the build was done, I did manage to play around with it and draw animated triangles and lines. The feedback loop was longer than doing something in the browser, so I was not really impressed by this framework. Perhaps it is suited for bigger creative projects which are slow in the browser.

## Some fun with cpal

In the last day or two, I used cpal to record and replay audio, after 'tampering' with the audio samples. Without knowing any audio signal processing techniques, I did random things like skip every n samples (or replace them with something else). It was fun to play with sound samples and make my voice sound weird and metallic. This reminds me to get back to the Audio Signal Processing class on Coursera. Maybe next week I'll do that.

## What did I learn

I didn't follow any course on Rust - somehow I feel more inclined towards picking different projects. 'Learning by doing' is my motto. I think this strategy did work for me as far as learning Rust goes. Here are the things I learned about Rust:

* The borrow-checker's personality - everything I did exposed me to something that offended him/her
* Declarative macros - I used this in c-introspect-rs
* Listing directories in the filesystem - I used this in the NaNoGenMo2021 project
* Arc (atomic reference-counted 'pointers') and atomic types - I needed these for the cpal work
* Producer-consumer channels - I used [std::sync::mpsc::channel](https://doc.rust-lang.org/stable/std/sync/mpsc/fn.channel.html) for recording and replaying audio samples
* Async/await - I needed these in order to use tokio

## Goals for the future

Do I want to continue spending time learning Rust? I guess the answer is still yes. So that's my goal, finding out the next opportunity to implement something in Rust. I wonder what it is going to be!
