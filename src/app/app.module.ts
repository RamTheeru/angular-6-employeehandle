import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './employees/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './employees/shared/employee.service';
import {environment} from './environment';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MaterialModule,ReactiveFormsModule,BrowserAnimationsModule,AngularFireDatabaseModule,AngularFireModule.initializeApp(environment.firebaseConfig) ],
  declarations: [ AppComponent, HelloComponent, EmployeesComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
