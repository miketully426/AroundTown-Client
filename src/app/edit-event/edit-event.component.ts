import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../service/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../model/event';
import { NgbCalendar, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
    currentEvent: Event = new Event;
    eventCost: boolean = true;
    eventCostNum: Number;
    model: NgbDateStruct;
    eventDate: {year:number, month: number, day: number};
    eventTime: {hour:number, minute:number};
    meridian = true;
    minuteStep = 15;
  //not sure if this needs to be true or false
  @ViewChild('dp', {static: false}) dp: NgbDatepicker;

  constructor( private eventService: EventService, private route: ActivatedRoute, 
    private router: Router, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.getEvent(this.route.snapshot.params.id);
  }

  public getEvent(id: number): void {
    this.eventService.findEventById(id).subscribe(data => {this.currentEvent = data});
    this.eventService.getPriceById(id).subscribe(price => {this.eventCostNum = price});
    this.eventService.getDateById(id).subscribe(date => {this.eventDate = date});
    this.eventService.getTimeById(id).subscribe(time => {this.eventTime = time});

  }

  public onSubmit() {
    if(Number(this.eventCostNum) == 0){
      this.currentEvent.entryCost = String(this.eventCostNum)
    } else {
      this.currentEvent.entryCost = this.eventCostNum.toFixed(2);
    }
    this.currentEvent.date = this.eventDate;
    this.currentEvent.time = this.eventTime;

    this.eventService.updateEvent(this.currentEvent.eventId, this.currentEvent).subscribe((result) => this.goToSingleEvent(this.currentEvent.eventId));
  }

  goToSingleEvent(id:number) {
    this.router.navigate([`eventConfirm/${id}`]);
  }

  //I'd like to create a new page that allows you to view your event after editing, then choose between re-editing and going back to all events.
  //I think we need a separate user story for this, and the same page can be used to click on a single event from the events list

}
