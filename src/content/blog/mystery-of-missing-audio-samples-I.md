---
title: "The Mystery of the Missing Audio Samples - I"
date: 2022-01-06T10:00:00-05:00
tags: ["RC","Rust","cpal","audio"]
---

It all started in the third week of my batch at the Recurse Center, when I got interested in Audio Signal Processing, and signed up for a [Coursera course](https://www.coursera.org/learn/audio-signal-processing) which some people were doing. My biggest goal for the batch was to get better at using Rust. So, I thought I should do the assignments in the course using Rust. Looking for a basic audio library, I found [cpal](https://github.com/rustaudio/cpal).

## Playing with cpal

A couple of years ago I had played briefly with [portaudio](https://github.com/PortAudio/portaudio), which is a very widely-used C library for audio applications. Cpal seemed better-designed, and used Rust idioms. The documentation was good. I kept referring to the [record_wav.rs](https://github.com/RustAudio/cpal/blob/master/examples/record_wav.rs) example and started writing some code which could read audio data from my microphone. I had to learn some concepts like what [FnMut](https://doc.rust-lang.org/stable/std/ops/trait.FnMut.html) meant, and whether I could use a function where the example used a closure. The most important lines in the first working version looked like

```rust
    // Our callback function
    let catch_data = |data: &[f32], info: &InputCallbackInfo| {
        println!("got {} samples",data.len());
    };

    // The real stuff
	if let Ok(stream) = device.build_input_stream (&config,
                                                  catch_data,
                                                  catch_error) {
            println!("start recording");
            stream.play();
            std::thread::sleep(std::time::Duration::from_secs(5);
            println!("stop recording");
    }
```

As one can see, the way to capture audio is to call the [cpal::Device::build_input_stream](https://docs.rs/cpal/latest/cpal/traits/trait.DeviceTrait.html#method.build_input_stream) function, and pass a closure as its second argument. I think I initially didn't even use a closure - I just used a 'catch_data' function. This function (or closure) gets called whenever some audio samples arrive.

## The mystery

I had printed out the sampling rate, and it was 44100 Hz. Which means I should get 44100 x 5 samples in total, since I let my code run for 5 seconds. When I counted the number of samples I got in 5 seconds, it was _much_ less than 44100. I immediately thought - I must be doing something wrong.

## Attempts to solve the mystery

### Attempt 1

After some searching on the net and some introspection - I thought 'Aha! I must be slowing the callback function down with my print statement which needs to wait for I/O'. So I tried to remove it and maintain a count of samples received. This turned out to be more involved than I thought. In C (or C++), I would have simply used a global variable to count the number of samples, like

```c
int num_samples = 0;

// Hypothetical C code
void catch_data (Data * data) {
    num_samples += data_length (data);
}

void do_it () {

    // Code for setting up catch_data as the callback

    // Code for waiting for 5 seconds

    printf("got %d samples\n",num_samples);
```

Rust doesn't have global variables, and doesn't allow the modification of the same piece of data from two places. You can share in Rust, and you can modify, but you cannot really share _and_ modify. I had to learn about Rust's [reference-counted pointers](https://doc.rust-lang.org/stable/std/rc/struct.Rc.html), and their [thread-safe version](https://doc.rust-lang.org/stable/std/sync/struct.Arc.html). The latter was what I had to use. Why? Because the callback function (or closure) can run on a different thread than the main thread. Now my code looked somewhat like

```rust
    let mut num_samples = Arc::new(AtomicUsize::new(0));
    let num_samples2 = num_samples.clone(); // this variable can be printed out at the end of the recording

    // New callback function, without any print statements
    let catch_data = move |data: &[f32], info: &InputCallbackInfo| {
        num_samples.fetch_add(data.len(), Ordering::Relaxed);
    };
```

Here is a [gist](https://gist.github.com/debamitro/36edbe3344049b401754f757eedd9044) which has more of the code. To my surprise, I still got fewer samples than the expected 44100 per second.

### Attempt 2

So far I had been using a debug build. I tried using a release build of my code, and that seemed better - somewhere around 43900 samples. This was still not the solution.

### Attempt 3

I thought I might try to do the same thing using portaudio in C. I compiled the [paex_record.c](https://github.com/PortAudio/portaudio/blob/master/examples/paex_record.c) example with a few additional print statements. I got 44100 samples per second, without fail, every single time. I asked around about this difference between the two libraries, and even filed an [issue](https://github.com/RustAudio/cpal/issues/619) on the cpal bug-tracker. I asked questions on the cpal forum and then on the portaudio forum. I read the source code of cpal as well as portaudio. All of my experiments were on my MacBook Pro. I found out that both of these libraries use Apple's CoreAudio framework for getting work done. Cpal's code looked much simpler and more reasonable, while portaudio had a lot of special mechanisms. I started to think that I had hit a CoreAudio bug which portaudio had managed to specially take care of.

## Intermission

This blog post will be continued ...

(Edit: the second part of this post is [here]({{< ref "/blog/mystery-of-missing-audio-samples-II" >}}))
