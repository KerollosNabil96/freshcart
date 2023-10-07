import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartServicesService } from 'src/app/cart-services/cart-services.service';
import { ProductsDataService } from 'src/app/products Services/products-data.service';
import { ToastrService } from 'ngx-toastr';
import { WishServicesService } from 'src/app/wishList Services/wish-services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  productsData:any[]=[]
  categoriesData:any[]=[]
  cartData:any
  wishListData:any[]=[]
  term : string =""

constructor(private _ProductsDataService:ProductsDataService ,private _WishServicesService:WishServicesService, private _CartServicesService:CartServicesService,private _ToastrService:ToastrService){}

ngOnInit(): void {
    this._ProductsDataService.getData().subscribe({
      next:(response)=>{
        this.productsData = response.data
      },
      error(err){
        console.log(err)
      }
    })



    this._ProductsDataService.getCatiegories().subscribe({
      next:(response)=>{
        this.categoriesData = response.data
      },
      error(err){
        console.log(err)
      }
    })
    this._WishServicesService.getWishList().subscribe({
      next:(response)=>{
        console.log(response.data)
        const newData= response.data.map((item:any)=>item.id)
        this.wishListData= newData

      }
    })
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplayHoverPause:true,
  autoplaySpeed: 300 , 
  autoplay:true,
 items:1 , 
  nav: true
}

mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['prev', 'next'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}

openCart(id:string):void{
  this._CartServicesService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response)
      this._CartServicesService.cartNumber.next(response.numOfCartItems);
      console.log('hehege', this._CartServicesService.cartNumber)
      this._ToastrService.success(response.message)
    }
  })
}
addWishList(id:string){
  this._WishServicesService.addToWishList(id).subscribe({
    next:(response)=>{
      console.log(response)
      this.wishListData=response.data

      this._ToastrService.success(response.message)
    }
  })
}
removeWishList(id:string){
  this._WishServicesService.wishListRemove(id).subscribe({
    next:(response)=>{
      console.log(response)
      this.wishListData=response.data
      this._ToastrService.success(response.message)
    }
  })
}



}
