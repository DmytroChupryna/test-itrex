import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import { NotFoundComponent } from './not-found-component/not-found-component.component';


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', loadChildren: 'app/search-page/searchpage.module#SearchModule'},
  // { path: 'contacts', loadChildren: 'app/contacts/contacts.module#contactsModule'},
  { path: '**', component: NotFoundComponent},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
