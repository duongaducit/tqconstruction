import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './theme/default/default.component';
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
