import loginpage from '../../src/test/claphamchasers/pages/login/LoginPage';

module.exports = function () {
    this.LoginPage = loginpage;

this.Given(/^I am on the claphamchasers Sign In page$/, () => {
   loginpage.openPage();
});

this.Given(/^I am (authorised|unauthorised) chaser member signed in$/, (type) => {
    loginpage.authenticatedUser(type);
});

}
