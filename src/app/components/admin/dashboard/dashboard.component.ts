import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { BookModel } from "../../../model/book-model";
import { BookApiService } from "../../../service/book-api.service";
import { NgToastService } from "ng-angular-popup";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('crudtable', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  bookForm!: FormGroup;
  bookModelObj: BookModel = new BookModel;
  allBookData: any;

  constructor(private api: BookApiService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      "title": new FormControl(null, [Validators.required]),
      "description": new FormControl(null, [Validators.required]),
      "author": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "publisher": new FormControl(null, [Validators.required]),
      "price": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    });
    this.getAllBooks();
  }

  get title() {
    return this.bookForm.get("title");
  }

  get description() {
    return this.bookForm.get("description");
  }

  get author() {
    return this.bookForm.get("author");
  }

  get publisher() {
    return this.bookForm.get("publisher");
  }

  get price() {
    return this.bookForm.get("price");
  }

  addBookToData() {
    this.bookModelObj.title = this.bookForm.value.title;
    this.bookModelObj.description = this.bookForm.value.description;
    this.bookModelObj.author = this.bookForm.value.author;
    this.bookModelObj.publisher = this.bookForm.value.publisher;
    this.bookModelObj.price = this.bookForm.value.price;

    this.api.postBook(this.bookModelObj).subscribe(res => {
      this.toast.success({detail: "Success message", summary: "Book successfully added!"});
      this.bookForm.reset();
      this.getAllBooks();
    }, error => {
      this.toast.error({detail: "Error message", summary: "Adding book went wrong."});
    });
  }

  getAllBooks() {
    this.api.getBook().subscribe(res => {
      this.allBookData = res;
    });
  }

  deleteBookFromData(book: BookModel) {
    this.api.deleteBook(book).subscribe(res => {
      this.toast.success({detail: "Success message", summary: "Book successfully deleted!"});
      this.getAllBooks();
    });
  }

  editBookData(book: any) {
    this.bookModelObj.id = book.id;
    this.bookForm.controls["title"].setValue(book._title);
    this.bookForm.controls["description"].setValue(book._description);
    this.bookForm.controls["author"].setValue(book._author);
    this.bookForm.controls["publisher"].setValue(book._publisher);
    this.bookForm.controls["price"].setValue(book._price);
  }

  updateBookData() {
    this.bookModelObj.title = this.bookForm.value.title;
    this.bookModelObj.description = this.bookForm.value.description;
    this.bookModelObj.author = this.bookForm.value.author;
    this.bookModelObj.publisher = this.bookForm.value.publisher;
    this.bookModelObj.price = this.bookForm.value.price;

    this.api.updateBook(this.bookModelObj, this.bookModelObj.id).subscribe(res => {
      this.toast.success({detail: "Success message", summary: "Book successfully updated!"});
      this.bookForm.reset();
      this.getAllBooks();
    });

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllBooks();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllBooks();
  }

}
