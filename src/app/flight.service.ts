import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private myFlights: Flight[] = [
    {flightNumber: "1827", origin: "Houston, TX", destination: "New York, New York"},
    {flightNumber: "1935", origin: "Denver, CO", destination: "Miami, Florida"},

  ];

  constructor(private http: HttpClient) { }

  public getMyFlights() : Flight[]{
    return this.myFlights;
  }
}
