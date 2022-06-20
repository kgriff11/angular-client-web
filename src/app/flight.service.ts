import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public getFlightsData() : Observable<Flight[]>{
    let url = "http://localhost:8080/flights";
    return this.http.get<Flight[]>(url);
  }
}
