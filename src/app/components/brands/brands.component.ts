import { Component } from '@angular/core';
import { ProductsDataService } from 'src/app/products Services/products-data.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  brandsData:any[]=[]
  constructor(private _ProductsDataService:ProductsDataService){}
ngOnInit(): void {
  this._ProductsDataService.getBrands().subscribe({
    next:(response)=>{
      this.brandsData = response.data
    },
    error(err){
      console.log(err)
    }
  })
}
}
