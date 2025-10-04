---
layout: base.html
pagination:
    data: collections.authors
    filter:
        - Anonymous
    size: 1
    alias: author1
permalink: "@{{ author1 | slugify }}/"
eleventyComputed:
    title: "{{ author1 }}"
    description: "Posts written by {{ author1 }}"
---

{% assign authored = collections.authors[author1] | reverse %}

{% for post in authored %}
{% include 'feat.html' post:post %}
{% endfor %}
