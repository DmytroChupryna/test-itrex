import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from "@angular/forms";

import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { CarsComponent } from './cars/cars.component';

import {LocalStorageUpdateService} from "./services/local-storage-update.service";
import { ListsearchComponent } from './listsearch/listsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    HotelsComponent,
    CarsComponent,
    ListsearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    LocalStorageUpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
