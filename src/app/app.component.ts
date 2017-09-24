import {Component, OnInit} from '@angular/core';
import {LocalStorageUpdateService} from "./services/local-storage-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(){}


  refresh(tab:string){
    // this.listSearchData = this.lsUpdate.getLocalStorage(tab);
  }

}
