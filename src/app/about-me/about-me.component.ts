import { Component } from '@angular/core';
import { ProfilePictureComponent } from '../about-me/profile-picture/profile-picture.component';
import { ResumeButtonComponent } from "./resume-button/resume-button.component";
import { EmailButtonComponent } from './email-button/email-button.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [ProfilePictureComponent, ResumeButtonComponent, EmailButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  name = 'Yohann Loison';
  profession = 'Software Engineer';
}