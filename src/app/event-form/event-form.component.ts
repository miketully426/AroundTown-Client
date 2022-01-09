import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event-service.service';
import { Event } from '../model/event';
import { NgbCalendar, NgbDateStruct, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event: Event;
  eventCost: boolean = true;
  eventCostNum: number;
  model: NgbDateStruct;
  eventDate: {year:number, month: number, day: number};
  eventTime: {hour:number, minute:number};
  meridian = true;
  minuteStep = 15;
  // eventDate: Object;
  // eventTime: Object;
  //not sure if this needs to be true or false
  @ViewChild('dp', {static: false}) dp: NgbDatepicker;

  constructor(private route: ActivatedRoute, private router: Router, 
    private eventService: EventService, private calendar: NgbCalendar) {
    this.event = new Event();
   }

  // selectToday() {
  //   this.model = this.calendar.getToday();
  // }

  // setCurrent() {
  //   //Current Date
  //   this.dp.navigateTo()
  // }

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

      if(this.eventTime.minute == 0){
           this.event.date = `${this.eventDate.month}/${this.eventDate.day}/${this.eventDate.year}`
           this.event.time = `${this.eventTime.hour}:00`
      } else {
          this.event.date = `${this.eventDate.month}/${this.eventDate.day}/${this.eventDate.year}`
          this.event.time = `${this.eventTime.hour}:${this.eventTime.minute}`
      }
      this.eventService.save(this.event).subscribe(result => this.gotoEventList());
   }
  
  
  ngOnInit() {
  }
}
