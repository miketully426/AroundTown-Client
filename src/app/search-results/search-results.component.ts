import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Event } from '../model/event'
import { EventService } from '../service/event-service.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(private eventService: EventService) { }

  ngOnInit() {

  }

  onSearch(searchTerm: string, familyFriendlyFilter: String, priceFilter: string) {
    if(familyFriendlyFilter == "familyFriendly") {
      this.famFriendly = true;
    } else {
      this.famFriendly = false;
    }
     
    if(priceFilter == "free") {
      this.lowPrice = 0;
    } else if(priceFilter == "$") {
      this.lowPrice = 1;
      this.highPrice = 26;
    } else if(priceFilter == "$$") {
      this.lowPrice = 26;
      this.highPrice = 51;
    } else if(priceFilter == "$$$") {
      this.lowPrice = 51;
      this.highPrice = 76;
    } else if(priceFilter == "$$$$") {
      this.lowPrice = 76;
      this.highPrice = 101;
    }else if(priceFilter == "$$$$$") {
      this.lowPrice = 100;
    }   

  
    if(!searchTerm) {
        if(priceFilter == "none" && familyFriendlyFilter == "none") {
          this.eventService.findAll().subscribe(allEvents => 
            {this.searchedEvents = allEvents});
        } else if (priceFilter == "none") {
          this.eventService.viewAllFamFriendly(this.famFriendly).subscribe(famFriendly => 
            {this.searchedEvents = famFriendly});
        } else if(familyFriendlyFilter == "none") {
            this.eventService.viewAllByPrice(this.lowPrice, this.highPrice).subscribe(allEventCost => {this.searchedEvents = allEventCost});  
        } else {
          this.eventService.viewAllByFamFriendlyAndPrice(this.famFriendly, this.lowPrice, this.highPrice).subscribe(famFriendCost => 
            {this.searchedEvents = famFriendCost});
        }
    }

    if(searchTerm) {
      if(priceFilter == "none" && familyFriendlyFilter == "none") {
        this.eventService.searchByKeywordNoFilter(searchTerm).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(priceFilter == "none") {
        this.eventService.searchByKeywordFamFriendly(searchTerm, this.famFriendly).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(familyFriendlyFilter == "none") {
        this.eventService.searchByKeywordPrice(searchTerm, this.lowPrice, this.highPrice).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else {
        this.eventService.searchByKeywordFamFriendlyPrice(searchTerm, this.famFriendly, this.lowPrice, this.highPrice).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      }
    }  
    this.highPrice = null;

  }

}