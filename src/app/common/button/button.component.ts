import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonLabel: string = '';
  @Output() buttonclicked = new EventEmitter<any>();

  onButtonClick(event: any) {
    this.buttonclicked.emit(event);
  }
}
