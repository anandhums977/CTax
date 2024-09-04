import { Component } from '@angular/core';
import { RibbonComponent } from '../../../../common/ribbon/ribbon.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-operations-manager-dashboard',
  standalone: true,
  imports: [RibbonComponent,MatTabsModule],
  templateUrl: './operations-manager-dashboard.component.html',
  styleUrl: './operations-manager-dashboard.component.scss'
})
export class OperationsManagerDashboardComponent {
  name:string = 'Deepak Jose';
  location:string = 'Kochi'
  cardDetails = [
    {
      name: 'Agent Admins',
      value: '15',
    },
    {
      name: 'POS',
      value: '12517',
    },
    {
      name: 'Total Amount',
      value: '2500$',
    },
  ];
}
