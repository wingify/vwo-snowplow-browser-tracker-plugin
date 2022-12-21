# VWO Snowplow Browser Tracker Plugin

This plugin allows to send VWO data to Snowplow using the Snowplow browser tracker - `@snowplow/browser-tracker`.

## Package Installation

For NodeJs/JavasScript SDK

```bash
# via npm
npm install vwo-snowplow-browser-tracker-plugin

# via yarn
yarn add vwo-snowplow-browser-tracker-plugin
```

## Usage

Initialize your tracker with the VWOPlugin:

```js
import { newTracker } from '@snowplow/browser-tracker';
import { VWOPlugin } from 'vwo-snowplow-browser-tracker-plugin';

newTracker('sp1', '{{collector}}', { plugins: [ VWOPlugin() ] }); 
```

For more details around Snowplow browser tracker, refer to this [document](https://docs.snowplow.io/docs/collecting-data/collecting-from-own-applications/javascript-trackers/browser-tracker/quick-start-guide/)

## Contributing

Please go through our [contributing guidelines](https://github.com/wingify/vwo-snowplow-browser-tracker-plugin/blob/master/CONTRIBUTING.md)

## Code of Conduct

[Code of Conduct](https://github.com/wingify/vwo-snowplow-browser-tracker-plugin/blob/master/CODE_OF_CONDUCT.md)

## License

[Apache License, Version 2.0](https://github.com/wingify/vwo-snowplow-browser-tracker-plugin/blob/master/LICENSE)

Copyright 2021-2022 Wingify Software Pvt. Ltd.
