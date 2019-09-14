import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
array=[];
  constructor(private empServ : EmployeeService,
  private firebase : AngularFireDatabase) { }
employeeList : AngularFireList<any>;
  ngOnInit() {
    this.employeeList=this.firebase.list('employees');
    this.employeeList.snapshotChanges().subscribe(
         list=>{
        this.array=list.map(item=>{
        return {
            $key:item.key,
            ...item.payload.val()
          };
          });
      }
    );
    console.log(this.employeeList)
  console.log(this.array)
  }
  

}