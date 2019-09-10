import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Injectable()
export class EmployeeService {

  constructor() { }
  form : FormGroup = new FormGroup({
    $key : new FormControl(null),
    fullname : new FormControl('',Validators.required),
    gender :  new FormControl('1'),
    email : new FormControl('',Validators.email),
    phone : new FormControl('',[Validators.required,Validators.minLength(10)]),
    department :  new FormControl(0),
    city :  new FormControl(''),
    hireDate :  new FormControl(''),
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
    hireDate:'',
    isPermanent:false

  });
}
}