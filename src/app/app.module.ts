import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { RentalModule } from './rental/rental.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { UppercasePipe } from './common/pipes/uppercase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UppercasePipe
  ],
  imports: [
    AppRoutingModule,
    RentalModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
