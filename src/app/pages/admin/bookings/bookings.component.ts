import { Component } from '@angular/core';
import { DivisaPipe } from '../../../pipes/divisa.pipe';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [DivisaPipe],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

}
