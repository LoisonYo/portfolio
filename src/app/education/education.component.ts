import { Component } from '@angular/core';
import { BaseSectionComponent } from '../shared/components/section/base-section.component';
import { Education } from '../shared/models/education.model';
import { Educations } from '../shared/data/educations';
import { EducationLineComponent } from './education-line/education-line.component';

@Component({
  selector: 'education',
  standalone: true,
  imports: [BaseSectionComponent, EducationLineComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
    educations: Education[] = Educations.EDUCATIONS
}
