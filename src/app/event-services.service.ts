import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServicesService {

  eventListingUrl = 'assets/data/data.json';
  constructor(private http: HttpClient) { }

  getEventListing() {
    return this.http.get(this.eventListingUrl);
  }
}
