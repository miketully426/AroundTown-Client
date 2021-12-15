import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event-service.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event: Event;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {
    this.event = new Event();
   }

   gotoEventList() {
    this.router.navigate(['/events']);
  }
   onSubmit() {
     this.eventService.save(this.event).subscribe(result => this.gotoEventList());
  
   }

   
  ngOnInit() {
  }

}
