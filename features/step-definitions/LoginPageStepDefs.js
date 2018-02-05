import loginpage from '../../src/test/claphamchasers/pages/login/LoginPage';

module.exports = function () {
    this.LoginPage = loginpage;

this.Given(/^I am on the claphamchasers Sign In page$/, () => {
   loginpage.openPage();
});

this.When(/^(authorised|unauthorised) chaser member signs in$/, (type) => {
    loginpage.authenticatedUser(type);
});

}
