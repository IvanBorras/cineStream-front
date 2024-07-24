/*import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Pipe({
  name: 'filterVehicles',
  standalone: true
})
export class FilterVehiclesPipe implements PipeTransform {

  transform(value: Movie[], filtro: string): Movie[] {
    return value.filter(x=> x.title.toLowerCase().includes(filtro) || x.thema.toLocaleLowerCase().includes(filtro))
  }

}
*/