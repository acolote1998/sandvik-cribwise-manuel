import { Component } from '@angular/core';
import { SandvikNewsService } from './sandvik-news-service';
import { SandvikArticleItem } from '../sandvik-article-item/sandvik-article-item';

@Component({
  selector: 'app-sandvik-news-component',
  imports: [SandvikArticleItem],
  templateUrl: './sandvik-news-component.html',
  styles: ``,
})
export class SandvikNewsComponent {
  newsService: SandvikNewsService;
  constructor(newsService: SandvikNewsService) {
    this.newsService = newsService;
  }
}
