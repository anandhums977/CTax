import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchComponent } from '../../../../../common/search/search.component';
import { MatTableModule } from '@angular/material/table';
import { RibbonComponent } from '../../../../../common/ribbon/ribbon.component';
import { ButtonComponent } from '../../../../../common/button/button.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RibbonComponent,MatTabsModule,MatTableModule,SearchComponent,ButtonComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
 
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
  
   tableData = [
    { id: 1, name: "Alan", adminName: "Deepak", stand: "Stand 1", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 2, name: "Don", adminName: "Abin", stand: "Stand 2", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 3, name: "George", adminName: "Anandhu", stand: "Stand 3", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 4, name: "Tojo", adminName: "Krishnana", stand: "Stand 4", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 5, name: "Jerin", adminName: "Unni", stand: "Stand 5", actions: { accept: "ACCEPT", reject: "REJECT" } }
  ];
  displayedColumns=['#','name', 'adminName', 'stand', 'actions']
}
