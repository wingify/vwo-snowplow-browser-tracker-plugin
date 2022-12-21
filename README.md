# VWO Snowplow Browser Tracker Plugin

Browser Plugin to be used with `@snowplow/browser-tracker`.

Adds VWO to your Snowplow tracking.

## Package Installation

With npm:

```bash
npm install vwo-snowplow-browser-tracker-plugin
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
