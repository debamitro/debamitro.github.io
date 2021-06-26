---
title: "Impressions of Rust 2020 - part I"
date: 2021-06-26T14:00:56-04:00
tags: ["rust", "programming languages"]
---

Learning a new programming language is always a nice way to kick your brain into action. I first experienced this when I tried to learn Lisp by watching some video lectures. It took me months to digest the concepts and I never got around to writing any lisp. But the ideas stayed with me for years. Later on [I did learn Clojure](https://debamitro.github.io/blog/how-i-got-into-clojure) and spend some months writing a bit of Clojure and ClojureScript. All this while I had been hearing about Rust and silently ignoring it.

I think I had been ignoring Rust because I write C/C++ for close-to-system products for my day job. I thought I was already wrestling with a systems programming language so why bother dabbling with the latest one. Years ago I had invested time into learning [D](https://dlang.org), and then left it alone even though it was very promising. Whenever I needed to write new code for a command-line application I could easily use C++. And that seemed sufficient.

## First interesting Rust project

The first project I saw which had me say 'whoa, Rust can be used like _this_' was [Moore](https://github.com/fabianschuiki/moore). It is a compiler for Verilog and SystemVerilog. Having worked in similar proprietary products all my career I know how big and complex these are. I know the challenges of developing large C/C++ products with multiple engineers. Here was something almost as big written by very few people using a completely new systems programming language. I was used to see systems programming languages shine in small low-level tools, and become unwieldy in large products. Rust seemed quite different.

## Getting into Rust

I started reading about Rust, and listening to the [New Rustacean](https://newrustacean.com) podcast. This [episode](https://newrustacean.com/show_notes/e026/index.html) about how Rust took some functional programming ideas and implemented them in a systems programming style gave me insights into the design of Rust. I also looked into the documentation on the website and it was very nice. I always felt that the best software system was the most well-documented one.
I also noticed that everything about Rust was designed for codebase scalability. Every programmming language gets stress tested when it is used at scale. Rust has things like

* a [package manager](https://doc.rust-lang.org/cargo/)
* a system for creating modules
* a [documentation generator](https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html)
* a code formatter

All out of the box. These are very useful features for large projects. And such features are still lacking in widely-used languages like C and C++.

## Trying to write Rust

I'll describe this in an upcoming blog post
