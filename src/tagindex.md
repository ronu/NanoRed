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

{% for post in tagged_posts %}
{% include 'feat.html' post:post %}
{% endfor %}