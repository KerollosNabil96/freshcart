import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/products Services/products-data.service';

@Component({
  selector: 'app-catiegories',
  templateUrl: './catiegories.component.html',
  styleUrls: ['./catiegories.component.scss']
})
export class CatiegoriesComponent implements OnInit {
  categoriesData:any[]=[]
  constructor(private _ProductsDataService:ProductsDataService){}
ngOnInit(): void {
  this._ProductsDataService.getCatiegories().subscribe({
    next:(response)=>{
      this.categoriesData = response.data
    },
    error(err){
      console.log(err)
    }
  })
}
}
