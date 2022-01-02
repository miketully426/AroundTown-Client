import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { EventListComponent } from './event-list/event-list.component'
import { EventFormComponent } from './event-form/event-form.component';
import { SearchByLocationComponent } from './search-by-location/search-by-location.component';

const routes: Routes = [
  // {path: 'list-user', redirectTo: '/', pathMatch: 'full'},
  { path: 'events', component: EventListComponent },
  {path: 'addevent', component: EventFormComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'searchByZipCode', component: SearchByLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
