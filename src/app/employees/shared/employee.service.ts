import { Injectable } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Injectable()
export class EmployeeService {

  constructor() { }
  form : FormGroup = new FormGroup({
    $key : new FormControl(null),
    fullname : new FormControl(''),
    gender :  new FormControl('1'),
    email : new FormControl(''),
    phone : new FormControl(''),
    department :  new FormControl(0),
    city :  new FormControl(''),
    hireDate :  new FormControl(''),
    isPermanent :  new FormControl(false)
  })

}