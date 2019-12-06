import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AjanuwWidgetsModule } from 'ajanuw-widgets-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AjanuwWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
