/*import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie'; // Ajusta la ruta si es necesario

@Pipe({
  name: 'filterMovies',
  standalone: true
})
export class FilterMoviesPipe implements PipeTransform {

  transform(value: Movie[], filtro: string): Movie[] {
    if (!value || !filtro) {
      return value;
    }

    const filtroLower = filtro.toLowerCase();

    return value.filter(movie =>
      movie.title.toLowerCase().includes(filtroLower) ||
      movie.thema.toLowerCase().includes(filtroLower)
    );
  }

}*/