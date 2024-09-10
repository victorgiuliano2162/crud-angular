import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Front-end': return 'computer';
      case 'Back-end': return 'terminal';
    }
    return 'code';
  }

}
