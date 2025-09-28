---
# File: src/tags.liquid
# Configure Eleventy's Pagination
layout: post.html
pagination:
  # Iterate over the global 'collections' object, which is keyed by tag name.
  data: collections
  
  # Generate one page per tag (one key from the object per page).
  size: 1
  
  # Assign the current tag name (the object key) to the variable 'tag'.
  alias: tag 

# Dynamically set the permalink (URL) for each tag page.
# The 'tag' alias is used here, and 'slugify' ensures a clean URL.
permalink: "tags/{{ tag | slugify }}/"
---

{% comment %} 
The 'tag' variable now holds the name of the current tag (e.g., "javascript").
The 'collections[tag]' variable holds an array of all posts with that tag.
{% endcomment %}

<h1>Posts Tagged: “{{ tag }}”</h1>

<ol>
  {% comment %} 
  Get the posts for the current tag. We use the 'reverse' filter 
  to display the newest posts first (reverse chronological order).
  {% endcomment %}
  {% assign taglist = collections[tag] | reverse %}
  
  {% for post in taglist %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a> 
      <time datetime="{{ post.date | date: '%Y-%m-%d' }}">({{ post.date | date: "%B %d, %Y" }})</time>
    </li>
  {% endfor %}
</ol>