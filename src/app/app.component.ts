import { Component } from '@angular/core';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BookingComponent], // Import BookingComponent here
})
export class AppComponent {}
