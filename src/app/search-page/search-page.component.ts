import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public typeForm:string ;


  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
        this.typeForm = params["item"];
    });
  }

}
