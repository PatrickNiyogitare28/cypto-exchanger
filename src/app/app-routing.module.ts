import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/views-routing.module').then(module => module.ViewsRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
