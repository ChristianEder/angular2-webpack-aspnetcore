import {Page} from "./page";
import {browser, element, by} from "protractor";

export class MainPage extends Page {

    goTo() {
        return browser.get("http://localhost:50775/");
    }

    translate(message: string) {
        element(by.id("translationInput")).clear();
        element(by.id("translationInput")).sendKeys(message);
        return element(by.id("translationButton")).click();
    }

    messageIs(message: string) {
        return this.expect(element(by.id("translationOutput")).getText()).to.eventually.equal(message);
    }
}