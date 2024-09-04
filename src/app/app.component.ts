import { Component } from '@angular/core';
import { ThemeComponent } from './theme/theme/theme.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CTax';
  data: any;
}
