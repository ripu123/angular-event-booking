import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventServicesService } from '../event-services.service';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {

  eventListing:any = [];

  constructor(private eventServicesService: EventServicesService,
    private router: Router) { }

  ngOnInit() {
      this.eventServicesService.getEventListing()
        .subscribe((data) => {
          console.log('this.eventListing', data);  
          this.eventListing = data['shopping-items'];
        });
  }

  search(data): void{
    this.eventListing = this.eventListing.filter(function(val) {
        return val.eventName.match(data);
    });
  }

  bookNow(ed){
    this.router.navigate(['/eventBooking', { eventData:JSON.stringify(ed) }]);
  }
}
