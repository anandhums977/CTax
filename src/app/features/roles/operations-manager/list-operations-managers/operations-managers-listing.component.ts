import { Component, inject } from '@angular/core';
import { SearchComponent } from '../../../../common/search/search.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from '../../../../common/button/button.component';
import { PersonDetailsComponent } from '../../../../common/person-details/person-details.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateOperationsManagerComponent } from '../create-operations-manager/create-operations-manager.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationComponent } from '../../../../common/confirmation/confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-operations-managers-listing',
  standalone: true,
  imports: [
    MatTableModule,
    SearchComponent,
    MatPaginatorModule,
    ButtonComponent,
    MatSelectModule,
    DialogModule,
    MatFormFieldModule,
    TranslateModule,
    MatMenuModule,
    ConfirmationComponent,
  ],
  templateUrl: './operations-managers-listing.component.html',
  styleUrl: './operations-managers-listing.component.scss',
})
export class OperationsManagersListingComponent {
  dialog = inject(Dialog);
  standsList = [
    {
      id: 1,
      name: 'Stand 1',
    },
    {
      id: 2,
      name: 'Stand 2',
    },
    {
      id: 3,
      name: 'Stand 3',
    },
  ];
  operationsManagersListing = new MatTableDataSource([
    {
      id: 1,
      name: 'Alan',
      zones: 'Zone 1, Zone 2, Zone 3',
      numberOfAgents: 12,
      username: 'Alan000',
      password: '***',
      collection: '500$',
      location: 'New York',
      totalAgentAdmins: 5,
      totalPOS: 256,
      totalTCs: 255,
      totalTaxCollected: '500$',
    },
    {
      id: 2,
      name: 'Don',
      zones: 'Zone 2, Zone 3, Zone 4',
      numberOfAgents: 13,
      username: 'Don000',
      password: '***',
      collection: '600$',
      location: 'Chicago',
      totalAgentAdmins: 7,
      totalPOS: 312,
      totalTCs: 311,
      totalTaxCollected: '600$',
    },
    {
      id: 3,
      name: 'George',
      zones: 'Zone 3, Zone 4, Zone 5',
      numberOfAgents: 14,
      username: 'George000',
      password: '***',
      collection: '700$',
      location: 'Los Angeles',
      totalAgentAdmins: 8,
      totalPOS: 400,
      totalTCs: 399,
      totalTaxCollected: '700$',
    },
    {
      id: 4,
      name: 'Tojo',
      zones: 'Zone 4, Zone 5, Zone 6',
      numberOfAgents: 15,
      username: 'Tojo000',
      password: '***',
      collection: '800$',
      location: 'Houston',
      totalAgentAdmins: 3,
      totalPOS: 500,
      totalTCs: 499,
      totalTaxCollected: '800$',
    },
    {
      id: 5,
      name: 'Jerin',
      zones: 'Zone 5, Zone 6, Zone 7',
      numberOfAgents: 16,
      username: 'Jerin000',
      password: '***',
      collection: '900$',
      location: 'San Francisco',
      totalAgentAdmins: 2,
      totalPOS: 600,
      totalTCs: 599,
      totalTaxCollected: '900$',
    },
  ]);

  displayedColumnsOperationsManagersListing = [
    '#',
    'name',
    'zones',
    'numberOfAgents',
    'username',
    'password',
    'collection',
    'actions',
  ];

  constructor(private matDialog: MatDialog, private router: Router) {}

  deleteOperationsManager() {}
  editOperationsManager() {}
  openPersonDeatilsDialog(data: any) {
    this.dialog.open(PersonDetailsComponent, {
      minWidth: '300px',
      data: data,
    });
  }

  CreateOperationsManagerDialog() {
    this.dialog.open(CreateOperationsManagerComponent, {
      minWidth: '300px',
    });
  }

  openDeleteConfirm(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.matDialog.open(ConfirmationComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: { type: 'delete' },
    });
  }
}
