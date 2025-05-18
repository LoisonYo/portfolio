import { Component } from '@angular/core';
import { BaseButtonComponent } from '../../shared/components/button/base-button.component';

@Component({
  selector: 'email-button',
  standalone: true,
  imports: [BaseButtonComponent],
  templateUrl: './email-button.component.html',
  styleUrl: './email-button.component.scss'
})
export class EmailButtonComponent {
  email = 'yohann.loison@outlook.com';
}
