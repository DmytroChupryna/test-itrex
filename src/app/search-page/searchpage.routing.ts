import {Routes, RouterModule} from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {SearchPageComponent} from "./search-page.component";



const searchRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: SearchPageComponent
        },{
            path: ':item',
            component: SearchPageComponent
        }]
    },
];

export const searchRouting: ModuleWithProviders = RouterModule.forChild(searchRoutes);

