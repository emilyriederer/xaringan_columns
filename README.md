# Create Columns for Remark.js / xaringan

This project contains a small JavaScript macro which can be used in Markdown for writing Remark.js or xaringan slides. The purpose of the macro is to allow users to easily create multiple-column slide layout. 

## Contents

The most important documents you will find here are:

- `cols_macro.js`: contains actual `col_header`, `col_list`, and `col_row` macro code
- `cols.css`: contains corresponding macro CSS - part **necessary** to make the macro work and part illustrating *optional* settings (e.g. coloring)
- `demo.Rmd`: shows where and how to call these macros in a .Rmd file for a [`xaringan`](https://github.com/yihui/xaringan) presentation
- `demo.html`: shows the output. It is also hosted on the corresponding [GitHub Pages](https://emilyriederer.github.io/xaringan_columns/demo.html)

Other style sheets are simple are for personal design choices in my demo deck. 

## How-To Use

To use this macro, you would need to save `cols_macro.js` and `cols.css` in your project's directory. Then, reference these files in your YAML header. An example of this step is the YAML header of `demo.Rmd`:

```markdown
---
title: "Macro for Many Columns"
author: "Emily Riederer"
output:
  xaringan::moon_reader:
    lib_dir: libs
    css: ["default", "eee.css", "eee-fonts.css", "cols.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"]
    nature:
      beforeInit: "cols_macro.js"
      highlightStyle: github
      highlightLines: true
      countIncrementalSlides: false
---
```

Observe that `cols.css` is in the `css:` key-value pair, and `cols_macro.js` is in the `beforeInit` key-value pair.

## Functionality

`cols_macro.js` defines three macros that can be called in Markdown as follows:

- `![:col_header x, y, z]`: creates header with CSS class `multicolhead` for styling
- `![:col_list x, y, z]`: creates row of bulletted list items for each column
- `![:col_row x, y, z]`: creates row of text for each column

To create a three-column layout with a header row and lists, you might do something like this:

```markdown
![:col_header Header 1, Header 2, Header 3]
![:col_list item 1.1, item 2.1, item 3.1]
![:col_list item 1.2, item 2.2, item 3.2]
```
where you would replace all "Header i" and "item i" with whatever text you want.

## A Note on Design

This approach lets you build your columns row-by-row, similar to how you might think about laying things out in your head. As a result, it's implemented with a bunch `div`s. I considered alternatively having a single syntax with something like:

```
![:col_table dim1, dim2, 
      h1, h2, h3, 
      item 1.1, item 1.2, item 1.3]
``` 

which could be implemented with `<table>` instead. However, the end-user syntax here seemed bulkier to me, and it seemed less in line with how I tend to be thinking and writing when I'm making this sort of layout, so I took with the former approach.

## Benefits

My motivation for making this was that I'm trying to switch most of my personal/professional work to [`xaringan`](https://github.com/yihui/xaringan) and away from editors like Powerpoint. I knew to use this at work, someone was going to inevitably want a "three boxer", and I couldn't find a great existing way to do that. 

Relative to just laying things out in rows, columns can sometimes have advtanges in terms of emphasizing the parallel (versus sequential) nature of content.

Relative to hard-coding an HTML table in my RMarkdown, this keeps my RMarkdown a lot more readable/writable by modularizing the code. Now, I don't have to be retyping/copying the same thing over and over or risk accidentally deleting something in a chunk of HTML code. Unfortunately, this means I do sacrifice something in the abilitiy for truly arbitrary custom styling. 

## Pitfalls

This is currently in total hack status as something I made quickly just to achieve a specific end results for a deck I was making. It worked fine for my purpose, but undoubtedly has rough edges. 

There are currently a number of known short-comings to this approach. I list them below, but they are better understoof via illustration in the [demo deck](https://emilyriederer.github.io/xaringan_columns/demo.html). Known issues are:

- It can be hard to leave one column truly blank for a given row
- Text in any cell can't contain commas or periods

## About Macros for `xaringan`

This is a section I'm definitely not the right person to write. My inspiration/learning started from the [`xaringan` GitHub issue](https://github.com/yihui/xaringan/issues/80) on the topic.
