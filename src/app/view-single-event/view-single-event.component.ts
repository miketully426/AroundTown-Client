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
  // currentTime: {hour:number, minute:number};
  timeStr: String = "";
  amPm: String;


  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {
    this.currentEvent = new Event();
   }

  ngOnInit() {
    this.getEvent(this.route.snapshot.params.id);
    
  }

  public getEvent(id: number): void {
    this.eventService.findEventById(id).subscribe(data => {
      this.currentEvent = data;
      // this.currentTime = this.currentEvent.time;
      this.displayTime(this.currentEvent.time);
      });
  }

  public onEdit(eventID: number) {
    this.router.navigate([`edit-events/${eventID}`]);

  }

  public onConfirm() {
    this.router.navigate([`events`])
  }

  public displayTime(time: any) {
    if(time.hour > 12 && time.hour != 24) {
      this.timeStr += (time.hour - 12).toString();
      this.amPm = "PM";
    } else if (time.hour == 0) {
      this.timeStr += (time.hour + 12).toString();
      this.amPm  = "AM"; 
    } else if (time.hour == 24) {
      this.timeStr += (time.hour - 12).toString();
      this.amPm  = "AM";
    } else if (time.hour == 12) {
      this.timeStr += time.hour.toString();
      this.amPm = "PM";
    }else if (time.hour < 12) {
      this.timeStr += time.hour.toString();
      this.amPm = "AM";
    }

    if(time.minute == 0) {
      this.timeStr += ":00"
    } else {
      this.timeStr += ":" + time.minute.toString();
    }
    
  }
}
