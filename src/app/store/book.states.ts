export interface bookState {
  books: Book[];
  filterBooks: Book[];
  selectedBook: Book | null;
  selectedIndex: number;
}

export interface Book {
  title: string;
  author: string[];
}
