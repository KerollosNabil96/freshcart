import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/cart-services/cart-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cardData : any = {}
constructor(private _CartServicesService:CartServicesService){}
ngOnInit(): void {
    this._CartServicesService.getCartData().subscribe({
      next:(response)=>{
        this.cardData= response
        console.log(response)
      }
    })
    
}
deleteCartItem(id:String):void{
  this._CartServicesService.removeItem(id).subscribe({
    next:(response)=>{
      console.log('data', this.cardData)
      this._CartServicesService.cartNumber.next(response.numOfCartItems)
      this.cardData= response
    }
  })
  
}

increaseItem(id:string , count:number):void{
  this._CartServicesService.updateItem(id , count).subscribe({
    next:(response)=>{
      this.cardData= response
    }
  })
}

reduceItem(id:string , count:number):void{
  if(count>0){
    this._CartServicesService.updateItem(id , count).subscribe({
      next:(response)=>{
        this.cardData= response
      }
    })
  }
}


}
