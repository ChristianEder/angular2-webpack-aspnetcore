import chai = require("chai");
import chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

export abstract class Page {
    protected expect = chai.expect;

    abstract goTo(): webdriver.promise.Promise<any>;
}