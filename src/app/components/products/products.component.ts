import { Component } from '@angular/core';
import { CartServicesService } from 'src/app/cart-services/cart-services.service';
import { ProductsDataService } from 'src/app/products Services/products-data.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productsData:any[]=[]
  term:string =''
constructor(private _ProductsDataService:ProductsDataService ,private _CartServicesService:CartServicesService,private _ToastrService:ToastrService){}

ngOnInit(): void {
    this._ProductsDataService.getData().subscribe({
      next:(response)=>{
        this.productsData = response.data
      },
      error(err){
        console.log(err)
      }
    })
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
}
