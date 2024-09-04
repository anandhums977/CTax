import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
// import { RootAdminDashboardComponent } from './features/roles/root-admin-dashboard/root-admin-dashboard.component';
import { OperationsManagerDashboardComponent } from './features/roles/operations-manager/operations-manager-dashboard/operations-manager-dashboard.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no route is specified
  { path: 'login', component: LoginComponent },
  // { path: 'root-admin', component: RootAdminDashboardComponent },
  { path: 'operations-manager-dahsboard', component: OperationsManagerDashboardComponent },
];
