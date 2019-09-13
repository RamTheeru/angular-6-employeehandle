import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material';

@Injectable()
export class NotificationService {

  constructor(public snackbar : MatSnackBar) { }
  config:MatSnackBarConfig={
   duration:3000,
   verticalPosition:'top',
   horizontalPosition:'right'

  };
success(msg){
  this.config['panelClass']=['notification','success'];
  this.snackbar.open(msg,'',this.config);
}
}