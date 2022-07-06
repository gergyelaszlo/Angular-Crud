import { Component, OnInit } from '@angular/core';
import { BookApiService } from "../../../service/book-api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;
  book: any;

  constructor(private route: ActivatedRoute, private api: BookApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne() {
    this.api.getOne(this.id).subscribe(book => {
      this.book = book;
    })
  }

}
