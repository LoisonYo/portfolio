import { Component, Input } from '@angular/core';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'book-line',
  standalone: true,
  imports: [],
  templateUrl: './book-line.component.html',
  styleUrl: './book-line.component.scss'
})
export class BookLineComponent {
    @Input() book: Book = new Book('Title', 'Author', 2025);
}
