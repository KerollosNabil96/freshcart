import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(products : any[] , term:string): any[] {
    return products.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase()) );
  }

}
