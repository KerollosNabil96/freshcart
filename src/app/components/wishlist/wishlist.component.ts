import { Component, OnInit } from '@angular/core';
import { CartServicesService } from 'src/app/cart-services/cart-services.service';
import { WishServicesService } from 'src/app/wishList Services/wish-services.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishData : any 
  wishListData:any[]=[]

  constructor (private _WishServicesService:WishServicesService ){}
ngOnInit(): void {
    this._WishServicesService.getWishList().subscribe({
      next:(response)=>{
        console.log('wish Data :' , response.data)
        this.wishData = response.data
        const newData= response.data.map((item:any)=>item.id)
        this.wishListData= newData

      }
    })
}
deleteWishItem(id:String){
  this._WishServicesService.wishListRemove(id).subscribe({
    next:(response)=>{
      console.log(response)
      this.wishData = response.data
    }
  })
}

}
