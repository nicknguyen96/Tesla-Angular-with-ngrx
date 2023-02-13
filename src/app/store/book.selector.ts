import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookState } from './book.states';

export const bookStateSelector = createFeatureSelector<bookState>('books');
export const bookSelector = createSelector(
  bookStateSelector,
  (state) => state.books
);

export const selectedBookSelector = createSelector(
  bookStateSelector,
  (state) => state.selectedBook
);

export const bookFilterSelector = createSelector(
  bookStateSelector,
  (state) => state.filterBooks
);

export const selectedIndexSelector = createSelector(
  bookStateSelector,
  (state) => state.selectedIndex
);
