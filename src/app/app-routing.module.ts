import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { EventListComponent } from './event-list/event-list.component'
import { EventFormComponent } from './event-form/event-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'events', component: EventListComponent },
  { path: 'addevent', component: EventFormComponent },
  { path: 'searchresults', component: SearchResultsComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'edit-events/:id', component: EditEventComponent },
  { path: 'userprofile/:username', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
