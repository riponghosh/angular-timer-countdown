import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CountdownModule } from 'ngx-countdown';
// import {CountDown} from "ng2-date-countdown";
import { CountdownTimerModule } from 'ngx-countdown-timer';

@NgModule({
  declarations: [
    AppComponent,
    // CountDown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CountdownModule,
    CountdownTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
