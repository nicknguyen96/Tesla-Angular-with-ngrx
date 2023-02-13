import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class bookService {
  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get('https://openlibrary.org/subjects/world.json');
  }
}
