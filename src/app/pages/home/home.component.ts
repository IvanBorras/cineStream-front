import { Component } from '@angular/core';
import { DivisaPipe } from '../../pipes/divisa.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DivisaPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
