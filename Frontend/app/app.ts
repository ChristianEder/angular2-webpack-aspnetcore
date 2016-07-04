import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Component }    from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

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

bootstrap(App, [HTTP_PROVIDERS]);