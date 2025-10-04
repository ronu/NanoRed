---
layout: base.html
title: Authors
description: See all authors of NanoRed.
---
{% assign authors = collections.authors | keys | sort %}

{% for author in authors %}
{% if author != 'Anonymous' %}
- [{{ author }}](/@{{ author | slugify }}) ({{ collections.authors[author].size }})
{% endif %}
{% endfor %}