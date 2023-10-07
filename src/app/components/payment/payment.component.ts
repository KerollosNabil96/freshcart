import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartServicesService } from 'src/app/cart-services/cart-services.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  paymentId:any=``
  ngOnInit(): void {
      
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.paymentId=params.get('id')
        }
      })
  }
  constructor(private _CartServicesService:CartServicesService , private _ActivatedRoute:ActivatedRoute){}

  paymentData = new FormGroup({
    details : new FormControl (""),
    phone : new FormControl ("",[ Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city : new FormControl ("")
  })
  handelForm(){
    console.log(this.paymentData.value)
    this._CartServicesService.Checkout( this.paymentId,this.paymentData.value).subscribe({
      next:(Response)=>{
        console.log(Response)
        window.open(Response.session.url)
      }
    })
    
  }

}
