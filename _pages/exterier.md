---
title: "Apartmánový dom"
layout: single
permalink: /apartmanovy-dom
classes: wide
header:
  image: /assets/images/pozadie3.jpg
---

{% include feature_row id="intro"  %}


Apartmány sa nachádzajú v malebnom chorvátskom mestečku Rogoznica v novopostavenom apartmánovom dome s bazénom a podzemnou garážou, v blízkosti centra mestečka a pláží.

V pešej dostupnosti sa nachádza pekáreń, tržnica, potraviny a detské centrum. Krásna kamenná promenáda so štýlovými reštauráciami je cca 10 min. pešo od apartmánu.

Najbližšia Pláž Crljina sa nachádza 2 min. chôdze, Pláž Art 7 min. a 10 minút chôdze Pláž Šepurina. Pláže v Rogoznici su kamienkové s pozvoľným vstupom, prípadne s betónovými mólami.

Na terase prislúchajúcej k apartmánovému domu sa nachádza bazén s morskou vodou a výhľadom na more, ktorý môžu  využívať všetci návštevníci apartmánov.

Obidva apartmány sú zariadená kvalitným hotelovým prádlom a uterákmi.

Sú ideálne pre trávenie pokojnej dovolenky pre rodiny s deťmi, prípadne starými rodičmi, alebo aktívnymi pármi so záujmom spoznať Rogoznicu a jej okolie. 

Sú tu možnosti požičania motorových člnov, potápania, lodných a bicyklových výletov po okolí. 

{% include image-gallery.html folder="/assets/images/exterier/" %}

{% leaflet_map {"zoom" : 16,
"divId": "myleaflet" } %}

    {% leaflet_marker { "latitude" : 43.533077,
                       "longitude" : 15.9696,
                       "popupContent" : "Apartmány Rogoznica"
                        }
    %}

{% endleaflet_map %}
