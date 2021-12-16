import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event'
import { EventService } from '../service/event-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  events: Event[];
  alphabetizedByName: Event[];
  searchedEvents: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.findAll().subscribe(data => {
      this.events = data;
      this.alphabetizedByName = this.events.sort(function(a, b) {return a.name.localeCompare(b.name)});
    });
  }

  search(searchTerm: string) {
    let matchingEvents: Event[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.events.length; i++) {
      for(let property in this.events[i]) {
          if(this.events[i][property].toString().toLowerCase().includes(searchTerm)) {
            matchingEvents.push(this.events[i]);
            break;
            
          }
      }  
    }
    this.searchedEvents = matchingEvents;
  }
}


