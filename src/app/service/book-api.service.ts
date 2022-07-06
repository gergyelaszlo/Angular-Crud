import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BookModel } from "../model/book-model";
import { map } from "rxjs";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }

  postBook(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>("http://localhost:3000/books", book).pipe(map((resp: any) => {
      return resp;
    }));
  }

  getBook(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>("http://localhost:3000/books").pipe(map((resp: any) => {
      return resp;
    }));
  }

  updateBook(book: any, id: number) {
    return this.http.put<any>("http://localhost:3000/books/" + id, book).pipe(map((resp: any) => {
      return resp;
    }));
  }

  deleteBook(book: BookModel): Observable<BookModel> {
    return this.http.delete<BookModel>("http://localhost:3000/books/" + '/' + book.id).pipe(map((resp: any) => {
      return resp;
    }));
  }

  getOne(id: any) {
    return this.http.get<any>("http://localhost:3000/books/" + id).pipe(map((resp: any) => {
      return resp;
    }));
  }

}
