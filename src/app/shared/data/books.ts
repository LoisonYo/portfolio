import { Book } from "../models/book.model";
import { WorkExperience } from "../models/work-experience.model";
import { Skills } from "./skills";

export class Books {
    static MODERN_SOFTWARE_ENGINEERING: Book = new Book('Modern Software Engineering: Doing What Works to Build Better Software Faster',
        'David Farley',
        2021
    );

    static CLEAN_CODE: Book = new Book('Clean Code: A Handbook of Agile Software Craftsmanship',
        'Robert C. Martin',
        2008
    )

    static BOOKS: Book[] = [
        Books.MODERN_SOFTWARE_ENGINEERING,
        Books.CLEAN_CODE
    ]
}