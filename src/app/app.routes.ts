import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { RootAdminDashboardComponent } from './features/root-admin-dashboard/root-admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no route is specified
  { path: 'login', component: LoginComponent },
  { path: 'root-admin', component: RootAdminDashboardComponent },
];
