import 'hammerjs';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule} from '@angular/material';

import {AppComponent}  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule, // TODO Move
        MdIconModule,
        MdCheckboxModule,
        MdInputModule,
        MdMenuModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}