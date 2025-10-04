---
layout: base.html
title: All Posts
description: See all archived posts.
pagination:
    data: collections.post
    size: 2
    alias: posts
    reverse: true
permalink: "p{{ pagination.pageNumber | plus:1 }}/"
---
{% assign current_page = pagination.pageNumber | plus:1 %}

{% if current_page > 1 %}[&leftarrow;](/p{{ current_page | minus:1 }}){% else %}&leftarrow;{% endif %}
Page {{ current_page }} of {{ pagination.pages.length }}
{% if current_page < pagination.pages.length %}[&rightarrow;](/p{{ current_page | plus:1 }}){% else %}&rightarrow;{% endif %}

{% for post in posts %}
{% include 'feat.html' post:post %}
{% endfor %}