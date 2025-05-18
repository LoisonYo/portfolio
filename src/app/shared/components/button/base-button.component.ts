import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-button',
  standalone: true,
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {
  @Input() href: string = '';
  @Input() download: boolean = false;
}