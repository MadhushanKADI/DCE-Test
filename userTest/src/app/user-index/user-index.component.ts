import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';


@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  public users:any;
  public page:number = 1;

  displayedColumns: string[] = ['id', 'first_name', 'last_name','email', 'avatar', 'update' ,'remove'];


  constructor(private _userService: UserService, private snackBar: MatSnackBar, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataload();
  }

  dataload(){
    this._userService.getUser(this.page)
        .subscribe(date => this.users = date);
  }

  pagePrevious(){
    if(this.page > 1){
      this.page =this.page - 1;
      this.dataload();
    }
  }

  pageNext(){
    if(this.page < this.users.total_pages){
      this.page =this.page + 1;
      this.dataload();
    }
  }

  removeUser(id:number){
    this._userService.deleteUser(id).subscribe((result) => {
      console.warn(result);
      let snakbarRef = this.snackBar.open("User Successfully Deleted!!", "ok", {duration: 1500});
    
      snakbarRef.afterDismissed().subscribe(() => {
        this.dataload();
      })

    });
  }

  updateUser(element:any){
    console.log(element.id);
    this._userService.setId(element.id);
    this.dialog.open(UpdateUserDialogComponent);
  }
  
}
