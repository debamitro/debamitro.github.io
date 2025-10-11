---
title: "How I Built My Own Tool for Disk Space Cleanup"
date: 2025-10-10T13:24:04-04:00
tags: ["rust", "ai", "llm"]
---

## Backstory

Some years ago in my last job, a lot of us used to exceed disk space quotas. Which sometimes meant getting an email from the IT department asking us to reduce the disk space we were using on a particular hard drive. I guess this is pretty common. I remember I used to wonder what would be a better way to find out what to delete. Of course the standard 'du -hsc' command was all you needed, if you were patient enough to wait for it to finish. Many times I was not.

This is how I found out about two excellent replacements for du

* [diskus](https://github.com/sharkdp/diskus)
* [dutree](https://github.com/nachoparker/dutree)

I managed to build both of them by downloading the sources, and they were pretty good. Both of these tools were written in Rust, which increased my respect for the Rust language. Eventually I spent [almost 6 weeks learning Rust](/blog/almost-6-weeks-of-rust/) during a temporary job break.

## What I dreamed of

I wanted a GUI-based program instead of command-line tools. I also wanted to get a 'quick and dirty' analysis. Instead of waiting to know everything, I wanted to delete a few things which would keep me comfortably below the quota.

## Initial attempts - 2022

My first attempt was in Rust. It was still [a command-line program](https://github.com/debamitro/biggest-files), written in Rust. It was not correct, or complete, but it did what I was looking for. However, I had no idea how to strap a GUI to it.

So I moved to C++ for the next attempt. I used wxWidgets and created [a simple GUI app](https://github.com/debamitro/du-gui). Like the previous one, it was far from perfect but did what I needed it to do. The real problem was distributing it from the machine where I built it to the one where I needed to use it. C++ distribution is notoriously hard, with umpteen versions of the C++ standard library installed on different machines.

I realized that I had to come back to Rust, and somehow figure out how to build GUIs with it.

## Enter Rust, and AI - 2025

This year I started using AI coding tools for all development tasks. After a few months of doing it, I got the itch to try out Rust GUI programming. After all, I'd need to command and AI would deliver! It turned out to be harder than I thought. There is [no clear winner yet in Rust GUI frameworks](https://areweguiyet.com), as far as I know. So I picked the latest framework I could find - GPUI. I had a hard time vibe coding in the framework - most probably because it was not used widely outside of the [Zed](https://zed.dev) project. I liked the potential of the framework - it had great multi-window support, and a layout system similar to HTML+Tailwind.

Eventually I had to move to something easier, and I chose [Iced](https://iced.rs). This framework was smaller, but had ready-made widgets and was already being used in a number of successful projects. LLMs were much more aware of this framework, and my journey was smoother.

## The tool

A few weeks ago I saw that I was running out of disk space on my new Mac Mini. I was actually happy about it - because I got an excuse to build and try out my disk cleanup tool.In a matter of 10 days, I built [the tool I had dreamed of three years ago](https://github.com/debamitro/du-gui-rs). I even used it to free up disk space on my Mac Mini. I am sure there are better tools for this purpose out there, but the joy of building a tool that solves your own problem is incomparable. The best thing about Rust is that you can use it for building truly cross-platform desktop applications. I built the Linux version of the tool from my Mac Mini, and I know how to build the Windows version too.

## Credits

Most of the code was written by [Grok Code Fast 1](https://x.ai/news/grok-code-fast-1) inside Windsurf. I am really happy with this code generation LLM - it is pretty good and very cheap. I had to come back to Claude Sonnet 4 for a bit - while upgrading my code from version 0.12.0 to version 0.13.0 of the Iced framework. And of course, I had to write a few lines here and there. Also, I had to help the LLMs a little bit with a local MCP server I had created. Maybe I'll write about that later on.