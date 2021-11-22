---
title: "Programmatic Access of C Structures"
date: 2021-11-19T15:26:42-05:00
tags: ["rust", "lexer", "parser", "tokenizer"]
---

# Background

More than a year ago, I was looking for a project which would help me learn the [Rust programming language](https://www.rust-lang.org). I like creating small projects from scratch, so I thought of solving a problem I had encountered occasionally at work. C (and C++ as well) doesn't have a standard way of accessing its data structures programmatically. Some languages have type introspection capabilities, and C/C++ obviously don't have that either. As a result, we often need to implement boilerplate utility code for dealing with C/C++ structures. Some examples are:

* Code for pretty printing a structure (something like [php's var_dump](https://www.php.net/manual/en/function.var-dump.php))
* Code for serialization/deserialization of a structure

These needs are solved in different ways by every software product. I wanted _one_ standard library which could allow programmatic access to C/C++ data structures. I thought I'd get started using Rust.

# Why Rust

Rust seemed like a good language for writing something low-level like a parser, without having to worry a lot about memory errors.
It also comes with a nice string library, which is the first thing one needs for parsing.

# Choice of parser library

I saw projects using the [nom](https://crates.io/crates/nom) library, and I probably could have been more productive using it. I chose to write things from scratch, without any dependencies other than the standard library. This was a purely personal preference, as I wanted to learn Rust.

# Overview of my project

I called it [c-introspect-rs](http://github.com/debamitro/c-introspect-rs) as my idea was close enough to type introspection. It is not actually introspection though. I guess I'll have to live with the name. As of now it provides an Iterator over C/C++ structs

```rust
use c_introspect_rs::c_parser::parse_c_file;
...
// Sample usage
    if let Some(itr) = parse_c_file(filename) {
        for c_struct in itr {
            // For every struct, loop over the fields
            for field in c_struct.fields.iter() {
            }
        }
    }
```

Here are the Rust data structures provided by the Iterator

```rust
pub struct C_Declaration {
    pub typename: String,
    pub name: String,
}

pub struct C_Struct {
    pub name: String,
    pub fields: Vec<C_Declaration>,
}
```

# Internal architecture

Here is the `parse_c_file` routine, which is the only functionality exported by my library.

```rust
pub struct C_StructIter {
    finished: bool,
    buf_reader: BufReader<File>,
}

pub fn parse_c_file(filename: &str) -> Option<C_StructIter> {}
```

The `parse_c_file` routine returns a lazy iterator of type `C_StructIter`. Whenever `C_StructIter::next()` is called, the parsing mechanism starts off from wherever it stopped earlier. At the lowest level is a tokenizer which is also a lazy iterator of type `c_parser::c_tokenizer::TokenItr`. Whenever the parser calls `TokenItr::next()`, the tokenizer reads the next characters from the file and returns a token. The parser is probably a top-down parser with backtracking, which I feel is the easiest way to hand-code a parser. I wrote 'probably' because I didn't start from a definite parsing strategy. I looked at the syntax of C and C++ structs and asked myself 'hey, how can my program recognize this'. So far it seems to be working for a number of structs. I still need to work on handling more datatypes for the fields of the struct, and for handling recursive structures.

# Testing

I started out with a tiny hand-written file with one struct. Then, I added one more. Next I tried to parse stdlib.h - one of the established Unix system headers. Once I was able to do that I went ahead and parsed all files with a '.h' suffix under /usr/include. There were arond 1700 headers in all. That was fun! In fact this is the point where I managed to make my program panic. Some of the headers had Unicode characters inside comments, and I was going through the multi-byte characters incorrectly.

# Effort it took, and learnings

Although I had started this project one year ago on the side, I never got it off the ground properly. I am currently doing a six-week batch at the [Recurse Center](https://www.recurse.com) and that's where I have been able to devote a number of days to it.

What did I learn?

* The biggest thing I learnt while doing this is the ownership of objects in Rust. Rust keeps a strict check on who owns an object and who can have access to it. Following the Rust compiler's preferences helped me organize my data logically, keeping things where they fit in logically.
* I also learnt how cargo allows you to run examples for a library. This is very useful, because it is very easy to illustrate how a library should be used, if you can run some example code. All you need to do is to put your examples inside an 'example' directory at the same place where your Cargo.toml is.
