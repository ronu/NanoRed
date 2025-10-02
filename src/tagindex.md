---
layout: post.html
pagination:
    data: collections
    filter:
        - all
        - post
        - authors
    size: 1
    alias: tag 
permalink: "tag/{{ tag | slugify }}/"
eleventyComputed:
    title: "Category: {{ tag | capitalize }}"
    description: "Posts tagged with #{{ tag | upcase }}"
---

[See all categories](/tag/)

{% assign tagged_posts = collections[tag] | reverse %}

| Date | Post |
| ---- | ---- |{% for post in tagged_posts %}
| {{ post.data.date | date_to_long_string }} | [{{ post.data.title }}]({{ post.url }}) |{% endfor %}