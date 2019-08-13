import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventBookingComponent } from './event-booking/event-booking.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'eventListing',
    pathMatch: 'full'
  },
  {
    path:'eventListing',
    component: EventListingComponent
  },
  {
    path:'eventBooking',
    component: EventBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
