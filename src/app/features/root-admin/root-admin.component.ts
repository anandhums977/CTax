import { Component } from '@angular/core';
import { RibbonComponent } from '../../common/ribbon/ribbon.component';

@Component({
  selector: 'app-root-admin',
  standalone: true,
  imports: [RibbonComponent],
  templateUrl: './root-admin.component.html',
  styleUrl: './root-admin.component.scss',
})
export class RootAdminComponent {
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
