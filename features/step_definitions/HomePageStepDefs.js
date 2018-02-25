import homepage from '../../src/test/claphamchasers/pages/home/HomePage';
import {defineSupportCode} from 'cucumber';

defineSupportCode(function ({Then}) {
    Then(/^I should be directed to the chasers members section$/, () => {
        homepage.homeTitleIsDisplayed();
    });

});