import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';
import {AppMain} from "./main";

import {
    beforeEachProviders,
    inject,
    it
} from '@angular/core/testing';


describe('App', () => {
   
    beforeEachProviders(() => [
        AppMain
    ]);

    it('should be initialized with Hallo', inject([AppMain], (app: AppMain) => {
        expect(app.input).toEqual('Hallo');
        expect(app.output).toEqual('');
    }));

    it('should translate Hallo correctly', inject([AppMain], (app: AppMain) => {
        app.input = "Hallo";
        app.translate();
        expect(app.output).toEqual('Hello');
    }));

    it('should not translate other words', inject([AppMain], (app: AppMain) => {
        app.input = "Gemein";
        app.translate();
        expect(app.output).toEqual("Sorry, I do not know how to translate 'Gemein'");
    }));

});