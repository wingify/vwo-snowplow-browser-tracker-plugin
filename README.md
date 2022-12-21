# VWO Snowplow Browser Tracker PLugin

Browser Plugin to be used with `@snowplow/browser-tracker`.

Adds VWO to your Snowplow tracking.

## Maintainer quick start

Part of the Snowplow JavaScript Tracker monorepo.  
Build with [Node.js](https://nodejs.org/en/) (14 or 16) and [Rush](https://rushjs.io/).

## Package Installation

With npm:

```bash
npm install @snowplow/browser-plugin-vwo
```

## Usage

Initialize your tracker with the VWOPlugin:

```js
import { newTracker } from '@snowplow/browser-tracker';
import { VWOPlugin } from 'vwo-snowplow-browser-tracker-plugin';

newTracker('sp1', '{{collector}}', { plugins: [ VWOPlugin() ] }); 
```
## Code of Conduct

[Code of Conduct](https://github.com/wingify/vwo-snowplow-browser-tracker-plugin/blob/master/CODE_OF_CONDUCT.md)

## Copyright and license

[Apache License, Version 2.0](https://github.com/wingify/vwo-snowplow-browser-tracker-plugin/blob/master/LICENSE)

Copyright 2021-2022 Wingify Software Pvt. Ltd.
