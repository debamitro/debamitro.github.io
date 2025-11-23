---
title: "A VS Code Fork for Writing"
date: 2025-11-22T20:30:37-05:00
tags: ["ai", "ide", "writing"]
---

## The seed

It was my friend [Frido](https://x.com/FridoHaugg) who planted the seeds of this idea into my brain, by showing me a ['brainrot IDE'](https://www.cladlabs.ai) which had been accepted into YCombinator's Fall 2025 batch. I tried it out and discovered that, like many other AI-enabled IDEs, it was a forked version of Visual Studio Code a.k.a. VS Code. The only difference was that it was an indirect fork. Its 'parent' source code came from an open-source AI-enabled IDE called [Void](https://voideditor.com). VS Code was technically the 'grandpa'. 

## Using Void

Thanks to the brainrot IDE I got interested in Void, and started using it. I made some minor local modifications to the source code and built it locally. It was a great feeling. I hadn't turned my coding experience upside down, but I had successfully tweaked the source code of my IDE. Long ago I was a vim user, and then for many years I was an emacs user. Somehow I never ended up modifying the source code of either tool. Maybe I didn't need to - after all vim and emacs are both amazing tools out of the box. But today, here I was, rebuilding my own IDE. And using what I built.

## My own VS Code fork

I could already feel a thread starting in my mind 'what if I created my own VS Code fork'. I considered some ideas, and the one which stuck to my mind was a 'Cursor for writers'.

## SundAI week 96

I prototyped the idea of 'Cursor for writers' on a [SundAI](https://sundai.club) hack day. All I managed to do was add a new button to my locally modified version of Void. Clicking that button would generate the structure of an empty book in the current workspace. I used LLMs to fill up the contents of the book, and then used a VS Code extension called ['Markdown Paged Media'](https://marketplace.visualstudio.com/items?itemName=abechanta.vscode-ext-paged-media) to convert every page to a pdf. I got convinced that more could be done. I decided to turn this into a project called [Asimov](https://github.com/debamitro/asimov).

## The real work begins

Creating the fork from Void was easy enough. Adding the functionality I had in mind was not. Claude Code got me started, but I felt a little uneasy proceeding without knowing how the VS Code source code was organized. So I did a lot of research using GPT-5 and Claude on how to proceed. I learned the architecture behind VSCode and how such a big desktop app was written purely in TypeScript. I should admit that GPT-5 has become quite good. It is also convenient to use it from Github Copilot because it can see a Github repository. 

After a couple of days' effort, I could add a menu option which saved the book from markdown source to final pdf. I still have much more to do before this is usable. Right now I am integrating [pagedjs](https://pagedjs.org) into the generated book.

## The future of IDEs

The reason I am writing this blog post is that I had never imagined creating a customized version of an IDE all by myself. This is only possible because of AI-assisted coding. And of course, because of the excellent base version provided by Microsoft (and subsequently, Void).

What could this mean for the future? Maybe we'll see many more locally customized versions of VS Code in small and medium-sized businesses. Instead of learning how to use a general tool for handling proprietary knowledge, we could have just the right tool for a specific problem. Earlier this was unaffordable for anyone other than large tech companies. That is no longer the case.


