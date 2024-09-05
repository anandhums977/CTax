import { Component, ViewChild } from '@angular/core';
import { RibbonComponent } from '../../../../common/ribbon/ribbon.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchComponent } from '../../../../common/search/search.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PersonDetailsComponent } from '../../../../common/person-details/person-details.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-operations-manager-dashboard',
  standalone: true,
  imports: [
    RibbonComponent,
    MatPaginatorModule,
    MatTabsModule,
    SearchComponent,
    MatTableModule,
    PersonDetailsComponent,
  ],
  templateUrl: './operations-manager-dashboard.component.html',
  styleUrl: './operations-manager-dashboard.component.scss',
})
export class OperationsManagerDashboardComponent {
  name: string = 'Deepak Jose';
  location: string = 'Kochi';
  tcaApprovalData =  new MatTableDataSource([
    {
      id: 1,
      name: 'Alan',
      adminName: 'Deepak',
      stand: 'Stand 1',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 2,
      name: 'Don',
      adminName: 'Abin',
      stand: 'Stand 2',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 3,
      name: 'George',
      adminName: 'Anandhu',
      stand: 'Stand 3',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 4,
      name: 'Tojo',
      adminName: 'Krishnana',
      stand: 'Stand 4',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 5,
      name: 'Jerin',
      adminName: 'Unni',
      stand: 'Stand 5',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
  ]);
  tcaActivationData =  new MatTableDataSource([
    {
      id: 1,
      name: 'Alan',
      adminName: 'Deepak',
      stand: 'Stand 1',
      pos: 'POS 1',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 2,
      name: 'Don',
      adminName: 'Abin',
      stand: 'Stand 2',
      pos: 'POS 2',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 3,
      name: 'George',
      adminName: 'Anandhu',
      stand: 'Stand 3',
      pos: 'POS 3',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 4,
      name: 'Tojo',
      adminName: 'Krishnana',
      stand: 'Stand 4',
      pos: 'POS 4',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
    {
      id: 5,
      name: 'Jerin',
      adminName: 'Unni',
      stand: 'Stand 5',
      pos: 'POS 5',
      actions: { accept: 'ACCEPT', reject: 'REJECT' },
    },
  ]);

  displayedColumnsTcaApprovalData = [
    '#',
    'name',
    'adminName',
    'stand',
    'actions',
  ];
  displayedColumnsTcaActivationData = [
    '#',
    'name',
    'adminName',
    'stand',
    'pos',
    'actions',
  ];

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

  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;


  ngOnInit() {
    this.tcaActivationData.paginator = this.paginator2
    this.tcaApprovalData.paginator = this.paginator1
  }
}
