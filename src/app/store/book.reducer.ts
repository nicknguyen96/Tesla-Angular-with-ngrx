import { createReducer, on } from '@ngrx/store';
import { bookAction } from './book.actions';
import { bookState, Book } from './book.states';

const initialState: bookState = {
  books: [],
  selectedBook: null,
  filterBooks: [],
  selectedIndex: -1,
};

const _bookReducer = createReducer(
  initialState,
  on(bookAction.getBook, (state, action) => {
    return state;
  }),
  on(bookAction.setBooks, (state, action) => {
    return {
      ...state,
      books: action.books,
      filterBooks: action.books,
    };
  }),
  on(bookAction.filterBooks, (state, action) => {
    let filterBooks = [...state.books];
    let { keyword } = action;
    if (keyword != '') {
      filterBooks = filterBooks.filter((book) => {
        if (book.title.toLowerCase().includes(keyword.toLowerCase()))
          return true;
        let result = book.author.some((author) => {
          if (author.toLowerCase().includes(keyword.toLowerCase())) return true;
          else return false;
        });
        if (result) return true;
        return false;
      });
    }
    return {
      ...state,
      filterBooks: filterBooks,
    };
  }),
  on(bookAction.selectBook, (state, action) => {
    return {
      ...state,
      selectedIndex: action.index,
      selectedBook: state.books[action.index],
    };
  })
);

export const bookReducer = (state: any, action: any) => {
  return _bookReducer(state, action);
};
