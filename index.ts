import { BrowserTracker, BrowserPlugin } from '@snowplow/browser-tracker-core';
import { buildStructEvent } from '@snowplow/tracker-core';

declare global {
    interface Window {
        VWO: any;
        _vwo_exp: any;
    }
}

export function VWOPlugin(): BrowserPlugin {

  /**
   * Initializing a listner to Check that which variations applied on the visitors
   */
    function initListener(tracker: BrowserTracker) {
        window.VWO = window.VWO || [];
        window.VWO.push([
            "onVariationApplied",
            function (data : Array<string | number> ) {
                if (!data) return;

                var expId = data[1];
                var variationId = data[2];

                if (
                    expId &&
                    variationId &&
                    ["VISUAL_AB", "VISUAL", "SPLIT_URL"].indexOf(window._vwo_exp[expId].type) > -1
                ) {
                    tracker.core.track(buildStructEvent({
                        category: 'VWO',
                        action: expId + ":" + window._vwo_exp[expId].name,
                        label: variationId + ":" + window._vwo_exp[expId].comb_n[variationId],
                        value: 0.0
                    }));
                }

            },
        ])
    }

    return {
        activateBrowserPlugin: (tracker: BrowserTracker) => {
            initListener(tracker);
        },
    };
}