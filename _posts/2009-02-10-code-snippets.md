---
layout: post
title: Code Snippets

excerpt: Quick overview on how to post code snippets using Liquid tags and how to escape or not escape markdown and HTML in your blog entries.

postType: "featured, banner"
author: tcd
tags: dev

---

Whenever you need to post a code snippet, use the liquid tags `highlight` and `endhighlight` like this:

````ruby
# some code goes here
puts "Hello World!"
````

Note that this only provides color-coding. For that you might need to use a front end colorization engine like Highlight.JS or something similar.