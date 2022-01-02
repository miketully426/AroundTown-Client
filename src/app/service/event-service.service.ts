import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsURL: string;

  constructor(private http: HttpClient) {
      this.eventsURL = 'http://localhost:8080/api/events';
   }

   public findAll(): Observable<Event[]> {
      return this.http.get<Event[]>(this.eventsURL);
   }

   public save(event: Event) {
     return this.http.post<Event>(this.eventsURL, event);
   }

   public searchEventsByKeyword(searchTerm: String) {
     return this.http.post<String>(`${this.eventsURL}/:${searchTerm}`, searchTerm);
   }

   public viewMatchingEventsByKeyword(searchTerm: String): Observable<Event[]> {
     return this.http.get<Event[]>(`${this.eventsURL}/${searchTerm}`);
   }
}