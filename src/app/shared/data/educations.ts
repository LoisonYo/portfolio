import { Education } from "../models/education.model";

export class Educations {

    static HEARC: Education = new Education('Bachelor of science HES-SO in Software engineering',
        'Haute-Ecole ARC, Neuchâtel',
        'september 2017',
        'august 2021',
        '',
        []
    )

    static CPLN: Education = new Education('CFC in Computer science with Maturity Certificate',
        'CPLN, Neuchâtel',
        'august 2014',
        'july 2017',
        '',
        []
    );

    static EDUCATIONS: Education[] = [
        Educations.HEARC,
        Educations.CPLN
    ]
}
