import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from "./work-experience/work-experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, AboutMeComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
