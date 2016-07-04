import {bootstrap} from 'angular2/platform/browser';
import {Component} from "angular2/core";

import {AppHeader} from "./header/header";
import {AppFooter} from "./footer/footer";
import {AppMain} from "./main/main";

@Component({
    selector: 'app',
    template: `
<app-header></app-header>
<app-main></app-main>
<app-footer></app-footer>
`,
    styles: [``],
    directives: [AppHeader, AppMain, AppFooter]
})
class App {
}

bootstrap(App, []);