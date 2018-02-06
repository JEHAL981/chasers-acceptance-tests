import loginpage from '../../src/test/claphamchasers/pages/login/LoginPage';
import {defineSupportCode} from 'cucumber';

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^I am on the claphamchasers Sign In page$/, () => {
        loginpage.openPage();
    });

    Given(/^I am (authorised|unauthorised) chaser member signed in$/, (type) => {
        loginpage.authenticatedUser(type);
    });
});
