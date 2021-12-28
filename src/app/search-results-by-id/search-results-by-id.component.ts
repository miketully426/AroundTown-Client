      import { Component, OnInit } from '@angular/core';
      import { Event } from '../model/event'
      import { EventService } from '../service/event-service.service';
      import { ActivatedRoute, Router } from '@angular/router';
      
      @Component({
        selector: 'app-search-results-by-id',
        templateUrl: './search-results-by-id.component.html',
        styleUrls: ['./search-results-by-id.component.css']
      })

      export class SearchResultsByIdComponent implements OnInit {
        currentEvent: Event = new Event;
        
    
      constructor( private eventService: EventService, private route: ActivatedRoute, private router: Router) { }
    
      ngOnInit(): void {
        }
    
      public getEvent(eventId: number) {
        this.eventService.findEventById(eventId).subscribe(data => this.currentEvent = data);
        return this.currentEvent;
      }
    
      // public onSubmit() {
      //   this.eventService.updateEvent(this.currentEvent.eventId, this.currentEvent)
      // }
    
      // public goToEvents() {
      //   this.router.navigate(['/events/eventId']);
      // }
    }
    







      // export class SearchResultsByIdComponent implements OnInit {
      
      //   events: Event[];
      //   alphabetizedByName: Event[];
      //   searchedEvents: Event[];
      //   searchedById: Event[];

      
      //   constructor(private eventService: EventService) { }
      
      //   ngOnInit() {
      //     this.eventService.findAll().subscribe(data => {
      //       this.events = data;
      //       this.searchedEvents = data;
      //       this.searchedById = data;
      //       this.alphabetizedByName = this.events.sort(function(a, b) {return a.name.localeCompare(b.name)});
      //     });
      //   }
      
      //   //since you're only going to be pulling one event because each eventId is unique (theoretically), so I would make some edits to this function:
      //     //return a single event object called currentEvent or something (you can declare this up at the top if needed)
      //     //instead using matchingEvents at all and doing multiple for loops, just loop through the events array only pulling the id if(this.events[i][eventId] === searchId) (you may have to use '.toNumber')
      //     //if the id's match, set that event to currentEvent or whatever you call it.
      //     //then reference currentEvent in the html
      //   search(searchId: number) {
        
      //     for(let i=0; i < this.events.length; i++) {
      //         if(this.events[i][eventId] === searchId) {
      //            let currentEvent.toNumber() = this.events[i];
      //            return currentEvent;
      //             break;
                  
      //           }
      //       }  
      //     }
      //     this.searchedById = matchingEventIds;
      //   }
      // }
      //You also have the option of creating and using a findEventById method in the event-service that will call http.get to find an event by an Id,
      //which then connects to a similar method on the server side. I do it in the edit events branch if you'd like to see how it looks. :)