import { Component } from '@angular/core';
import { WorkExperience } from '../shared/models/work-experience.model';
import { WorkExperiences } from '../shared/data/work-experiences';
import { BaseSectionComponent } from '../shared/components/section/base-section.component';
import { WorkExperienceLineComponent } from './work-experience-line/work-experience-line.component';

@Component({
  selector: 'work-experience',
  standalone: true,
  imports: [BaseSectionComponent, WorkExperienceLineComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  workExperiences: WorkExperience[] = WorkExperiences.WORK_EXPERIENCES;
}