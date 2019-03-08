---
layout: page
title: Photo Gallery
permalink: /photos/
---
{% for gallery in site.data.galleries %}
- [{{ gallery.name }}]({{ site.baseurl }}{{ gallery.imagefolder }}/index.html)
{% endfor %}
