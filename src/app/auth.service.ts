import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl="https://sticky-note-fe.vercel.app/"
  userlogin:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor( public _HttpClient:HttpClient, private _Router:Router) {
    if (localStorage.getItem("usertoken")) {
      this.saveCurentUser()
      
    } else {
      
    }
   }
  
  register(data:object):Observable<any>
  {
  return  this._HttpClient.post(this.BaseUrl+'signup',data)
  }
  login(data:object):Observable<any>
  {
  return  this._HttpClient.post(this.BaseUrl+'signin',data)
  }
  saveCurentUser()
  {
   
    let token= JSON.stringify(localStorage.getItem("usertoken"))
  let decode= jwtDecode(token)
  this.userlogin.next(decode)
    console.log(this.userlogin.value)
   

  }
  logout(){
    localStorage.removeItem("usertoken")
    this.userlogin.next(null)
   this. _Router.navigate(['/login'])
  }
}

