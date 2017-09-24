import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {LocalStorageUpdateService} from "../services/local-storage-update.service";
import {Searchmodel} from "../models/searchmodel";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public typeForm:string ;
  public listHistorysearch: Searchmodel[] = [];


  constructor(
      private uppdate:LocalStorageUpdateService,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.typeForm = params["item"];
    });
    this.listHistorysearch = this.uppdate.getData();
  }

  refresh(){
    this.listHistorysearch = this.uppdate.getData();
  }






}
