import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable()
export class EmployeeService {
employeeList : AngularFireList<any>;
  constructor( private firebase : AngularFireDatabase) { }
  form : FormGroup = new FormGroup({
    $key : new FormControl(null),
    fullname : new FormControl('',Validators.required),
    gender :  new FormControl('1'),
    email : new FormControl('',Validators.email),
    phone : new FormControl('',[Validators.required,Validators.minLength(10)]),
    department :  new FormControl(0),
    city :  new FormControl(''),
   // hireDate :  new FormControl(''),
    isPermanent :  new FormControl(false)
  })
initializeForm(){
  this.form.setValue({
    $key:null,
    fullname:'',
    gender:'',
    email:'',
    phone:'',
    department:0,
    city:'',
    //hireDate:'',
    isPermanent:false

  });
}
getemployees(){
  this.employeeList=this.firebase.list('employees');

  return this.employeeList.snapshotChanges();
}
insertEmployee(employee){
  console.log(employee);
  this.employeeList.push({
    fullname : employee.fullname,
       gender:employee.gender,
    email:employee.email,
    phone:employee.phone,
    department:employee.department,
    city:employee.city,
    //hireDate:employee.hireDate,
    isPermanent:employee.isPermanent

  })

}
populateForm(employee){
  console.log(employee)
this.form.setValue(employee);
}
  updateEmployee(employee){
    this.employeeList.update(employee.$key,{
    fullname : employee.fullname,
       gender:employee.gender,
    email:employee.email,
    phone:employee.phone,
    department:employee.department,
    city:employee.city,
   // hireDate:employee.hireDate,
    isPermanent:employee.isPermanent
    });
  }
  deleteEmployee($key:string){
    this.employeeList.remove($key);
  }
}