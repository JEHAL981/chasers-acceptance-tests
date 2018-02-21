'use strict';

import conf from '../../../../../conf/env/wdio.conf';
import {loginPage} from "../../locator/chasers/loginpage_locator";

const  {
    chasers_login_page_email_address_text_field

} = loginPage;


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
