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
    currentEvent: Event = new Event;

  constructor( private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEvent(this.route.snapshot.params.id);
  }

  public getEvent(id: number): void {
    this.eventService.findEventById(id).subscribe(data => this.currentEvent = data);
  }

  public onSubmit() {
    this.eventService.updateEvent(this.currentEvent.eventId, this.currentEvent).subscribe((result) => this.goToEvents());
  }

  public goToEvents() {
    this.router.navigate(['/events']);
  }

  //I'd like to create a new page that allows you to view your event after editing, then choose between re-editing and going back to all events.
  //I think we need a separate user story for this, and the same page can be used to click on a single event from the events list

}
