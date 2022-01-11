---
title: "The Mystery of the Missing Audio Samples - II"
date: 2022-01-11T11:00:51-05:00
tags: ["RC","Rust","cpal","audio"]
---

(This is a continuation from my previous [blog post]({{< ref "/blog/mystery-of-missing-audio-samples-I" >}}).)

## Re-cap

I was trying to read in audio samples from my microphone using Rust's [cpal](https://github.com/rustaudio/cpal) library. Somehow I couldn't get 44100 samples per second even though I had verified that the sampling rate was 44100 Hz. I tried various things and nothing seemed to work.

## More attempts to solve the mystery

### Attempt 4

Cpal uses [coreaudio-rs](https://crates.io/crates/coreaudio-rs) on OSX, which is a "Rust-esque" interface over Apple's CoreAudio framework. From my comparisons of portaudio and cpal, I picked one difference which seemed important to me. When portaudio wants to 'stop' an input stream, it calls a bunch of stuff including [AudioUnitReset](https://developer.apple.com/documentation/audiotoolbox/1439607-audiounitreset) - and cpal was _not_ doing this one particular call. What's more, coreaudio-rs doesn't even have a way to call the AudioUnitReset routine. I downloaded and built my own copies of cpal and coreaudio-rs and made the necessary changes. This taught me how to modify Cargo.toml to tweak where a dependent package got picked up from - the crate registry, a git repo, or a local directory. I didn't get the desired result yet - I was still receiving somewhere between 40000 and 43000 samples per second.

### Attempt 5

Since nothing seemed to help, I decided to see what happened if I tried to record audio for more than 5 seconds. I added a delay of 500ms after the 5 seconds, like

```rust
    println!("start recording");
    stream.play();
    std::thread::sleep(std::time::Duration::from_secs(5);
    std::thread::sleep(std::time::Duration::from_millis(500);
    println!("stop recording");
```

For the first time I got close to 44100 x 5 samples. I started experimenting with the additional delay, and I found out that if I added 600ms I got all 44100 x 5 samples.

## The Aha! moment

This is when the solution finally occurred to me - all the samples arrive as expected, but they can take a while to arrive. I was not waiting long enough. And why? Because I was doing the equivalent of looking at my watch and expecting an 8-hour job to be done in 8 hours precisely. Instead, I should have stopped looking at my watch and simply waited for the job to finish. Coming to my particular problem, I knew I should have got 44100 x 5 samples - so I should have waited till I got all of them.

## The solution

Here is what I did - I added a variable delay based on the total number of samples received.

```rust
    let max_samples: usize = 5 * 44100 * 2;
    if let Ok(stream) = device.build_input_stream (&custom_config,
                                                       catch_data,
                                                       catch_error) {
        println!("start recording");
        stream.play();
        std::thread::sleep(std::time::Duration::from_secs(5);
        while num_samples2.load(Ordering::Relaxed) < max_samples {
            std::thread::sleep(std::time::Duration::from_millis(200));
        }
```

And this worked again and again. It worked for both debug and release builds. What's more, I went back to the first thing I had done - adding a print statement in the callback function. And even then I did not miss a single sample.

## Reflection

I realized that this solution was right in front of me all along. Because this is how portaudio works. The callback function supplied to the portaudio stream is supposed to return 0 when it knows it should receive more samples, and return 1 when it knows it got all the samples it needed. The portaudio 'paex_record.c' example which I was running had this all along - in the 8 lines starting from [here](https://github.com/PortAudio/portaudio/blob/52aee492edc64605dcc65afff13776c4dad81910/examples/paex_record.c#L112). A lot of my debugging attempts were unnecessary to solve the problem. They did help me learn a lot of Rust concepts, so I am not complaining!
