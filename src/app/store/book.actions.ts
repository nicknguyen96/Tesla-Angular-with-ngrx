import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from './book.states';

export const bookAction = createActionGroup({
  source: 'Book Component',
  events: {
    'get book': emptyProps(),
    'set books': props<{ books: Book[] }>(),
    'filter books': props<{ keyword: string }>(),
    'select book': props<{ index: number }>(),
  },
});
