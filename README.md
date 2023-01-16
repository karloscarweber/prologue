# Prologue Web

Prologue Productions website. Everything here should be pretty public so no big deal having it public.


For Open Graph Additions:

```html
<meta property="og:site_name" content="{{ metadata.title }}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Prologue Productions | An Engineering Studio" />
<meta property="og:url" content="https://whatspast.com/" />
<!-- optional image -->
<meta property="og:image" content="https://whatspast.com/path/to/image.png">
<!-- for sizing the image -->
<meta property="og:image:width" content="2400">
<meta property="og:image:height" content="1374">

<!-- for defining the twitter card to be a summary image thing: -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://whatspast.com/path/to/image.png">
<!-- for defining the twitter card to just be a summary: -->
<meta name="twitter:card" content="summary" />
<!-- Default twitter card stuff -->
<meta name="twitter:title" content="Prologue Productions | An Engineering Studio" />
<meta name="twitter:url" content="https://whatspast.com/" />
<meta name="twitter:site" content="@kowfm" />
```



Below is the default bridgetown stuff that comes in the readme.

# Bridgetown Website README

Welcome to your new Bridgetown website! You can update this README file to provide additional context and setup information for yourself or other contributors.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Development](#development)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Prerequisites

- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - `>= 2.7`
- [Bridgetown Gem](https://rubygems.org/gems/bridgetown)
  - `gem install bridgetown -N`
- [Node](https://nodejs.org)
  - `>= 12`
- [Yarn](https://yarnpkg.com)

## Install

```sh
cd bridgetown-site-folder
bundle install && yarn install
```
> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

Use a [theme](https://github.com/topics/bridgetown-theme) or add some [plugins](https://www.bridgetownrb.com/plugins/) to get started quickly.

### Commands

```sh
# running locally
bin/bridgetown start

# build & deploy to production
bin/bridgetown deploy

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Deployment

You can deploy Bridgetown sites on hosts like Render or Vercel as well as traditional web servers by simply building and copying the output folder to your HTML root.

> Read the [Bridgetown Deployment Documentation](https://www.bridgetownrb.com/docs/deployment) for more information.
