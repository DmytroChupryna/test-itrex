/**
 * Created by dmitrij on 22.09.17.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {searchRouting} from "./searchpage.routing";
import {SearchPageComponent} from "./search-page.component";
import {FormSearchComponent} from "../form-search/form-search.component";
import {ListsearchComponent} from "../listsearch/listsearch.component";
import {BsDatepickerModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";




@NgModule({
    declarations: [
        SearchPageComponent,
        FormSearchComponent,
        ListsearchComponent,
    ],
    imports: [
        CommonModule,
        searchRouting,
        FormsModule,
        BsDatepickerModule.forRoot()
    ],
    providers: [
    ],
})
export class SearchModule { }
