/// <reference path="../../typings/custom.d.ts" />
import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';


@Component({
    selector: 'app-main',
    template: require("./main.html"),
    styles: [require("./main.css")],
    directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class AppMain {
    input = "Hallo";
    output = "";
    translate() {
        if (this.input === "Hallo") {
            this.output = "Hello";
        } else {
            this.output = "Sorry, I do not know how to translate '" + this.input + "'";
        }
    }
}