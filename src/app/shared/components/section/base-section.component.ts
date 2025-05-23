import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-section',
  standalone: true,
  templateUrl: './base-section.component.html',
  styleUrl: './base-section.component.scss'
})
export class BaseSectionComponent {
  @Input() title: string = '';
}