import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.scss']
})
export class UpdateUserDialogComponent implements OnInit {

  public name:string = "";

  constructor(private _userService: UserService, private snackBar: MatSnackBar, private dialog: MatDialog, public dialogRef: MatDialogRef<UpdateUserDialogComponent>) { }

  ngOnInit(): void {
  }

  isNull(){
    console.log(this.name);
    if (this.name != ""){
      let data = {name: this.name, job: ""};
      this._userService.updateUser(data).subscribe((result) => {
        console.warn(result);
        this.snackBar.open("User Successfully Updated!!", "OK", {duration: 2000});
        this.dialogRef.close();
    });
    }
    else{
      this.snackBar.open("Some fields are empty", "OK", {duration: 2000});
    }
  }

}
