import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../service/event-service.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.findAll().subscribe(data => {
      this.events = data;
      this.alphabetizedByName = this.events.sort(function(a, b) {return a.name.localeCompare(b.name)});
    });
  }
}
