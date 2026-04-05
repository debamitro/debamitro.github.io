---
title: "Coding With My Own AI Coding Agent"
date: 2026-04-05T15:34:03-04:00
draft: true
tags: ["software engineering","ai","agent"]
---

Around two months ago, I had created a new AI coding agent using another AI coding agent. The results surprised me so much that I had written [a post about it](/blog/creating-a-coding-agent-with-a-coding-agent/). As I had written, I have no intention of continuing to do this. Because there are excellent and mature AI coding agents in the market today. But I kept on improving it until I reached a point where I can use it on existing projects.
Here are some notes from this journey.

## The guts of an AI coding agent

The guts for my AI coding agent are two loops. Here is the 'outer' loop.

```
   ┌─────────────────────────────┐
   │ Ask for the user's prompt   │ ◄──────────────┐───────┐
   └─────────────────────────────┘                │       │
               │                                  │       │
               │                                  │       │
               │                                  │       │
               ▼                                  │       │
   ┌───────────────────────────────┐     ┌─────────────┐  │
   │ Does the user want an answer  │ NO  │             │  │
   │        from the LLM?          │────▶│ Do what the │  │
   └───────────────────────────────┘     │  user says  │  │
               │                         └─────────────┘  │
               │ YES                                      │
               │                                          │
               ▼                                          │
   ┌──────────────────────┐                               │
   │  Do the 'inner' loop │ ───────────────────────────-──┘
   └──────────────────────┘
```

And here is the 'inner' loop

```
   ┌─────────────────────────────────────────────┐
   │ Send user's prompt, system prompt, and      │◄────────┐
   │        the conversation to the LLM          │         |
   └─────────────────────────────────────────────┘         |
                       │                                   |
                       ▼                                   |
   ┌─────────────────────────────────────────────┐         |
   │     Get the LLM's response and print it     │         |
   └─────────────────────────────────────────────┘         |
                       │                                   |
                       ▼                                   |
   ┌─────────────────────────────────────────────┐      NO |
   │           Check for tool calls              │─────────────> exit the loop
   └─────────────────────────────────────────────┘         |
                       │                                   |
                       │                                   |
                       │ YES                               |
                       │                                   |   
                       ▼                                   |   
   ┌─────────────────────────────────────────────┐         |
   │           Execute all tool calls            │         |
   └─────────────────────────────────────────────┘         |
                       │                                   |
                       ▼                                   |
   ┌─────────────────────────────────────────────┐         |
   │ Add tool call requests and responses to     │─────────┘
   │           the conversation                  │
   └─────────────────────────────────────────────┘
```

You can see this in detail in the [source code on my github repo](https://github.com/debamitro/one-shot-cli-agent/blob/main/src/main.rs).
I didn't arrive at this structure, because the first version of the project was AI-generated. It looks reasonable to me, and I am happy to describe it. 

## The system prompt

Initially my coding agent had some bugs and was not displaying true intelligence even if I used Claude Sonnet as the LLM. For a while [I was guessing that I needed to give a detailed system prompt, otherwise my agent would never behave like Claude Code](https://bsky.app/profile/debamitro.bsky.social/post/3mfsihlywfs2n). I tried various system prompts and got some improvements. Later on, as my agent became more stable I saw those differences disappear. Until one day - when they were back! 

My current belief is that a system prompt tailored to the current project and task is going to give you the best result. Even without the system prompt you may get good results - probably because of some caching at the LLM provider's end

## The acid test

As I was tweaking and fixing the coding agent, I kept on using it for developing the agent itself. Finally a few weeks ago, it passed the test and managed to do one of the changes in [this commit](https://github.com/debamitro/one-shot-cli-agent/commit/7617033ece234ff0befd11040d9940923f504b39) using the agent.

## More fun

Two days ago, I used my coding agent for working on a project which I had started with Claude Code. This was sort of ['double vibe coding'](https://x.com/debamitro/status/2039362192244425012?s=20) for me. I used GLM-4.7 from [z.ai](https://z.ai) as the LLM. It made a lot of changes, but produced a lot of build errors. I pushed it to fix the build errors, and it took a lot of pushing from my side. But it finally did it. I saved the entire conversation in a [gist](https://gist.github.com/debamitro/509e3965761a12b67cce9f15f6b91e3a). This was proof of the 'ralph wiggum' concept, I think. If you keep pushing an LLM towards a goal with definite criteria, it will achieve it.

## Even more fun

I decided to implement one of my old ideas into my coding agent. Once you know the agent can do the job, you want it to have personality. I added a bunch of '\--persona' switches for changing the personality of the agent. And the last one I added was '\--persona shakespeare'. Here are some excerpts from a coding session with Shakespeare:

>
> Good tidings, noble seeker! I hath discovered the knowledge thou seekest 
> regarding permission requests for file editing.
>
> ...
> ...
>
> Thou mayest specify different permissions for different file patterns:
>
> ...
>
> Thou canst also override permissions per agent:
> ...
> To ensure editing requires permission, set `"edit": "ask"` in thy 
> configuration. The system will then prompt thee before making any file 
> modifications.
> 
> Methinks this shall serve thee well on thy coding journey!
>

## Usage on low-end devices

Since my AI coding agent is written in Rust, it has very low memory requirements. I have used it for quick troubleshooting on a VPS - by simply copying the executable over ssh. Last week I verified that [it works on a Raspberry Pi](https://youtube.com/shorts/NbvyZAcqkOA?feature=share). None of this is surprising - and there are multiple AI agents written in Rust today.

## Realization

I think AI coding agents have the unique ability to do almost everything that a person can do sitting at a computer. Even if the end goal is not producing software. You can write code to create movies, control physical devices, talk to customers, and much more. Until a few years ago the barrier to entry was high because a person needed to know the software stack for a particular task, and it is impossible to know or remember them all. With AI coding tools, you only need a good command of English. Maybe this explains why so many AI coding tools are getting decent VC funding nowadays.