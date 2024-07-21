import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSeries',
  standalone: true
})
export class FilterSeriesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
