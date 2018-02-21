'use strict';

import conf from '../../../../../conf/env/wdio.conf';

/**
 * Page file
 */

class Page {
    open(path) {
        var url = conf.config.baseUrl;
        if (typeof path != 'undefined') {
            url += '/login' + path;
        }
        browser.url(url);
    }
}

module.exports = Page;
