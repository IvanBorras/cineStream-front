import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies',
  standalone: true
})
export class FilterMoviesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
