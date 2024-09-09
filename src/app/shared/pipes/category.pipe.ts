import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Front-end': return 'view_timeline';
      case 'Back-end': return 'terminal';
    }
    return 'code';
  }

}
