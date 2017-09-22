import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {LocalStorageUpdateService} from "./services/local-storage-update.service";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocalStorageUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
