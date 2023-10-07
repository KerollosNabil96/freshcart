import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../products Services/products-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartServicesService } from '../cart-services/cart-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productId : any ;
  DetailsData:any={}
  constructor(private _ActivatedRoute:ActivatedRoute ,private  _ProductsDataService:ProductsDataService , private _CartServicesService:CartServicesService , private _ToastrService:ToastrService){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (param)=>{
      this.productId= param.get('id');
      console.log(param.get('id'))
    }
  })
this._ProductsDataService.getDetails(this.productId).subscribe({
  next:(response)=>{
    console.log(response.data)
    this.DetailsData=response.data
  }
})
}
openCart(id:string):void{
  this._CartServicesService.addToCart(id).subscribe({
    next:(response)=>{
      console.log(response)
      this._CartServicesService.cartNumber.next(response.numOfCartItems)
      this._ToastrService.success(response.message)
    }
  })
}
detailsSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay:true ,
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

}
