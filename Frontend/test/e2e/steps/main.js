var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

    this.Given(/^I open the main page$/, function () {
        return browser.get("http://localhost:50775/");
    });

    this.When(/^I translate "([^"]*)"$/, function (message) {
        element(by.id("translationInput")).clear();
        element(by.id("translationInput")).sendKeys(message);
        return element(by.id("translationButton")).click();
    });

    this.Then(/^The translation "([^"]*)" should be shown$/, function (expectedMessage) {
        return expect(element(by.id("translationOutput")).getText()).to.eventually.equal(expectedMessage);
    });

};