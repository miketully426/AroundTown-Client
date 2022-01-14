import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event-service.service';
import { Event } from '../model/event';
import { NgbCalendar, NgbDateStruct, NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';



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

   gotoSingleEvent(id:number) {
    this.router.navigate([`eventConfirm/${id}`]);
  }
   onSubmit() {
      this.eventCostNum = Number(this.eventCostNum);
      if(this.eventCostNum == 0){
          this.event.entryCost = String(this.eventCostNum);
      } else{
           this.event.entryCost = this.eventCostNum.toFixed(2);
      }
      this.event.date = this.eventDate;
      this.event.time = this.eventTime;
      //would convert ngbDate/Time to date objects. Although they don't come up as type date, but they display date.
      // this.event.date = new Date(this.eventDate.year, this.eventDate.month-1, this.eventDate.day);
      // this.event.time = new Date(this.eventDate.year, this.eventDate.month - 1, this.eventDate.day, this.eventTime.hour, this.eventTime.minute);
      // if(this.eventTime.minute == 0){
      //      this.event.date = `${this.eventDate.month}/${this.eventDate.day}/${this.eventDate.year}`
      //      this.event.time = `${this.eventTime.hour}:00`
      // } else {
      //     this.event.date = `${this.eventDate.month}/${this.eventDate.day}/${this.eventDate.year}`
      //     this.event.time = `${this.eventTime.hour}:${this.eventTime.minute}`
      // }
      this.eventService.save(this.event).subscribe(result => this.gotoSingleEvent(result.eventId));
   }
  
  
  ngOnInit() {
  }
}
