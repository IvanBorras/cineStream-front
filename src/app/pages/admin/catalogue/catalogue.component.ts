import { Component } from '@angular/core';
import { DivisaPipe } from '../../../pipes/divisa.pipe';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [DivisaPipe],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {

}
