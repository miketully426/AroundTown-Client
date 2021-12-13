import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  // {path: 'list-user', redirectTo: '/', pathMatch: 'full'},
  {path: 'adduser', component: UserFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
