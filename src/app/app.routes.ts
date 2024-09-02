import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no route is specified
  { path: 'login', component: LoginComponent },
];
