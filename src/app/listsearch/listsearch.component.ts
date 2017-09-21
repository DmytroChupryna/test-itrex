import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LocalStorageUpdateService} from "../services/local-storage-update.service";

@Component({
  selector: 'app-listsearch',
  templateUrl: './listsearch.component.html',
  styleUrls: ['./listsearch.component.css']
})
export class ListsearchComponent implements OnInit {


  @Input() listSearch: any[] = [];
  @Input() listname: string = 'flight';
  @Output() emitDelete: EventEmitter<any> = new EventEmitter();

  constructor(
      private lsUpdate: LocalStorageUpdateService,
  ) { }

  ngOnInit() {
  }
  deleteItem(name,i){
    this.lsUpdate.deleteItem(name,i);
    this.emitDelete.emit();
  }

}
