import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../model/event'
import { EventService } from '../service/event-service.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { NgbCalendar, NgbDateStruct, NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';

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
  timeStr: String = "";
  amPm: String;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  model: NgbDateStruct;
  filterDate: {year:number, month: number, day: number};

  @ViewChild('dp', {static: false}) dp: NgbDatepicker;

  

  constructor(private eventService: EventService, private calendar: NgbCalendar) { }

  ngOnInit() {

  }

  public displayTime(time: any) {
    if(time.hour > 12 && time.hour != 24) {
      this.timeStr += (time.hour - 12).toString();
      this.amPm = "PM";
    } else if (time.hour == 24) {
      this.timeStr += (time.hour - 12).toString();
      this.amPm  = "AM";
    } else if (time.hour == 12) {
      this.timeStr += time.hour.toString();
      this.amPm = "PM";
    }else if (time.hour < 12) {
      this.timeStr += time.hour.toString();
      this.amPm = "AM";
    }

    if(time.minute == 0) {
      this.timeStr += ":00"
    } else {
      this.timeStr += ":" + time.minute.toString();
    }
    return this.timeStr + " " + this.amPm;
  }

  public resetValues() {
    this.timeStr = "";
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
        if(priceFilter == "none" && familyFriendlyFilter == "none" && !this.filterDate) {
          this.eventService.findAll().subscribe(allEvents => 
            {this.searchedEvents = allEvents});
        } else if (priceFilter == "none" && !this.filterDate) {
          this.eventService.viewAllFamFriendly(this.famFriendly).subscribe(famFriendly => 
            {this.searchedEvents = famFriendly});
        } else if(familyFriendlyFilter == "none" && !this.filterDate) {
            this.eventService.viewAllByPrice(this.lowPrice, this.highPrice).subscribe(allEventCost => {this.searchedEvents = allEventCost});  
        } else if(!this.filterDate) {
          this.eventService.viewAllByFamFriendlyAndPrice(this.famFriendly, this.lowPrice, this.highPrice).subscribe(famFriendCost => 
            {this.searchedEvents = famFriendCost});
        } else if(priceFilter == "none" && familyFriendlyFilter == "none" && this.filterDate) {
          this.eventService.viewAllByDate(this.filterDate).subscribe(allDate =>
              {this.searchedEvents = allDate});
        } else if(this.filterDate && priceFilter == "none") {
            this.eventService.viewAllByFamFriendlyAndDate(this.famFriendly, this.filterDate).subscribe(allFamFriendlyDate => 
              {this.searchedEvents = allFamFriendlyDate});
        } else if (this.filterDate && familyFriendlyFilter == "none"){
            this.eventService.viewAllByPriceAndDate(this.filterDate, this.lowPrice, this.highPrice).subscribe(allPriceDate => 
              {this.searchedEvents = allPriceDate});

        } else {(this.eventService.viewAllByFamFriendPriceAndDate(this.filterDate, this.lowPrice, this.highPrice, this.famFriendly)).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
        }
    }

    if(searchTerm) {
      if(priceFilter == "none" && familyFriendlyFilter == "none" && !this.filterDate) {
        this.eventService.searchByKeywordNoFilter(searchTerm).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(priceFilter == "none" && !this.filterDate) {
        this.eventService.searchByKeywordFamFriendly(searchTerm, this.famFriendly).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(familyFriendlyFilter == "none" && !this.filterDate) {
        this.eventService.searchByKeywordPrice(searchTerm, this.lowPrice, this.highPrice).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(!this.filterDate) {
        this.eventService.searchByKeywordFamFriendlyPrice(searchTerm, this.famFriendly, this.lowPrice, this.highPrice).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(priceFilter == "none" && familyFriendlyFilter == "none" && this.filterDate) {
        this.eventService.searchByKeywordDate(this.filterDate, searchTerm).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(this.filterDate && priceFilter == "none") {
        this.eventService.searchByKeywordDateFamFriendly(this.filterDate, searchTerm, this.famFriendly).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else if(this.filterDate && familyFriendlyFilter == "none") {
        this.eventService.searchByKeywordDatePrice(this.filterDate, searchTerm, this.lowPrice, this.highPrice).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      } else {
        this.eventService.searchByKeywordFamFriendlyPriceDate(this.filterDate, searchTerm, this.famFriendly, this.lowPrice, this.highPrice).subscribe(matchingEvents => 
          {this.searchedEvents = matchingEvents});
      }
    }  
    this.highPrice = null;
    

  }

  public clearDate() {
    this.filterDate = null;
  }
}
