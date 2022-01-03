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
  eventCost: boolean = true;
  eventCostNum: number;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {
    this.event = new Event();
   }

   gotoEventList() {
    this.router.navigate(['/events']);
  }
   onSubmit() {
     this.eventCostNum = Number(this.eventCostNum);
    if(this.eventCostNum == 0){
        this.event.entryCost = String(this.eventCostNum);
    } else{
        this.event.entryCost = this.eventCostNum.toFixed(2);
    }
     this.eventService.save(this.event).subscribe(result => this.gotoEventList());
   }
  
  ngOnInit() {
  }


}
