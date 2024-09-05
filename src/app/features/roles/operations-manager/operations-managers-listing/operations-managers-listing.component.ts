import { Component } from '@angular/core';
import { SearchComponent } from '../../../../common/search/search.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-operations-managers-listing',
  standalone: true,
  imports: [MatTableModule,SearchComponent,MatPaginatorModule],
  templateUrl: './operations-managers-listing.component.html',
  styleUrl: './operations-managers-listing.component.scss'
})
export class OperationsManagersListingComponent {
  operationsManagersListing = new MatTableDataSource( [
    {
      id: 1,
      name: "Alan",
      zones: "Zone 1, Zone 2, Zone 3",
      numberOfAgents: 12,
      username: "Alan000",
      password: "***",
      collection: "500$"
    },
    {
      id: 2,
      name: "Don",
      zones: "Zone 2, Zone 3, Zone 4",
      numberOfAgents: 13,
      username: "Don000",
      password: "***",
      collection: "500$"
    },
    {
      id: 3,
      name: "George",
      zones: "Zone 3, Zone 4, Zone 5",
      numberOfAgents: 14,
      username: "George000",
      password: "***",
      collection: "500$"
    },
    {
      id: 4,
      name: "Tojo",
      zones: "Zone 4, Zone 5, Zone 6",
      numberOfAgents: 15,
      username: "Tojo000",
      password: "***",
      collection: "500$"
    },
    {
      id: 5,
      name: "Jerin",
      zones: "Zone 5, Zone 6, Zone 7",
      numberOfAgents: 16,
      username: "Jerin000",
      password: "***",
      collection: "500$"
    }
  ])
  displayedColumnsOperationsManagersListing= [
    '#',
    'name',
    'zones',
    'numberOfAgents',
    'username',
    'password',
    'collection',
    'actions',
  ];
}
