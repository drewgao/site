# Blog Contribution Guide

The stories behind the students that we work with at Execute Big. Submodule of [@executebig/site](https://github.com/executebig/site).

## Drafting New Posts

1. Create a new directory for every new post. The name of the new folder will be the URL path of the new post.
1. Create a subdirectory under the new directory named `images`. Place all images in order in that directory. 
1. Post should be placed in the directory as `_index.md`. Included image paths should be relative (`images/1.png`).

## Front Matter

All posts in this directory must follow the Hugo Front Matter format. Here's a sample: 

```
---
type: blog # Required for templating.
layout: post # Required for templating.

title: Post Title
description: Post Description.
card: images/7.png
date: 2020-01-01
author: John Doe
editor: Mingjie Jiang & Megan Cui
---

# Post Title
```