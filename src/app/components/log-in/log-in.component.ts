import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/auth-services/auth-services.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {


  errorMsg : string = ''
  spinnerloading:boolean= false

  constructor(private _AuthServicesService:AuthServicesService , private _Router: Router){}
  loginForm = new FormGroup({
    email : new FormControl("" , [Validators.email , Validators.required ]),
    password : new FormControl("" , [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  })


login():void{
  this.spinnerloading= true

  if(this.loginForm.valid){
    console.log(this.loginForm.get('name'));
    this._AuthServicesService.login(this.loginForm.value).subscribe({
      next:(response)=>{
        console.log(response)
        if(response.message="success"){
          localStorage.setItem('token', response.token)
          this._Router.navigate(['/home'])
          this.spinnerloading= false
        }
      },
      error:(err)=>{
        console.log(err)
        this.errorMsg=err.error.message;
        this.spinnerloading= false ;
      }
    })
  }
}
}
