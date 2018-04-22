# Create Columns for Remark.js / xaringan

This project contains a small JavaScript macro which can be used in Markdown for writing Remark.js or xaringan slides. The purpose of the macro is to allow users to easily create multiple-column slide layout. 

## Contents

The most important documents you will find here are:

- `table_macro.js`: contains actual `col_header`, `col_list`, and `col_row` macro code
- `table.css`: contains corresponding macro CSS - part **necessary** to make the macro work and part illustrating *optional* settings (e.g. coloring)
- `demo.Rmd`: shows where and how to call these macros in a .Rmd file for a [`xaringan`](https://github.com/yihui/xaringan) presentation
- `demo.html`: shows the output. It is also hosted on the corresponding [GitHub Pages](https://emilyriederer.github.io/xaringan_columns/demo.html)

Other style sheets are simple are for personal design choices in my demo deck. 

## Functionality

`table_macro.js` defines three macros that can be called in Markdown as follows:

- `![:col_header x, y, z]`: creates header with CSS class `multicolhead` for styling
- `![:col_list x, y, z]`: creates row of bulletted list items for each column
- `![:col_row x, y, z]`: creates row of text for each column

To create a three-column table with a header row and lists, you might do something like this:

```markdown
![:col_header Header 1, Header 2, Header 3]
![:col_list item 1.1, item 2.1, item 3.1]
![:col_list item 1.2, item 2.2, item 3.2]
```
where you would replace all "Header i" and "item i" with whatever text you want.

## Benefits

My motivation for making this was that I'm trying to switch most of my personal/professional work to [`xaringan`](https://github.com/yihui/xaringan) and away from editors like Powerpoint. I knew to use this at work, someone was going to inevitably want a "three boxer", and I couldn't find a great existing way to do that. 

Relative to just laying things out in rows, columns can sometimes have advtanges in terms of emphasizing the parallel (versus sequential) nature of content.

Relative to hard-coding an HTML table in my RMarkdown, this keeps my RMarkdown a lot more readable/writable by modularizing the code. Now, I don't have to be retyping/copying the same thing over and over or risk accidentally deleting something in a chunk of HTML code. Unfortunately, this means I do sacrifice something in the abilitiy for truly arbitrary custom styling. 

## Pitfalls

This is currently in total hack status as something I made quickly just to achieve a specific end results for a deck I was making. It worked fine for my purpose, but undoubtedly has rough edges. 

There are currently a number of known short-comings to this approach. I list them below, but they are better understoof via illustration in the [demo deck](https://emilyriederer.github.io/xaringan_columns/demo.html). Known issues are:

- Long headers only expand the box size for that cell. Everything still stays in-line but the boxes of the other headers to do not grow correspondingly larger.
- Extremely long one-word headers simply overflow and get cut-off. 
- It can be hard to leave one column truly blank for a given row.
- Text in any cell can't contain commas.

## About Macros for `xaringan`

This is a section I'm definitely not the right person to write. My inspiration/learning started from the [`xaringan` GitHub issue](https://github.com/yihui/xaringan/issues/80) on the topic.