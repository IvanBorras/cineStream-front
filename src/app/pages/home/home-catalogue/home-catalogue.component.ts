import { Component } from '@angular/core';
import { Movie } from '../../../interfaces/movie';
import { MovieService } from '../../../services/movie.service';
// import { DivisaPipe } from '../../pipes/divisa.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-catalogue',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './home-catalogue.component.html',
  styleUrl: './home-catalogue.component.css'
})
export class HomeCatalogueComponent {
  movies: Movie[] =[]
  filtro: string = ""

  constructor(private movieService: MovieService){
    movieService.getAll().subscribe({
      next: (response)=>{
        this.movies = response as Movie[]
      },
      error: ()=>{}
    })
  }
}