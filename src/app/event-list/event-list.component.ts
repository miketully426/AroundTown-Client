import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../service/event-service.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from "rxjs";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {


  events: Event[];
  alphabetizedByName: Event[];
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(private eventService: EventService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.eventService.findAll().subscribe(data => {
      this.events = data;
      this.alphabetizedByName = this.events.sort(function(a, b) {return a.name.localeCompare(b.name)});
    });
  }

  deleteEvent(eventId: number) {
    if(confirm(`WARNING!\nLAST CHANCE!\nARE YOU SURE YOU WANT TO DELETE?`)) {
    this.eventService.deleteEvent(eventId)
      .subscribe(
        data => {
          console.log(data);
          location.reload();
        },
        error => console.log(error));
  } 

}

}
