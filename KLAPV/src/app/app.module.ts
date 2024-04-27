import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeComponent } from './we/we.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
