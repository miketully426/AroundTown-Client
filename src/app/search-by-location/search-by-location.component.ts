import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event-service.service';
import { Event } from '../model/event';


@Component({
  selector: 'app-search-by-location',
  templateUrl: './search-by-location.component.html',
  styleUrls: ['./search-by-location.component.css']
})
export class SearchByLocationComponent implements OnInit {

  searchedEvents: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  searchByKeyword(searchTerm: string) {
    this.eventService.viewMatchingEventsByKeyword(searchTerm.toLowerCase()).subscribe(searchData => {
      this.searchedEvents = searchData;
    });
  }

}
