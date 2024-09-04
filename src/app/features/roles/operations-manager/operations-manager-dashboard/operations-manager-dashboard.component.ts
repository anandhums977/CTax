import { Component } from '@angular/core';
import { RibbonComponent } from '../../../../common/ribbon/ribbon.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from '../../../../common/search/search.component';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-operations-manager-dashboard',
  standalone: true,
  imports: [RibbonComponent,MatTabsModule,SearchComponent,MatTableModule],
  templateUrl: './operations-manager-dashboard.component.html',
  styleUrl: './operations-manager-dashboard.component.scss'
})
export class OperationsManagerDashboardComponent {
  name:string = 'Deepak Jose';
  location:string = 'Kochi'
  tableData = [
    { id: 1, name: "Alan", adminName: "Deepak", stand: "Stand 1", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 2, name: "Don", adminName: "Abin", stand: "Stand 2", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 3, name: "George", adminName: "Anandhu", stand: "Stand 3", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 4, name: "Tojo", adminName: "Krishnana", stand: "Stand 4", actions: { accept: "ACCEPT", reject: "REJECT" } },
    { id: 5, name: "Jerin", adminName: "Unni", stand: "Stand 5", actions: { accept: "ACCEPT", reject: "REJECT" } }
  ];
  displayedColumns=['#','name', 'adminName', 'stand', 'actions']
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

  ngOnInit(){
  }
}
