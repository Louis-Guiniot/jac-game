import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersProfile } from 'src/app/model/users-profile';
@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private myHttp:HttpClient) { }

  getUsers(): Observable<any>{
    return this.myHttp.get('http://localhost:3000/users');
  }

    
     postUser(user:UsersProfile){
        console.log(user);
        return this.myHttp.post('http://localhost:3000/users', user);
      }
      modifyUser(user: UsersProfile){
        return this.myHttp.put('http://localhost:3000/users/'+sessionStorage.getItem('id'), user);
      }
}