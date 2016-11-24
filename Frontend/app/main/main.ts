import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: require("./main.html"),
    styles: [require("./main.css")]
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