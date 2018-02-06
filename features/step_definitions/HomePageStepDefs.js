import homepage from '../../src/test/claphamchasers/pages/home/HomePage'
import {defineSupportCode} from 'cucumber';

defineSupportCode(function ({And, But, Given, Then, When}) {
    Then(/^I should be directed to the chasers memebers section$/, () => {
        homepage.homeTitleIsDisplayed();
    });

});
