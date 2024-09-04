import { Component } from '@angular/core';
import { RibbonComponent } from '../../../common/ribbon/ribbon.component';

@Component({
  selector: 'app-root-admin-dashboard',
  standalone: true,
  imports: [RibbonComponent],
  templateUrl: './root-admin-dashboard.component.html',
  styleUrl: './root-admin-dashboard.component.scss',
})
export class RootAdminDashboardComponent {
  cardDetails = [
    {
      name: 'Admins',
      value: '15',
    },
    {
      name: 'States',
      value: '17',
    },
    {
      name: 'Taxes',
      value: '23',
    },
  ];
}
