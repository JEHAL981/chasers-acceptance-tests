/**
 * Author: Kobaltmusic.ltd
 * Date:   27/06/2017
 * ObjectPage: LoginPage
 **/


'use Strict';

import Page from './Page';
import {loginPage} from "../../locator/chasers/loginpage_locator";
const yaml = require('js-yaml');

const {
    chasers_login_page_password_text_field,
    chasers_login_page_sigin_in_button,
    chasers_login_page_email_address_text_field
} = loginPage;

class LoginPage extends Page {

    openPage(path) {
        super.open(path);
        browser.pause(1000);
    }


    _getSignInButton() {
        return browser.element(login_page_sigin_in_button);
    }

    clickSignInButton() {
        this._getSignInButton()
        return this._getSignInButton().click();

    }


   authenticatedUser(valid) {
       const users = yaml.load('./conf/users/chaser_member.yml');
       const validuser = users[valid];
       return browser.element(chasers_login_page_email_address_text_field).setValue(validuser.email);
       return browser.element(chasers_login_page_password_text_field).setValue(validuser.password);
   }
}

module.exports = new LoginPage();