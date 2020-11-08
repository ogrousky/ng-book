import {Component} from '@angular/core';
import {Article} from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement): boolean {
    const newarticle = new Article(newtitle.value, newlink.value, 0);
    this.articles.push(newarticle);
    return false;
  }
}
