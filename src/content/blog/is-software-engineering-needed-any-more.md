---
title: "Is Software Engineering Needed Any More?"
date: 2026-05-15T12:16:49-04:00
tags: ["ai", "software engineering"]
---

I was pretty optimistic about the future of software engineering [five months ago](/blog/predictions-about-software-engineering-in-the-age-of-ai-i/), and I still am. Despite my involvement with AI and agents and what not. Here I try to document some examples that justify my optimism.

## AI coding requires a lot of non-LLM work

The first talk I ever saw on AI coding was before Cursor or Claude Code or any tool we know today came out. It was given by [Emery Berger](https://www.emeryberger.com) at CppCon 2023, and titled 'Powered by AI: A Cambrian Explosion for C++ Software Development Tools'. There is a demo of an early version of [ChatDBG](https://github.com/plasma-umass/ChatDBG) in the talk, and then [at around 18:45](https://youtu.be/w7tYe-xTrPw?si=EWj1CiYU59bSb3Ep&t=1100) he says '... there's a lot of engineering that went on to make this work ...'. Mind you, Prof Berger is not to be taken lightly - he is famous for authoring a [memory manager](https://dl.acm.org/doi/10.1145/378993.379232) which eventually made it into MacOS. If he says that a small tool needs much more than calling an OpenAI endpoint, imagine what the likes of Cursor look like under the hood.

## Look at the most revolutionary AI tools

The most revolutionary tools in the AI landscape which came out in the last twelve months are: Claude Code, OpenClaw and now [Hermes Agent](https://hermes-agent.nousresearch.com). All of them are, technically, 'neuro-symbolic' tools. They engage one or more neural networks in the form of LLMs. But they make sure that the boring, predictable parts of any task are handled by plain old software, a.k.a. symbolic computing. Gary Marcus is the torchbearer of this line of thinking, and [has explained this again](https://garymarcus.substack.com/p/the-biggest-advance-in-ai-since-the) for the nth time.

Claude Code showed us that filesystem access and tool calling need to go hand-in-hand with LLMs. It was a lot of software engineering. OpenClaw showed us that if someone (like Peter Steinberger) does the 'boring job' of connecting all our cloud-based tools to Claude Code, and also runs it in a loop forever, then we get autonomous AI agents. A ton of engineering, made easier by Claude Code. But it isn't the end of software. OpenClaw lacked stability and ease of use - and Hermes Agent shines in both. Better engineering of the same concept.

## The Karpathian software stack

I have [explained this earlier](/blog/karpathian-classification-of-software/). The gist is that what we know as agentic AI is software 3.0. It runs on top of a combination of software 2.0 a.k.a. LLMs and software 1.0 a.k.a. plain old software. In any pyramid the base is the largest part. There is no way we are going to move forward without building and maintaining a ton of software.

## Summary - what ships?

The best conclusion I can draw is from André Balleyguier's talk at [ODSC East 2026](https://odsc.ai). He was gracious enough to accept my request for his slides, and I am going to use one. For those who don't know André leads Applied AI for EMEA at a company called [Anthropic](https://www.anthropic.com) :-). He used it to describe how successful agentic AI looks like. I am using it to remind everyone that there is a large amount of good old software in the agentic AI universe we are entering.

![boring ships image](/images/andre-antrhopic-boring-ships.png)


