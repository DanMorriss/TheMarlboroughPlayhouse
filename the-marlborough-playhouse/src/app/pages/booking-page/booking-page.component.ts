import { Component } from '@angular/core';
import { BookingCardComponent } from '../../components/booking-card/booking-card.component';

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [BookingCardComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {

}
