import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Form } from './components/form/form';
import { Details } from './components/details/details';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: Home },
  // { path: 'dashboard', component: Dashboard },
  { path: 'form', component: Form },
  { path: 'details', component: Details },
  { path: '**', redirectTo: 'home' },
];
