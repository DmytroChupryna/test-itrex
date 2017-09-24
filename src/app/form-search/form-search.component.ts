import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
// import {Validators, FormBuilder} from "@angular/forms";
import {LocalStorageUpdateService} from "../services/local-storage-update.service";
import {Searchmodel} from "../models/searchmodel";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {


  @Input() typeForm: string = 'flight';

  @Output() refresh: EventEmitter<any> = new EventEmitter();



  submitted = false;
  public error: boolean = false;
  public success: boolean = false;
  constructor(
      private lsUpdate: LocalStorageUpdateService,
      // private fb: FormBuilder
  ) { }

  ngOnInit() {}



  formSubmit(event,obj:Searchmodel){
    this.lsUpdate.addToList(obj);
    this.submitted = true;
  }


}
