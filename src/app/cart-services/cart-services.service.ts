import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  headrsToken : any ={
    Token: localStorage.getItem('token')
  }
  

  constructor(private _HttpClient:HttpClient) { }
  cartNumber : BehaviorSubject<number>= new BehaviorSubject(0)

  addToCart(id:string):Observable<any>{
    return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      productId: id 
    },
    {
      headers : this.headrsToken
    }
    )
  }
  getCartData():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart` ,
    {
      headers:this.headrsToken
    }
    )
  }

  removeItem(id:any):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
    {
      headers:this.headrsToken
    }
    )
  }

  updateItem(id:any , countNo:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
    {
      count: countNo ,
    },
    {
      headers:this.headrsToken
    }
    )
  }

  Checkout(cartId:string , objectData:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://github.com/KerollosNabil96/freshcart.git`,
    {
      shippingAddress: objectData
    },
    {
      headers:this.headrsToken
    }
    )
    
  }

}
