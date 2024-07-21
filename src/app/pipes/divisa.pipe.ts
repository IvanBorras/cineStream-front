import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisa',
  standalone: true
})
export class DivisaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
