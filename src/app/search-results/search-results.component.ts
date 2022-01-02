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
  famFriendly: boolean;
  lowPrice: number;
  highPrice: number;

  constructor(private eventService: EventService) { }

  ngOnInit() {

  }

  onSearch(searchTerm: string, familyFriendlyFilter: String) {
    if(familyFriendlyFilter == "familyFriendly") {
      this.famFriendly = true;
    } else {
      this.famFriendly = false;
    }

    if(!searchTerm) {
      if(familyFriendlyFilter == "none") {
        this.eventService.findAll().subscribe(allEvents => 
          {this.searchedEvents = allEvents});
      } else {
        this.eventService.viewAllFamFriendly(this.famFriendly).subscribe(famFriendCost => 
          {this.searchedEvents = famFriendCost});
      }
    }

    if(searchTerm) {
      if(familyFriendlyFilter == "none") {
        this.eventService.searchByKeywordNoFilter(searchTerm).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else {
        this.eventService.searchByKeywordFamFriendly(searchTerm, this.famFriendly).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      }
    }  
  }
}


