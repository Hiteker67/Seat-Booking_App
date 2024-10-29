import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BookingComponent {
  requestedSeats: number = 0; // Number of seats the user wants to book
  selectedSeats: string[] = []; // Array to hold selected seat IDs
  seatStatus: { id: string; status: boolean }[][]; // 2D array for seat status

  constructor() {
    // Initialize seatStatus with 80 seats organized in 10 rows of 8 seats
    this.seatStatus = Array.from({ length: 10 }, (_, rowIndex) =>
      Array.from({ length: 8 }, (_, seatIndex) => ({
        id: `R${rowIndex + 1}S${seatIndex + 1}`, // Seat ID format R1S1, R1S2, etc.
        status: false // Initially, all seats are available
      }))
    );
  }

  // Book the selected seats if they match the requested amount
  bookSeats() {
    // Check if requested seats can be booked
    if (this.selectedSeats.length !== this.requestedSeats) {
      alert(`Please select exactly ${this.requestedSeats} seats.`);
      return;
    }

    // Mark the selected seats as booked
    this.selectedSeats.forEach(seatId => {
      for (let row of this.seatStatus) {
        for (let seat of row) {
          if (seat.id === seatId) {
            seat.status = true; // Mark seat as booked
          }
        }
      }
    });

    // Reset selected seats and requested seats
    alert(`Successfully booked seats: ${this.selectedSeats.join(', ')}`);
    this.resetSelection(); // Reset after booking
  }

  // Toggle seat selection
  selectSeat(rowIndex: number, seatIndex: number) {
    const seat = this.seatStatus[rowIndex][seatIndex];
    if (!seat.status) {
      // If the seat is available, select it
      if (this.selectedSeats.length < this.requestedSeats) {
        this.selectedSeats.push(seat.id);
      } else {
        alert(`You can only select ${this.requestedSeats} seats.`);
      }
    } else {
      // If the seat is already booked, deselect it
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat.id);
    }
  }

  // Reset selected seats and requested seats
  resetSelection() {
    this.selectedSeats = [];
    this.requestedSeats = 0;
  }
}
