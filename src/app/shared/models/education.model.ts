import { Skill } from "./skill.model";

export class Education {
    title: string;
    company: string;
    start: string;
    end: string;
    description: string;
    skills: Skill[];
  
    constructor(title: string, company: string, start: string, end: string, description: string = '', skills: Skill[] = []) {
      this.title = title;
      this.company = company;
      this.start = start;
      this.end = end;
      this.description = description;
      this.skills = skills;
    }
  }