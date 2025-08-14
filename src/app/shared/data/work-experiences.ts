import { WorkExperience } from "../models/work-experience.model";
import { Skills } from "./skills";

export class WorkExperiences {
    static ENOVINFO_LEMAN_2024_PRESENT: WorkExperience = new WorkExperience('Software Engineer',
        'e-novinfo Léman SA, Renens',
        'february 2024',
        'present',
        '',
        [
            Skills.SKILL_SYMFONY,
            Skills.SKILL_MARIADB,
            Skills.SKILL_GIT,
            Skills.SKILL_JAVASCRIPT,
            Skills.SKILL_PHP,
            Skills.SKILL_HTML,
            Skills.SKILL_CSS,
            Skills.SKILL_SQL,
            Skills.SKILL_GIT,
            Skills.SKILL_DOCKER
        ]
    );

    static ENOVINFO_SA_2022_2024: WorkExperience = new WorkExperience('Software Engineer',
        'e-novinfo SA, Neuchâtel',
        'june 2022',
        'february 2024',
        '',
        [
            Skills.SKILL_SYMFONY,
            Skills.SKILL_MARIADB,
            Skills.SKILL_GIT,
            Skills.SKILL_JAVASCRIPT,
            Skills.SKILL_PHP,
            Skills.SKILL_HTML,
            Skills.SKILL_CSS,
            Skills.SKILL_SQL,
            Skills.SKILL_GIT,
            Skills.SKILL_DOCKER
        ]
    );

    static ENOVINFO_SA_2021_2022: WorkExperience = new WorkExperience('Software Engineer Intern',
        'e-novinfo SA, Neuchâtel',
        'november 2021',
        'january 2022',
        '',
        [
            Skills.SKILL_SYMFONY,
            Skills.SKILL_MARIADB,
            Skills.SKILL_GIT,
            Skills.SKILL_JAVASCRIPT,
            Skills.SKILL_PHP,
            Skills.SKILL_HTML,
            Skills.SKILL_CSS,
            Skills.SKILL_SQL,
            Skills.SKILL_GIT,
            Skills.SKILL_DOCKER
        ]
    );

    static WORK_EXPERIENCES: WorkExperience[] = [
        WorkExperiences.ENOVINFO_LEMAN_2024_PRESENT,
        WorkExperiences.ENOVINFO_SA_2022_2024,
        WorkExperiences.ENOVINFO_SA_2021_2022
    ]
}