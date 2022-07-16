import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})

export class UserRegComponent implements OnInit{

  constructor(private _userService: UserService, private snackBar: MatSnackBar) { }
  private isSuccess:boolean = true;
  public nameInput:string = "";
  public jobInput:string = "";

  ngOnInit(): void {
  }

  
  addUser(){
    if(this.nameInput != "" && this.jobInput != ""){
      // console.log(this.nameInput + " " + this.jobInput);

      let data = {name: this.nameInput, job: this.jobInput};
      this._userService.adduser(data).subscribe((result) => {
        // console.warn(result);
        this.snackBar.open("User Successfully Inserted!!", "OK", {duration: 5000});
      });

    }
    else{
      this.snackBar.open("Some fields are empty", "OK", {duration: 5000});
    }
  }

}
