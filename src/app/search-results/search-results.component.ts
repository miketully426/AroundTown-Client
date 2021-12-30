import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
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

  searchByKeyword(searchTerm: string, filter: string) {
    // if(!searchTerm) { //change this to handle no search term WITH a filter
    //   this.eventService.findAll().subscribe(searchData => {this.searchedEvents = searchData});
    // } else {
      this.eventService.viewMatchingEventsByKeyword(searchTerm.toLowerCase(), filter).subscribe(searchData => {
        this.searchedEvents = searchData;
      });
    }
  // }

}


