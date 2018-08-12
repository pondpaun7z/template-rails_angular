import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SecondaryComponent } from './components/secondary/secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
