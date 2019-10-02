import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent, UserComponent } from './components/index'
const routes: Routes = [
  {
    path: '', component: ListComponent // rota principal
  },
  {
    path: 'user/:id', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
