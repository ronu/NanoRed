---
layout: post.html
title: All Posts
description: See all archived posts.
---
{% assign all_posts = collections.post | reverse %}
| Date | Post |
| ---- | ---- |{% for post in all_posts %}
| {{ post.data.date | date_to_long_string }} | [{{ post.data.title }}]({{ post.url }}) |{% endfor %}