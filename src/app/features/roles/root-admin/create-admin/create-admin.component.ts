import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../common/button/button.component';

@Component({
  selector: 'app-create-admin',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, CommonModule, ButtonComponent],
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.scss',
})
export class CreateAdminComponent {
  buttonClicked(event: any) {
    console.log(event, 'Create Admin');
  }
}
