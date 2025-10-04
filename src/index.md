---
layout: base.html
home: true
title: NanoRed
description: Deep dives, instant reads.
author: Nicolas Ventura
---
Want to be an [author](/authors) and have a story to share? Learn how to [write for {{ title }}](/write)!

This website was last updated on {{ 'now' | date_to_long_string }}.

## Browse Categories

{% assign tags = collections | keys | slice:0,5 %}
{% for tag in tags %}{% if tag != 'post' and tag != 'all' and tag != 'authors' %}<small><a href="/tag/{{ tag | slugify }}">#{{ tag | upcase }}</a></small>
{% endif %}{% endfor %}<small>or <a href="/tag">see all</a></small>

## Latest Posts

{% assign recent_posts = collections.post | reverse | slice:0,5 %}
{% for post in recent_posts %}
{% include 'feat.html' post:post %}
{% endfor %}

[See all posts](/p1) ({{ collections.post.size }})