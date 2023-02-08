---
layout: page
title: CODE
---

A Collection of Code Samples from some client work that i like:

## Castro
For Castro 2 I rebuilt the interface they used to interact with their on device database, and a couple key views in the app. One system I'm proud of is a way to store user settings, and to subscribe to changes in those settings anywhere in the app.

<p class="full-measure paragraph"><a class="button-link opposite" href="https://gist.github.com/karloscarweber/c19d403bf17c2ae1a04e97899e92d3ad" target="_blank">Foggy and PBS Code</a></p>

iOS projects tend to sprawl and grow, oftentimes become so large as to make changes difficult to manage, or to understand how components work together. Foggy was one system I wrote to manage this. But leaving the project better than I found it was a paramount goal. I took extra care to add in depth documentation with embedded code samples and guides to work with the code.

Xcode has a quick help function for code. You can add documentation that is populated in place throughout your codebase without the need to jump back to the definition:

<img src="/images/samples/foggy_quick_help.gif" style="max-width:600px;width:100%;" />

Very large pieces of the application often have a lot of moving parts, I used flow diagrams to illustrate the organization of this code:

<img src="/images/samples/filterable_queue_quick_help.gif" style="max-width:600px;width:100%;" />

## Epicurrence 3
This site is now very old, No longer live, but I really really like it. A big focus for me this year is to partner with Designers making this sort of thing and build them. The Epicurrence site was built on an old node.js framework named Sails. All of the animations and easing are custom. We used JavaScript to trigger CSS Transform changes. At the time it was more difficult to get Hardware accelerated animations working, this was our work around.

<p class="full-measure paragraph"><a class="button-link opposite" href="https://www.awwwards.com/sites/epicurrence-no-3-park-city-ut-1" target="_blank">Epiccurence 3 on Awwwards</a></p>

<p class="full-measure paragraph"><a class="button-link opposite" href="https://github.com/karloscarweber/epicurrence-3" target="_blank">Code on Github</a> &nbsp;&nbsp;&nbsp;(You have been invited to this Repo)</p>

## This Site

I'm still working on this site, it's kind of a mess, but I very much enjoy this CSS Animation I was able to make. It's called Rising Sun. It's a simple transform animation. The design requirements are to make sure the sun doesn't extend beyond the edge of the screen too much. A small snippet of javascript is used to ensure that doesn't happen.

I enjoy simple solutions like this and pure, or mostly pure CSS animations.

<p class="full-measure paragraph"><a class="button-link opposite" href="/risingsun" target="_blank">See the Rising Sun</a></p>

<p class="full-measure paragraph"><a class="button-link opposite" href="https://gist.github.com/karloscarweber/090e17c3e42dff4741ebac0c267ef9d2" target="_blank">See the Relevant Code</a></p>

## Camping

Camping is an old (old) MVC Ruby micro web framework that was, quite honestly, defunct. It's famous for fitting the core source code into less than 4KB. Last year I started workin on Camping, like it was on old classic muscle car, and got it working with modern tooling again. The effort to overhaul, improve, and expand Camping is a main focus of mine.

This year I'll complete a handful of new plugins to improve Camping, modernize it's Database interfaces, and a new plugin architecture I wrote called "Gear".

<p class="full-measure paragraph"><a class="button-link opposite" href="https://github.com/camping/camping/blob/master/lib/camping-unabridged.rb" target="_blank">See Camping</a></p>

<p class="full-measure paragraph"><a class="button-link opposite" href="https://github.com/camping/camping/blob/master/lib/camping.rb" target="_blank">The famous minified code</a></p>

## Sparkage

I was contracted a couple of years ago to make a website for a local startup, it took me a couple of weeks. I built the whole thing out in Tachyons, with some custom CSS, plus a home grown javascript library to add parallax animation to some elements.

<p class="full-measure paragraph"><a class="button-link opposite" href="https://getsparkage.com" target="_blank">See Sparkage</a></p>

## Make 100 Things

This is an unreleased site that I designed and built, but didn't spread widely. The idea was to monetize small creative output over a long period of time. I abandoned the monetization idea soon after building it, but I really like the idea of showing continual progress over time in a narrow focus of things. So I'm gonna ressurect this soon.

<p class="full-measure paragraph"><a class="button-link opposite" href="https://make100things.com" target="_blank">See make 100 things</a></p>
