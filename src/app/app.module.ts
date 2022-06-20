import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './flight.service';
import { MyFlightsComponent } from './my-flights/my-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
