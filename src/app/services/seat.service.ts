// src/app/services/seat.service.ts
import { Injectable } from '@angular/core';
import { Seat } from '../models/seat.model';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  seats: Seat[] = [];

  constructor() {
    this.initializeSeats();
  }

  initializeSeats() {
    for (let i = 1; i <= 80; i++) {
      this.seats.push(new Seat(i, false)); // Mark all seats as available initially
    }
    // Example: Pre-book some seats to simulate a partially filled coach
    [5, 10, 15].forEach((id) => (this.seats[id - 1].status = true));
  }

  // Check seat availability and reserve seats
  bookSeats(requestedSeats: number): number[] | null {
    let bookedSeats: number[] = [];

    for (let i = 0; i < this.seats.length && bookedSeats.length < requestedSeats; i++) {
      if (!this.seats[i].status) {
        bookedSeats.push(this.seats[i].id);
        this.seats[i].status = true;
      }
    }

    return bookedSeats.length === requestedSeats ? bookedSeats : null;
  }

  // Get current seat status
  getSeats() {
    return this.seats;
  }
}
