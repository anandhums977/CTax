import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../common/button/button.component';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-tax',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    ButtonComponent,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-tax.component.html',
  styleUrl: './create-tax.component.scss',
})
export class CreateTaxComponent {
  constructor(private router: Router) {}

  taxForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    state: new FormControl(''),
    amount: new FormControl(''),
  });

  buttonClicked(event: any) {
    console.log(event, 'Create Admin');
  }

  goBack() {
    this.router.navigateByUrl('root-admin');
  }
}
