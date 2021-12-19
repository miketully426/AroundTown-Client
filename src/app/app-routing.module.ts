import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { EventListComponent } from './event-list/event-list.component'
import { EventFormComponent } from './event-form/event-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsByIdComponent} from './search-results-by-id/search-results-by-id.component';

const routes: Routes = [
  // {path: 'list-user', redirectTo: '/', pathMatch: 'full'},
  { path: 'events', component: EventListComponent },
  {path: 'addevent', component: EventFormComponent},
  { path: 'searchresults', component: SearchResultsComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'searchresultsbyid', component: SearchResultsByIdComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
