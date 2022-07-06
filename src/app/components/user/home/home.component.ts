import { Component, OnInit } from '@angular/core';
import { BookApiService } from "../../../service/book-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: BookApiService) { }

  ngOnInit(): void {
  }

}
