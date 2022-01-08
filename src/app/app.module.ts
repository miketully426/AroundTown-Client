import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EventService } from './service/event-service.service'
import { UserService } from './service/user-service.service'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { SearchResultsComponent } from './search-results/search-results.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFormComponent,
    SearchResultsComponent,
    UserFormComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [EventService, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }