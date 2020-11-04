import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title :string;
  link:string;
  votes:number;
  constructor() {
    this.title="test";

  }

  ngOnInit(): void {
  }

}
