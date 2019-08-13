import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventServicesService } from './event-services.service';
import { FilterPipe }from './filter.pipe';
import { EventBookingComponent } from './event-booking/event-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListingComponent,
    FilterPipe,
    EventBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EventServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
