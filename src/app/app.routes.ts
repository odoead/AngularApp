import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
  , {
    path: 'home',
    component: HomeComponent,
    title: 'Home page'
  }
];

