import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/auth-services/auth-services.service';
import { LogInComponent } from '../log-in/log-in.component';



@Component({
  selector: 'app-registier',
  templateUrl: './registier.component.html',
  styleUrls: ['./registier.component.scss']
})
export class RegistierComponent {
  errorMsg : string = ''
  spinnerloading:boolean= false
  constructor(private _AuthServicesService:AuthServicesService , private _Router: Router){}
  registerForm = new FormGroup({
    name : new FormControl("" , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email : new FormControl("" , [Validators.email , Validators.required ]),
    password : new FormControl("" , [Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    rePassword : new FormControl("",),
    phone : new FormControl("" , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]  ),
  } ,{validators: [this.repaswwordValidation]}as FormControlOptions )

  repaswwordValidation(group : FormGroup){
    const password = group.get('password')
    const rePassword = group.get('rePassword')

    if(rePassword?.value == ''){
      rePassword?.setErrors({requierd:true})
    }
    else if (password?.value !== rePassword?.value){
      rePassword?.setErrors({missMatch:true})
    }
  }


handelform():void{
this.spinnerloading=true
  if(this.registerForm.valid){
    console.log(this.registerForm.get('name'));
    this._AuthServicesService.registerData(this.registerForm.value).subscribe({
      next:(response)=>{
        console.log(response)
        if(response.message="success"){
          this._Router.navigate(['/login'])
          this.spinnerloading =false
        }
      },
      error:(err)=>{
        console.log(err)
        this.errorMsg=err.error.message;
        this.spinnerloading = false;
      },
    })
  }
}

}
