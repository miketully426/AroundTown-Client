import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event'
import { EventService } from '../service/event-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

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


