---
title: "Two Cases of Prompts Which Don't Work"
date: 2025-02-11T14:36:22-05:00
tags: ["ai","prompt","v0","windsurf","codapt","cline"]
---

After a couple of months of coding using AI prompts, I found two cases where a particular prompt doesn't work. Maybe they'll start working sometime soon. Or, it is possible that they work with a different AI coding tool or LLM other than the ones I tried.

## Case I

I have started to use [Clerk](https://clerk.com) for user authentication. It is really easy to use, but I have bumped into one small problem everytime I asked [Windsurf](https://codeium.com/windsurf) to add Clerk authentication in a project.

Here is what it generates in the middleware.ts file:

```javascript
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

This might have worked with the previous version of Clerk, but not the latest version. The correct contents of the middleware.ts file should be something like this:

```javascript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/dashboard'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

In fact, [Clerk's documentation](https://clerk.com/docs/upgrade-guides/nextjs/v6#removed-deprecated-apis) also says that authMiddleware is deprecated. I tried using a bunch of other AI coding tools ([Cline](https://cline.bot) and [Codapt](https://codapt.ai) ) as well and they all make the same mistake. It is possible that I was using the same LLM for all of these tools (Claude 3.5 Sonnet) and that was trained with code using the previous version of Clerk.

## Case II

I have started using [v0](https://v0.dev) for frontend-only tasks. The first time I did this was for creating [a presentation](http://debamitro.github.io/presentations/codepromptfu-020225/) two weeks ago. I really liked the result so much that I put the code on a [github repo](https://github.com/debamitro/nextjs-hacker-theme-presentation).

The way I generated it was by using the following four prompts in succession:

1. can you generate a presentation with 10 slides
2. can you make the theme look like hackers
3. can I add images to any of the slides?
4. can you allow cursor keys to move from one slide to the next?

In my [quest for finding concise prompts with maximum bang for the buck](/blog/building-a-collection-of-coding-prompts), I tried to club everything together, and told v0:

'Can you generate a presentation with 10 slides. Make the theme look like hackers. Allow adding images to any of the slides. Also please allow cursor keys to move from one slide to the next'

This did not produce any working result. So I backed down a bit and said:

'can you generate a presentation with 10 slides which has a hacker theme'.

Even this didn't work. My last attempt was to use two prompts in succession:

1. can you generate a presentation with 10 slides
2. can you make the theme look like hackers

This worked! And it had a slightly different look than the original one. But it was 100% hacker-ish.

<img src="/images/presentation_smaller_021125.gif" />

## Conclusion

The first case is a general problem of LLMs getting trained with outdated information. I don't know enough to comment about it. 

The second case is, in my opinion, expected behaviour. The LLMs used in AI coding tools are like junior engineers with a few years of experience. From my engineering management experience I know that you need to give out tasks in small chunks to junior engineers, otherwise they tend to make more mistakes. I have mostly had excellent results working with AI coding tools, because I treat them like junior engineers in my team.