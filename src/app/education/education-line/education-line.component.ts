import { Component, Input } from '@angular/core';
import { Education } from '../../shared/models/education.model';
import { SkillListComponent } from '../../shared/components/skill-list/skill-list.component';

@Component({
  selector: 'education-line',
  standalone: true,
  imports: [SkillListComponent],
  templateUrl: './education-line.component.html',
  styleUrl: './education-line.component.scss'
})
export class EducationLineComponent {
    @Input() education: Education = new Education('Title', 'Company', 'Start', 'End');
}
