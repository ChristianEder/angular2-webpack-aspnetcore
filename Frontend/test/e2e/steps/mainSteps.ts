import {MainPage} from "./../pages/mainPage";
var mainPage = new MainPage();

export = function() {

    this.Given(/^I open the main page$/, () => mainPage.goTo());

    this.When(/^I translate "([^"]*)"$/, (message) => mainPage.translate(message));

    this.Then(/^The translation "([^"]*)" should be shown$/, (message) => mainPage.messageIs(message));

};