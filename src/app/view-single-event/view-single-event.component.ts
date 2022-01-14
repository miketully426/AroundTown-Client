import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event-service.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-view-single-event',
  templateUrl: './view-single-event.component.html',
  styleUrls: ['./view-single-event.component.css']
})
export class ViewSingleEventComponent implements OnInit {

  currentEvent: Event;


  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.getEvent(this.route.snapshot.params.id);

  }

  public getEvent(id: number): void {
    this.eventService.findEventById(id).subscribe(data => {this.currentEvent = data});
  }

  public onEdit(eventID: number) {
    this.router.navigate([`edit-events/${eventID}`]);

  }

  public onConfirm() {
    this.router.navigate([`events`])
  }

  public printEvent(event) {
    console.log(event)
  }

}
