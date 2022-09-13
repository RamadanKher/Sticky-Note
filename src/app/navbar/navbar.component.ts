import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
AuthService
AuthService
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=true
  constructor(private _AuthService:AuthService) { 
    this._AuthService.userlogin.subscribe((res)=>{
      if (res) {
       this. isLogin=false
      } else {
       this. isLogin=true
        
      }
    })
  }

  out(){
    this._AuthService.logout()
  }
  ngOnInit(): void {
 
  }
 

}
