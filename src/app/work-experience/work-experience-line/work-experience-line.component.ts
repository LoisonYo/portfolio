import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../shared/models/work-experience.model';
import { SkillListComponent } from '../../shared/components/skill-list/skill-list.component';

@Component({
  selector: 'work-experience-line',
  standalone: true,
  imports: [SkillListComponent],
  templateUrl: './work-experience-line.component.html',
  styleUrl: './work-experience-line.component.scss'
})
export class WorkExperienceLineComponent {
  @Input() workExperience: WorkExperience = new WorkExperience('Title', 'Company', 'Start', 'End');
}