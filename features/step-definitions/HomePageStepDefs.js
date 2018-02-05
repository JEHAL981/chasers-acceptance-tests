import homepage from '../../src/test/claphamchasers/pages/home/HomePage'

module.exports = function () {
    this.HomePage = homepage;


this.Then(/^I should be directed to the chasers memebers section$/, () => {
    homepage.homeTitleIsDisplayed();
});

}
