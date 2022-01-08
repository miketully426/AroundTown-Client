import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { EventListComponent } from './event-list/event-list.component'
import { EventFormComponent } from './event-form/event-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';



const routes: Routes = [
  // { path: 'events', component: EventListComponent },
  //for routes: only use "CanActivate" code if we only want logged in users to access that
  { path: 'events', component: EventListComponent,canActivate:[AuthGaurdService] },
  { path: 'addevent', component: EventFormComponent,canActivate:[AuthGaurdService] },
  { path: 'searchresults', component: SearchResultsComponent,canActivate:[AuthGaurdService]},
  { path: 'adduser', component: UserFormComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
