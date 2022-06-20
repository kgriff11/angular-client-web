import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.css'],
  providers: [FlightService]
})
export class MyFlightsComponent implements OnInit {
  public flights: Flight[];


  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getMyFlights();
  }

}
