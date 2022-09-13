import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup(
    {
      
      'email': new FormControl(null),
      'password': new FormControl(null),
    }
  )
  constructor( private _AuthService:AuthService,private _Router:Router) { 
   

  }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    this._AuthService.login(data.value).subscribe((res)=>{
      if (res.message==='success') {
        localStorage.setItem("usertoken",res.token)
        this._Router.navigate(['/profile'])
        this._AuthService.saveCurentUser()

     
      } else {

      }
   })
  }

}
