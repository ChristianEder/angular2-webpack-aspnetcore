/// <reference path="../../typings/custom.d.ts" />
import { Component } from '@angular/core';

var styles = require("./main.css")
console.log("Before styles");
console.log(styles);
console.log("After styles");

@Component({
    selector: 'app-main',
    template: require("./main.html"),
    styles: [require("./main.css")]
})
export class AppMain {
}