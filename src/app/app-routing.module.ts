import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { EventListComponent } from './event-list/event-list.component'
import { EventFormComponent } from './event-form/event-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'addevent', component: EventFormComponent },
  { path: 'searchresults', component: SearchResultsComponent},
  { path: 'adduser', component: UserFormComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
