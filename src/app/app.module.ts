import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgReduxModule, NgRedux } from "ng2-redux";
import {CounterActions} from "../redux/actions/counter-actions";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    CounterActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
