import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  sub:any;
  eventBookingData:any;
  model: any = {};
  noOfSeats: any = [];
  message:string;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log('this.route.data', this.route.params);
    this.route.paramMap.subscribe(value => {
      this.sub = value;
    });
    console.log('this.sub', JSON.parse(this.sub.params.eventData));
    this.eventBookingData = JSON.parse(this.sub.params.eventData);
  }

  onSubmit(data) {
    console.log("Entered Data Is : " + this.model);
    this.message = "Tickets Booked.";
    window.scrollTo(0, 0);
  }

  checkSeats(s){
    this.noOfSeats = [];
    for(var a=1; a<s; a++){
      this.noOfSeats.push(a);
    }
    console.log('this.noOfSeats', this.noOfSeats);
  }

}
