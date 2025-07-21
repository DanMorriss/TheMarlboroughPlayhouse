import { Component, input } from '@angular/core';

@Component({
    selector: 'app-booking-card',
    standalone: true,
    imports: [],
    templateUrl: './booking-card.component.html',
    styleUrl: './booking-card.component.css'
})
export class BookingCardComponent {
    title = input<string>('Card Title');
    imageUrl? = input<string>();
    description? = input<string>();
    price? = input<number>();
    buttonText = input<string>('Book Now');

    bookNow() {
        console.log('Booking confirmed for:', this.title);
    }
}
