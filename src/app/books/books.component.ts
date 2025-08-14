import { Component } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { Books } from '../shared/data/books';
import { BaseSectionComponent } from '../shared/components/section/base-section.component';
import { BookLineComponent } from './book-line/book-line.component';

@Component({
  selector: 'books',
  standalone: true,
  imports: [BaseSectionComponent, BookLineComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
    books: Book[] = Books.BOOKS
}
