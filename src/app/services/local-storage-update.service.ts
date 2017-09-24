import { Injectable } from '@angular/core';
import {Searchmodel} from "../models/searchmodel";

@Injectable()
export class LocalStorageUpdateService {


  public searchListmodel: Searchmodel[]  = [];

  constructor() { }

  addToList(obj:Searchmodel){
    this.searchListmodel.push(obj);
    this.rewriteStorage(this.searchListmodel)
  }

  rewriteStorage(obj:Searchmodel[]){
    localStorage.setItem('listData',JSON.stringify(obj));
  }

  getData():Searchmodel[]{
    if(localStorage.getItem('listData')){
      this.searchListmodel = JSON.parse(localStorage.getItem('listData'))
    }
    return this.searchListmodel;
  }




  //
  // getLocalStorage(nameList:string):any[]{
  //   if(localStorage.getItem(nameList)){
  //     return JSON.parse(localStorage.getItem(nameList))
  //   }else{
  //     return [];
  //   }
  // }




  deleteItem(index:number){
    this.searchListmodel.splice(index,1);
    this.rewriteStorage(this.searchListmodel)
  }



}
