import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NewFooterComponent } from '../new-footer/new-footer.component';
@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, NewFooterComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  isLoggedIn: boolean = true;
}
