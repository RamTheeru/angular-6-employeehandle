import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {MatDialog,MatDialogConfig} from '@angular/material';
import {EmployeeComponent} from '../employee/employee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
array=[];
displayedColumns : string[]=['fullname','email','phone','city','actions'];
  constructor(private empServ : EmployeeService,
  private firebase : AngularFireDatabase,private dialog : MatDialog) { }
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
  onempCreate(){
    this.empServ.initializeForm();
    const config = new MatDialogConfig();
    config.disableClose=true;
    config.autoFocus=true;
    config.width='60%';
    this.dialog.open(EmployeeComponent,config);

  }
  

}