// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../service/event-service.service';
// import { Event } from '../model/event';

// @Component({
//   selector: 'app-search-results-by-id',
//   templateUrl: './search-results-by-id.component.html',
//   styleUrls: ['./search-results-by-id.component.css'],
  
// })
// export class SearchResultsByIdComponent implements OnInit {

//   events: Event[];
//   alphabetizedByName: Event[];
//   searchedEvents: Event[];
  

//   constructor(private eventService: EventService) { }

//   ngOnInit() {
//     this.eventService.findAll().subscribe(data => {
//       this.events = data;
//       this.alphabetizedByName = this.events.sort(function(a, b) {return a.name.localeCompare(b.name)});
//     });
//   }

//   search(searchId: number) {
//     let matchingEventIds: Event[] = [];
//     for (let i)
//     for(let property in this.events[i]) {
//       if(this.events[i].eventId.toString() === searchId.toString()) {
//         matchingEventIds.push(this.events[i]); 
//       }  
//     }
//     this.searchedEvents = matchingEventIds;
//   }
// }

 // for(let property in this.events[i]) {
      //     if(this.events[i][property].toString() === searchId) {
      //       matchingEventIds.push(this.events[i]);
      //       break;
      import { Component, OnInit } from '@angular/core';
      import { Event } from '../model/event'
      import { EventService } from '../service/event-service.service';
      
      @Component({
        selector: 'app-search-results-by-id',
        templateUrl: './search-results-by-id.component.html',
        styleUrls: ['./search-results-by-id.component.css']
      })
      export class SearchResultsByIdComponent implements OnInit {
      
        events: Event[];
        alphabetizedByName: Event[];
        searchedEvents: Event[];

      
        constructor(private eventService: EventService) { }
      
        ngOnInit() {
          this.eventService.findAll().subscribe(data => {
            this.events = data;
            this.searchedEvents = data;
            this.alphabetizedByName = this.events.sort(function(a, b) {return a.name.localeCompare(b.name)});
          });
        }
      
        search(searchId: number) {
          let matchingEvents: Event[] = [];
          // searchId = searchId.toString();
          for(let i=0; i < this.events.length; i++) {
            for(let property in this.events[i]) {
                if(this.events[i][property].toString() === searchId.toString()) {
                  matchingEvents.push(this.events[i]);
                  break;
                  
                }
            }  
          }
          this.searchedEvents = matchingEvents;
        }
      }