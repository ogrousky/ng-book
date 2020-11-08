import {Component, Input, OnInit} from '@angular/core';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title: string;
  link: string;
  votes: number;
  @Input() article: Article;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;


  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit(): void {
  }

}
