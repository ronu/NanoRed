---
layout: post.html
title: All Categories
description: See all post categories.
---
{% assign tags = collections | keys | sort %}

{% for tag in tags %}
{% if tag != 'all' and tag != 'post' %}
- [#{{ tag | upcase }}](/tag/{{ tag | slugify }}) ({{ collections[tag].size }})
{% endif %}
{% endfor %}