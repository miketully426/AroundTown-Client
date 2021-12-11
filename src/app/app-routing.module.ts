import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  // {path: 'list-user', redirectTo: '/', pathMatch: 'full'},
  { path: 'users', component: UserListComponent },
  {path: 'adduser', component: UserFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
