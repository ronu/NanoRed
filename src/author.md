---
layout: post.html
pagination:
    data: collections.authors
    size: 1
    alias: author1
permalink: "@{{ author1 | slugify }}/"
eleventyComputed:
    title: "{{ author1 }}"
    description: "Posts written by {{ author1 }}"
---

{% assign authored = collections.authors[author1] | reverse %}

| Date | Post |
| ---- | ---- |{% for post in authored %}
| {{ post.data.date | date_to_long_string }} | [{{ post.data.title }}]({{ post.url }}) |{% endfor %}