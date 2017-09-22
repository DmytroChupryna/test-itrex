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


  // @Input() configFormFields:

  @Output() refresh: EventEmitter<any> = new EventEmitter();

  public formSend = new Searchmodel(new Date(),new Date(),'','') ;


  submitted = false;
  public error: boolean = false;
  public success: boolean = false;
  constructor(
      private lsUpdate: LocalStorageUpdateService,
      // private fb: FormBuilder
  ) { }

  ngOnInit() {}



  formSubmit(event,obj:Searchmodel){

    this.submitted = true;



    // if(this.flightForm.status === 'VALID'){
    //   let objSend = {
    //     start:`${this.flightForm.value.startdate.getDay()} - ${this.flightForm.value.startdate.getMonth()} - ${this.flightForm.value.startdate.getFullYear()}`,
    //     end: `${this.flightForm.value.enddate.getDay()} - ${this.flightForm.value.enddate.getMonth()} - ${this.flightForm.value.enddate.getFullYear()}`,
    //     item1: this.flightForm.value.item1,
    //     item2: this.flightForm.value.item2
    //   };
    //   this.lsUpdate.addNewItem(listName,objSend);
    //   this.flightForm.reset();
    //   this.success = true;
    //   setTimeout(()=>{
    //     this.success = false;
    //   },3000)
    // }else{
    //   this.error = true;
    //   setTimeout(()=>{
    //     this.error = false;
    //   },3000)
    // }
    // this.refresh.emit();
  }


}
