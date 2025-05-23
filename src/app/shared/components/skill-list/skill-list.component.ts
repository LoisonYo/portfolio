import { Component, Input } from '@angular/core'
import { Skill } from '../../models/skill.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'skill-list',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent {
    @Input() skills: Skill[] = [];
}