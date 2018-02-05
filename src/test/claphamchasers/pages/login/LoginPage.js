/**
 * Author: Kobaltmusic.ltd
 * Date:   27/06/2017
 * ObjectPage: LoginPage
 **/


'use Strict';

import Page from './Page';
import {loginPage} from "../../locator/chasers/loginpage_locator";
import yaml from 'js-yaml';
import fs from 'fs';

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

    _getEmailAddressElement() {
        return browser.element(chasers_login_page_email_address_text_field);
      }
    
      enterEmailAddress(email) {
        this._getEmailAddressElement();
        return this._getEmailAddressElement().setValue(email);
      }
    
      _getPasswordElement() {
        return browser.element(chasers_login_page_password_text_field);
      }
    
      enterPassword(pwd) {
        this._getPasswordElement();
        return this._getPasswordElement().setValue(pwd);
      }
    
      _getSignInButton() {
        return browser.element(chasers_login_page_sigin_in_button);
      }
    
      clickSignInButton() {
        this._getSignInButton();
        return this._getSignInButton().click();
      }
    


    authenticatedUser(valid) {
        const users = yaml.safeLoad(
        fs.readFileSync('./conf/users/chaser_member.yml', 'utf8')
        );
        const validuser = users[valid];
        this.enterEmailAddress(validuser.email);
        this.enterPassword(validuser.password);
        return this.clickSignInButton();
        }
    }


module.exports = new LoginPage();
