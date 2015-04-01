
---
# Start default in _config.yml(not default yet)
layout: post
postType: "featured, banner"
# End default

# All Required
title: I am a post title
excerpt: I am a short post description visible in RSS list and on landing page post list

author: Author ID from _config.yml. Example: "tcd" - without quotes
tags: Tag IDs from _data/tags.yml. Example: "[js, dev, soft]" - without quotes

---


FORMATTING:


Header 1: # I am a header 1 # - last pounds are optional
Header 2: ## I am a header 2 ## - last pounds are optional
Header 3: ### I am a header 3 ### - last pounds are optional
Header 4: #### I am a header 4 #### - last pounds are optional
Header 5: ##### I am a header 5 ##### - last pounds are optional
Header 6: ###### I am a header 6 ###### - last pounds are optional

Emphasis:

*Italic text* or _Italic text_
**Bolded text** or __Bolded text__

Line breaks:

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.



QUOTES:


> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.



IMAGES:


![Forever alone - alt text](/assets/img/<post file name>/foreveralone.jpg)



LINKS:


[display text for url](actual URL to the page, it can also be relative if you link a C4P page.)

Examples:

[C4P](http://coding4passion.org/)

[You can use numbers for reference-style link definitions][1]

[1]:http://coding4passion.org/

[You can use text for reference-style link definitions][some text]

[some text]:http://coding4passion.org/



LISTS:


Unordered:

* Item 1
* Item 2
* Item 3
 * SubItem 1
  * SubSubItem 1

Ordered:

1. Item 1
2. Item 2
3. Item 3
 31. SubItem 1
  311. SubSubItem 1

Can be any number in ordered list, all can even be 1 as long as it's followed by the dot



UNDERLINE TEXT:


Three or more...

---

Hyphens

***

Asterisks

___

Underscores



TABLES:


Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3



CODE BLOCKS:


If you are writting some text and want to expose some text as code you can do a single backtick wrapper. Example `window.alert('NOT ILLUMINATI');`.

Whenever you need to post a code snippet, use the markdown the 4 backticks wrapper and
the language it's written in, like this:


````javascript

//some js
var foo = function(bar) {
	window.console.log(bar);
};

foo('ILLUMINATI!');

````

We are using highlight.js library, you can check supported languages here:
https://github.com/isagalaev/highlight.js/tree/master/src/languages



LIQUID

For Jekyll use of variables like page url you can use liquid syntax.

Some examples:

[site url]({{ site.url }})

[archive]({{ site.url }}/archive)

[permalink]({{ page.url }})



HTML


You can also use raw HTML if you have issues with markdown, which
comes in handy when embedding videos and audio and some other stuff.
