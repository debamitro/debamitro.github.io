---
title: "Making the Same Mistake for a Decade"
date: 2020-06-11T12:09:03-04:00
tags: ["C","Warnings","gcc"]
---

Today I saw I had made the same mistake twice in a month. It is a rather harmless-looking mistake in C.

I first saw it in 2006, barely a year after I started working as a software engineer. Someone was having a crash only with a 64-bit build. Two people were looking into it and I somehow got involved. A function was returning a pointer to a structure and dereferencing this pointer was causing a crash. I really don't remember who figured it out. I think we started putting print statements to see the value of the returned pointer and it looked odd. On 64-bit the addresses are pretty long, like 0xffeeddccbbaa00, and our pointer was compact, like 0x12345670. Now, it is possible that the print statement was omitting a whole bunch of zero's in the beginning. But we saw this happen every single time before the crash.

Then it dawned upon us that someone had forgotten to #include the header which had the function's prototype. Which means that a C compiler assumes that the function returns an int. And an int is 32 bits wide on most 64-bit operating systems. So while we wanted to write

```c
  // file: header.h
  A * some_function ();

  // file: main.c
  #include "header.h"

  ...

    A * a = some_function ();
```

we effectively wrote

```c
  // file: main.c
  // compiler assumes the following
  // int some_function ();

    int r = some_function ();
    A * a = (A *)r;
```

Adding the #include for the header fixed the problem. Afterwards we discovered that there was a warning in the build for the last few days complaining about an 'implicit declaration' of the called function. So we were wiser and learnt to watch out for this warning.

After that incident, I think I made this mistake at least three times. The last two times happened to be in the last one month! So I decided to find a way to catch this earlier. Gcc does provide the -Werror switch which upgrades all warnings to errors. It is wonderful if you can use this in your build, because that will ensure you no longer need to worry about warnings slipping by. Unfortunately this is not always practical in very large software projects being worked upon from multiple continents. One loose warning can slow down the entire project, which has a far worse effect on the code.

I discovered that gcc allows selective upgrading of warnings to errors. This is done by specifying the name of the warning as an argument to -Werror. In my case, all I needed was to add -Werror=implicit-function-declaration to every compilation command. I hope I'll be able to get this change added to our build soon. And then I'll hopefully not make this mistake again.
