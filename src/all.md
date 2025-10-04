---
layout: post.html
title: All Posts
description: See all archived posts.
pagination:
    data: collections.post
    size: 2
    alias: posts
    reverse: true
permalink: "all-{{ pagination.pageNumber | plus:1 }}/"
---
{% assign current_page = pagination.pageNumber | plus:1 %}

{% if current_page > 1 %}
[Previous](/all-{{ current_page | minus:1 }})
{% else %}
Previous
{% endif %}
| Page {{ current_page }} of {{ pagination.pages.length }} |
{% if current_page < pagination.pages.length %}
[Next](/all-{{ current_page | plus:1 }})
{% else %}
Next
{% endif %}

{% for post in posts %}
{% include 'feat.html' post:post %}
{% endfor %}