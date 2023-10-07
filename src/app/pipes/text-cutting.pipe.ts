import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCutting'
})
export class TextCuttingPipe implements PipeTransform {

  transform(text: string): string {
    return     text.split(' ').slice(0,3).join(' ');
  }

}
