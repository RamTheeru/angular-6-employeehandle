import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable(
  {
    providedIn:'root'
  }
)
export class DepartmentService {
  array=[];
departmentList : AngularFireList<any>;
  constructor(private firebase : AngularFireDatabase) {
    this.departmentList=this.firebase.list('departments');
    this.departmentList.snapshotChanges().subscribe(
      list=>{
        this.array=list.map(item=>{
        return {
            $key:item.key,
            ...item.payload.val()
          };
          });
      });
      console.log(this.array);
   }

  

}