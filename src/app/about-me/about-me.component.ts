import { Component } from '@angular/core';
import { ProfilePictureComponent } from '../about-me/profile-picture/profile-picture.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [ProfilePictureComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  name = 'Yohann Loison';
  profession = 'Software Engineer';
}
