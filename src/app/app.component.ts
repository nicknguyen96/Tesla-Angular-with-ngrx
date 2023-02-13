import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bookService } from './book.service';
import { bookAction } from './store/book.actions';
import {
  bookFilterSelector,
  selectedBookSelector,
  selectedIndexSelector,
} from './store/book.selector';
import { Book } from './store/book.states';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private bookService: bookService, private store: Store) {}
  // filterBooks: Book[] = [];
  selectedBook$: Observable<Book | null> =
    this.store.select(selectedBookSelector);
  selectedIndex$ = this.store.select(selectedIndexSelector);
  keyword = '';

  filterBooks$ = this.store.select(bookFilterSelector);

  onChange() {
    this.store.dispatch(bookAction.filterBooks({ keyword: this.keyword }));
  }

  onSelected(index: number) {
    // this.selectedBook = this.filterBooks[index];
    this.store.dispatch(bookAction.selectBook({ index }));
  }

  ngOnInit() {
    this.bookService.getBook().subscribe((data: any) => {
      console.log(data.works);
      let books: Book[] = [];
      if (data.works && Array.isArray(data.works)) {
        data.works.forEach((book: any) => {
          let newBook: Book = {
            title: book.title,
            author: [],
          };
          book.authors.forEach((author) => {
            newBook.author.push(author.name);
          });
          books.push(newBook);
        });
        console.log(books);
        this.store.dispatch(bookAction.setBooks({ books }));
      }
    });
  }
}
