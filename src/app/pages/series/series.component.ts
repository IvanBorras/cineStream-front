import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service'; // Asegúrate de que la ruta sea correcta
import { Series } from '../../interfaces/series'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Series[] = [];
  seriesHtml: string = ''; 

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe({
      next: (data: Series[]) => {
        this.series = data;
        this.generateSeriesHtml();
      },
      error: (err) => {
        console.error('Error series', err);
      }
    });
  }

  generateSeriesHtml(): void {
    this.seriesHtml = '';

    for (const serie of this.series) {
      this.seriesHtml += `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="${serie.image}" class="card-img-top" alt="${serie.title}">
            <div class="card-body">
              <h5 class="card-title">${serie.title}</h5>
              <p class="card-text">Año: ${serie.year}</p>
              <p class="card-text">Género: ${serie.thema}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
}