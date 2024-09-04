import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pageType = 'dash';

  buttonClicked(event: any) {
    console.log(event);
  }
}
