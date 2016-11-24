/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import {AppMain} from "./main";

describe('App', () => {

    it('should be initialized with Hallo', () => {
        var app = new AppMain();
        expect(app.input).toEqual('Hallo');
        expect(app.output).toEqual('');
    });

    it('should translate Hallo correctly', () => {
        var app = new AppMain();
        app.input = "Hallo";
        app.translate();
        expect(app.output).toEqual('Hello');
    });

    it('should not translate other words', () => {
        var app = new AppMain();
        app.input = "Gemein";
        app.translate();
        expect(app.output).toEqual("Sorry, I do not know how to translate 'Gemein'");
    });

});