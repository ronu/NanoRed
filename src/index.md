---
title: Homepage
---
# {{ title }}

Hello, world!

## Posts

{% for apost in collections.post %}
- [{{ apost.data.title }}]({{ apost.url }})
{% endfor %}