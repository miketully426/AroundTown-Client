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
import {HttpClientModule} from "@angular/common/http";
import { LoginFormComponent } from './login-form/login-form.component';

import { HttpInterceptorService } from '../app/service/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFormComponent,
    UserFormComponent,
    LoginFormComponent,
    MenuComponent,
    LogoutFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EventService, UserService, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
