import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../common/button/button.component';

@Component({
  selector: 'app-create-state',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, CommonModule, ButtonComponent],
  templateUrl: './create-state.component.html',
  styleUrl: './create-state.component.scss',
})
export class CreateStateComponent {
  buttonClicked(event: any) {
    console.log(event, 'Create State');
  }
}
