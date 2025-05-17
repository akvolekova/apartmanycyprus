---
title: "Apartmán Oasis"
layout: single
permalink: /apartman-oasis/
header:
  image: /assets/images/pozadie5.jpg
---

{% include feature_row id="intro" type="center" %}

Nový pripravovaný penthouse s jednou spálňou a dvomi kúpeľňami sa bude nachádzať v úplne novej lokalite vybudovaného projektu OASIS. Projekt bude vybavený vnútorným bazénom so saunami, posilňovňou a jogou, reštauráciami, vonkajším bazénom a detským bazénom.

{% include calendar.html availability=site.data.availability-oasis prices=site.data.prices %}

{% include image-gallery.html folder="/assets/images/apartman-oasis/" %}

{% leaflet_map {"zoom" : 15,
"divId": "myleaflet" } %}

    {% leaflet_marker { "latitude" : 35.3563,
                       "longitude" : 33.6626,
                       "popupContent" : "Apartmán Lighthouse"
                        }
    %}

{% endleaflet_map %}
