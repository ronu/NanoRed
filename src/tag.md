---
layout: base.html
title: All Categories
description: See all post categories.
---
{% assign tags = collections | keys | sort %}

{% for tag in tags %}
{% if tag != 'all' and tag != 'post' and tag != 'authors' %}
- [#{{ tag | upcase }}](/tag/{{ tag | slugify }}) ({{ collections[tag].size }})
{% endif %}
{% endfor %}