import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MdCoreModule } from '@angular2-material/core';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdProgressBarModule} from '@angular2-material/progress-bar';

import {AppComponent} from "./app.component";
import {AppMain} from "./main/main";
import {AppFooter} from "./footer/footer";
import {AppHeader} from "./header/header";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([], { useHash: true }),
        FormsModule,
        MdCoreModule.forRoot(),
        MdToolbarModule.forRoot(),
        MdIconModule.forRoot(),
        MdCardModule.forRoot(),
        MdButtonModule.forRoot(),
        MdButtonToggleModule.forRoot(),
        MdProgressCircleModule.forRoot(),
        MdProgressBarModule.forRoot(),
        MdTabsModule.forRoot()],
    declarations: [AppComponent, AppMain, AppFooter, AppHeader],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}