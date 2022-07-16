import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable()
export class UserService {
  public id:number = 0;
  private _url: string = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  getUser(page:number): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url + "/users?page=" + page);
  }

  adduser(data:any){
    return this.http.post(this._url + "/users", data);
  }

  deleteUser(uid:number){
    return this.http.delete(this._url + "/users/" + uid);
  }
  
  updateUser(data:any){
    return this.http.put(this._url + "/users/" + this.id, data);
  }

  setId(id:number){
    this.id = id;
  }

}
