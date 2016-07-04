import {bootstrap} from 'angular2/platform/browser';
import {Component} from "angular2/core";

import {AppHeader} from "./header/header";
import {AppFooter} from "./footer/footer";

@Component({
    selector: 'app',
    template: `
<app-header></app-header>
<div>Hello World App</div>
<app-footer></app-footer>
`,
    styles: [``],
    directives: [AppHeader, AppFooter]
})
class App {
}

bootstrap(App, []);

alert("recompile happend");