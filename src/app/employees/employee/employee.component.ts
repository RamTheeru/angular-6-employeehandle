import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {DepartmentService} from '../shared/department.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // departments =[
  //   {id:2,value:'Administration'},
  //       {id:3,value:'Support'},
  //        {id:4,value:'Cleaning'}
  // ];
  departments : [];
  constructor(private empServ:EmployeeService,private depServ : DepartmentService) { }

  ngOnInit() {
    this.empServ.getemployees();
    this.departments=this.depServ.array;
  }
onClear(){
  this.empServ.form.reset();
  this.empServ.initializeForm();
}
onSubmit(){
  if(this.empServ.form.valid)
  {
    this.empServ.insertEmployee(this.empServ.form.value);
  }
  this.empServ.form.reset();
  this.empServ.initializeForm();

}
}