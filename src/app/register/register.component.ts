import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  resgisterForm: FormGroup = new FormGroup(
    {
      'first_name': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      'last_name': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'age': new FormControl(null,[Validators.required,Validators.min(16),Validators.max(60)]),
      'password': new FormControl(null,[Validators.required]),
    }
  )
 isRegister:boolean=false
 massgeSucses:boolean=false
 massgeError:string=``
  constructor( private _AuthService:AuthService, private _Router:Router) { 
  
  }

  ngOnInit(): void {
  }
  onSubmit(data:any){
 this.isRegister=true

    this._AuthService.register(data.value).subscribe((res)=>{
      if (res.message==='success') {
        this.massgeSucses=true
         this.isRegister=false


     
      } else {

       this. massgeError=  res.errors.email.message
      }

    })
  }
  caler(){
 

  }

}
