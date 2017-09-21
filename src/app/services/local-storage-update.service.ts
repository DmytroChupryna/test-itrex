import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageUpdateService {

  constructor() { }



  rewriteStorage(name:string,obj:any){
    localStorage.setItem(name,JSON.stringify(obj));
  }

  getLocalStorage(nameList:string):any[]{
    if(localStorage.getItem(nameList)){
      return JSON.parse(localStorage.getItem(nameList))
    }else{
      return [];
    }
  }

  addNewItem(nameList:string,obj){
    let bufferObj = [];
    if(localStorage.getItem(nameList)){
      bufferObj = JSON.parse(localStorage.getItem(nameList));
    }
    bufferObj.push(obj);
    this.rewriteStorage(nameList,bufferObj)
  }

  deleteItem(nameList:string,index:number){
    let bufferObj = JSON.parse(localStorage.getItem(nameList));
    bufferObj.splice(index,1);
    this.rewriteStorage(nameList,bufferObj)
  }



}
