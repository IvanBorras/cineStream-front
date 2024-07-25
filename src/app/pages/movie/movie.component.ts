import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
 
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  moviesHtml: string = ''; 

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (data: Movie[]) => {
        this.movies = data;
        this.generateMoviesHtml();
      },
      error: (err) => {
        console.error('Error movies', err);
      }
    });
  }

  generateMoviesHtml(): void {
    this.moviesHtml = '';

    for (const movie of this.movies) {
      this.moviesHtml += `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">Año: ${movie.year}</p>
              <p class="card-text">Género: ${movie.thema}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
}