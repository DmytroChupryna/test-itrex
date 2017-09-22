import { Injectable } from '@angular/core';
import {SearchListmodel} from "../models/searchListModels";

@Injectable()
export class LocalStorageUpdateService {


  public searchListmodel: SearchListmodel ;

  constructor() { }








  rewriteStorage(obj:SearchListmodel){
    localStorage.setItem('listData',JSON.stringify(obj));
  }

  getLocalStorage(nameList:string):any[]{
    if(localStorage.getItem(nameList)){
      return JSON.parse(localStorage.getItem(nameList))
    }else{
      return [];
    }
  }

  addNewItem(obj){
    this.rewriteStorage(obj);
  }

  deleteItem(nameList:string,index:number){
    let bufferObj = JSON.parse(localStorage.getItem(nameList));

    bufferObj.splice(index,1);
    this.rewriteStorage(bufferObj)
  }



}
