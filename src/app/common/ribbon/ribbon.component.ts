import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  standalone: true,
  imports: [],
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.scss',
})
export class RibbonComponent {
  @Input() cardData: any[] = [];
  @Input() name:string = '';
  @Input() location:string = '';
}
