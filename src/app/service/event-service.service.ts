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

   public viewAllFamFriendly(famFriendly: boolean) {
     return this.http.get<Event[]>(`${this.eventsURL}/filterAllFamFriendly/${famFriendly}`);
   }

   public viewAllByPrice(lowPrice: number, highPrice: number) {
     if(highPrice){
      return this.http.get<Event[]>(`${this.eventsURL}/filterAllEntryCost/${lowPrice}/${highPrice}`)
     } else {
      return this.http.get<Event[]>(`${this.eventsURL}/filterAllEntryCost/${lowPrice}`)
     }
   }

   public viewAllByFamFriendlyAndPrice(famFriendly: boolean, lowPrice: number, highPrice: number) {
     if(highPrice){
      return this.http.get<Event[]>(`${this.eventsURL}/filterAllFamFriendlyEntryCost/${famFriendly}/${lowPrice}/${highPrice}`)
     } else {
      return this.http.get<Event[]>(`${this.eventsURL}/filterAllFamFriendlyEntryCost/${famFriendly}/${lowPrice}`)
     }
   }

   public searchByKeywordNoFilter(searchTerm: String) {
     return this.http.get<Event[]>(`${this.eventsURL}/searchByKeyword/${searchTerm}`)
   }

   public searchByKeywordFamFriendly(searchTerm: String, famFriendly: boolean) {
     return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendly/${searchTerm}/${famFriendly}`);
   }

   public searchByKeywordPrice(searchTerm: String, lowPrice: number, highPrice: number) {
    if(highPrice){ 
      return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordPrice/${searchTerm}/${lowPrice}/${highPrice}`);
    } else {
      return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordPrice/${searchTerm}/${lowPrice}`);
    }
   }

   public searchByKeywordFamFriendlyPrice(searchTerm: String, famFriendly: boolean, lowPrice: number, highPrice: number) {
     if(highPrice){
       return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendlyPrice/${searchTerm}/${famFriendly}/${lowPrice}/${highPrice}`);
     } else {
       return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendlyPrice/${searchTerm}/${famFriendly}/${lowPrice}`);
     }
   }

   delete(eventId) {
    return this.http.delete<Event>(`${this.eventsURL}/delete/${eventId}`);
  }



}
