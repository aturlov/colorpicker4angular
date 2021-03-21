import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AptColorPickerModule } from 'apt-color-picker'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AptColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
