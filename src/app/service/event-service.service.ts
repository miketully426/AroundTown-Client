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


   public findEventById(eventId: number): Observable<Event> {
      return this.http.get<Event>(`${this.eventsURL}/${eventId}`);
   }

   public getPriceById(eventId: number): Observable<Number> {
      return this.http.get<Number>(`${this.eventsURL}/getPriceById/${eventId}`);
      //this will not be needed when we can save the price as a number here and a double on the back.
   }

   public getDateById(eventId: number): any {
      return this.http.get<any>(`${this.eventsURL}/getDateById/${eventId}`);
      //This will not be needed once we save Date as an object on back... maybe
   }

   public getTimeById (eventId: number): any {
    return this.http.get<any>(`${this.eventsURL}/getTimeById/${eventId}`);
    //This will not be needed once we save Time as an object on back... maybe
 }

   public updateEvent(eventId: any, data: Event): Observable<Event> {
     return this.http.put<Event>(`${this.eventsURL}/${eventId}`, data);
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

   public viewAllByDate(date: any) {
     //could maybe send strings year, month, day in get url and put in hashmap on back if this doesn't work.
     return this.http.post<Event[]>(`${this.eventsURL}/filterAllDate`, date);
   }

   public viewAllByFamFriendlyAndPrice(famFriendly: boolean, lowPrice: number, highPrice: number) {
     if(highPrice){
      return this.http.get<Event[]>(`${this.eventsURL}/filterAllFamFriendlyEntryCost/${famFriendly}/${lowPrice}/${highPrice}`)
     } else {
      return this.http.get<Event[]>(`${this.eventsURL}/filterAllFamFriendlyEntryCost/${famFriendly}/${lowPrice}`)
     }
   }

   public viewAllByFamFriendlyAndDate(famFriendly: boolean, date: any) {
      return this.http.post<Event[]>(`${this.eventsURL}/filterAllFamFriendDate/${famFriendly}`, date);
   }

   public viewAllByPriceAndDate(date: any, lowPrice: number, highPrice: number) {
    if(highPrice){
      return this.http.post<Event[]>(`${this.eventsURL}/filterAllPriceDate/${lowPrice}/${highPrice}`, date);
     } else {
      return this.http.post<Event[]>(`${this.eventsURL}/filterAllPriceDate/${lowPrice}`, date);
     }
   }

   public viewAllByFamFriendPriceAndDate(date: any, lowPrice: number, highPrice: number, famFriendly: boolean) {
    if(highPrice){
      return this.http.post<Event[]>(`${this.eventsURL}/filterAllFamFriendlyPriceDate/${famFriendly}/${lowPrice}/${highPrice}`, date);
     } else {
      return this.http.post<Event[]>(`${this.eventsURL}/filterAllFamFriendlyPriceDate/${famFriendly}/${lowPrice}`, date);
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

   public searchByKeywordDate(date: any, searchTerm: String) {
     return this.http.post<Event[]>(`${this.eventsURL}/searchKeywordDate/${searchTerm}`, date);
   }

   public searchByKeywordDateFamFriendly(date: any, searchTerm: String, famFriendly: boolean) {
     return this.http.post<Event[]>(`${this.eventsURL}/searchKeywordDateFamFriendly/${searchTerm}/${famFriendly}`, date);
   }

   public searchByKeywordDatePrice(date: any, searchTerm: String, lowPrice: number, highPrice: number ) {
    if(highPrice){ 
      return this.http.post<Event[]>(`${this.eventsURL}/searchByKeywordDatePrice/${searchTerm}/${lowPrice}/${highPrice}`, date);
    } else {
      return this.http.post<Event[]>(`${this.eventsURL}/searchByKeywordDatePrice/${searchTerm}/${lowPrice}`, date);
    }
   }


   public searchByKeywordFamFriendlyPrice(searchTerm: String, famFriendly: boolean, lowPrice: number, highPrice: number) {
     if(highPrice){
       return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendlyPrice/${searchTerm}/${famFriendly}/${lowPrice}/${highPrice}`);
     } else {
       return this.http.get<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendlyPrice/${searchTerm}/${famFriendly}/${lowPrice}`);
     }
   }

   public searchByKeywordFamFriendlyPriceDate(date: any, searchTerm: String, famFriendly: boolean, lowPrice: number, highPrice: number) {
    if(highPrice){
      return this.http.post<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendlyPrice/${searchTerm}/${famFriendly}/${lowPrice}/${highPrice}`, date);
    } else {
      return this.http.post<Event[]>(`${this.eventsURL}/searchByKeywordFamFriendlyPrice/${searchTerm}/${famFriendly}/${lowPrice}`, date);
    }
   }

  public deleteEvent(eventId: number) {
    return this.http.delete<Event>(`${this.eventsURL}/delete/${eventId}`);
  }

}
