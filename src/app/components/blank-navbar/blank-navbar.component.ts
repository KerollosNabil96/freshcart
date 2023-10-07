import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServicesService } from 'src/app/cart-services/cart-services.service';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrls: ['./blank-navbar.component.scss']
})
export class BlankNavbarComponent implements OnInit {
  cartCount : number= 0 ;
  constructor(private _Router:Router , private _CartServicesService:CartServicesService){}
  ngOnInit(): void {
      this._CartServicesService.cartNumber.subscribe({
        next:(response)=>{
          this.cartCount=response
        }
      })
      this._CartServicesService.getCartData().subscribe({
        next:(response)=>{
         this._CartServicesService.cartNumber.next(response.numOfCartItems)
        }
      })
  }
  signout():void{
    localStorage.removeItem("token")
    this._Router.navigate(['/login'])
  }

}
