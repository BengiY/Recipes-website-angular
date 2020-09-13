import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from './class/User';
import { recipe } from './class/recipe';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 gettAll()
 {
   return this.http.get<User[]>("http://localhost:54016//api/Users/GettAllUsers")
 }

 

 foundUser(u:User)
 {
   return this.http.post("http://localhost:54016//api/Users/UserFound",u)
 }
 addUser(u:User)
 {
   return this.http.post("http://localhost:54016//api/Users/AddUser",u);
 }
 
constructor(public http:HttpClient) { }

}

