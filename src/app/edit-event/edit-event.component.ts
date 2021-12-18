import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../model/event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
    currentEvent: Event;

  constructor( private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEvent(this.route.snapshot.params.id);
  }

  public getEvent(id: number): void {
    this.eventService.findEventById(id).subscribe(data => this.currentEvent = data);
  }

}
