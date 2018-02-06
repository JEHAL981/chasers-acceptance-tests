/**
 * Author: Kobaltmusic.ltd
 * Date:   27/06/2017
 * ObjectPage: HomePage
 **/


import {homePage} from "../../locator/chasers/homepage_locator";

const {
    home_page_title
} = homePage;

class HomePage {


    _gethomeTextElement(home) {
        return browser.element(home_page_title);

    }

    homeTitleIsDisplayed(home) {
        this._gethomeTextElement();
        expect(this._gethomeTextElement().getText()).to.be.eql("James Halls");

    }
}

module.exports = new HomePage();
