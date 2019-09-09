import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments =[
    {id:2,value:'Administration'},
        {id:3,value:'Support'},
         {id:4,value:'Cleaning'}
  ];
  constructor(private empServ:EmployeeService) { }

  ngOnInit() {
  }

}