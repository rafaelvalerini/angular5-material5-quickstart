import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  articles : Array<Article>;

  constructor( private __articleService : ArticleService ) { }

  ngOnInit() {
    this.__articleService.getArticles()
    .subscribe(res=>this.articles = res);
  }

}
