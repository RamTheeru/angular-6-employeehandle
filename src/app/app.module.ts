import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from './employees/material/material.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './employees/shared/employee.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MaterialModule ],
  declarations: [ AppComponent, HelloComponent, EmployeesComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
