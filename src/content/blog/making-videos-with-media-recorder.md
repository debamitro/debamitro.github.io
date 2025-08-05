---
title: "Making Videos With MediaRecorder"
date: 2025-08-04T13:30:20-04:00
tags: ["video", "web", "ai"]
---

This story started on a Sunday, at the [SundAI Club](https://sundai.club/). Which reminds me, I should post about the fun AI hacks I have been part of at this club since the end of December 2024. Another day!

## The project

I wanted to create [Fireship](https://fireship.io)-styled videos of my friend Andrew's [AI newsletter](https://velab.dev/news). I quickly found out that AI video generation was slighly expensive, and I didn't want to lose much money on this one-day hack.

## The plan

Since audio and image generation are relatively inexpensive, I simplified the plan to fit my budget.

* Generate audio using [ElevenLabs](https://elevenlabs.io/)
* Generate images using [DALL-E](https://openai.com/dall-e/)
* Use the images to create a slideshow
* Combine the audio and the slideshow to make a video inside the browser
* Allow the user to download the video

I knew that making videos inside a web browser was possible, because that's how I think [vizzy.io](https://vizzy.io) works. I just needed to do it.

## The hack

Getting the audio was the easiest step, ElevenLabs has a great library of voices. Creating the slideshow was also quick, thanks to AI being well-versed in using the HTML Canvas API.
The fun started when I combined the slideshow and the audio. This is where [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) came into the picture.
I did manage to combine the audio and the slideshow, and make the video playable in the browser.
However, I couldn't figure out how to make it downloadable. Whatever I had made was good enough for a quick and entertaining demo, and that's all I did on the day of the hack.

## The hard part

Creating the downloadable file turned out to be the hard part. I asked AI and the internet for troubleshooting tips, but nothing helped. The video was playing fine inside the browser, but the downloaded file was getting truncated to 6 seconds.

### The first problem 

I found out the reason - I had created the audio file by concatenating two mp3 files. The internet recommended against doing this. But I had been splitting and joining mp3 files back in 2002 when I was in college. Because we didn't have CD writers and had to share music over multiple floppy disks. I knew it was fine to concatenate mp3 files, it just worked. Even if it was technically not the best way.

What was happening is that the [AudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) node which was playing the audio track took the duration from the header of the mp3 file, which belonged to the first part of the concatenated file. And I was stopping the MediaRecorder whenever the [ended](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended) event was triggered. Hence the video recording was only as long as the first part of the audio file.

I decided it might be too much work trying to figure out the correct length of the audio file. So I put in a fixed duration of 25 seconds for the recording. I also put in a limit of 300 characters for the script, in order to fit in the 25 seconds.

### The second problem

This change got me past the 6 second limit, but my video was still much shorter than it should have been. I kept on debugging this and every time I was generating new images and audio files. Which meant more and more LLM API calls. I had to make my debugging affordable!

So I created a new mini-project to focus on the problem using two mp3 files which were already present. This mini-project was creating a video file from the audio of the concatenated mp3 files. I could see the same problem still happening. But I did notice another possible reason - the audio was starting to play a little after I called the play() method of the AudioElement node.

It turned out that this is intentional. Audio tracks may not be pre-loaded before play() is called. I found out a load() method on AudioElement, I called it before calling play(), and that seemed to eliminate this problem.

### The last problem

The final video was still getting truncated. I left my debugging attempts for a few days, until I was at another edition of the SundAI Club. I looked at how MediaRecorder works. It keeps  capturing [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) objects and sending them to the [ondataavailable](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable) event handler. For some reason I was getting an incomplete Blob object.

While I was researching about this, I found that someone on the internet claimed to have solved a similar problem by passing a [timeslice](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#timeslice) argument to MediaRecorder's start(). This argument is the number of milliseconds to wait before firing a dataavailable event. I passed 1000 as the argument, and I started getting multiple dataavailable events. And I got all the Blob objects for the entire video!

## Conclusion

<iframe width="560" height="315" src="https://www.youtube.com/embed/ig0Ycrt5DMU?si=yYmsuohkTbDSdx20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I conclude that it is entirely within my ability to create videos using MediaRecorder. Most modern browsers seem to support it. While ffmpeg is a more powerful tool, it will probably cost more money to do it on the cloud.

[Here](https://github.com/debamitro/one-minute-bulletin) is the source code for the project, and [here's](https://one-minute-bulletin.vercel.app/) the live version as of today.