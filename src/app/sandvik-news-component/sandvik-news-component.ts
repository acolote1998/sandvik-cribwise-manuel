import { Component } from '@angular/core';
import { SandvikNewsService } from './sandvik-news-service';
import { SandvikNewsItem } from '../sandvik-news-item/sandvik-news-item';

@Component({
  selector: 'app-sandvik-news-component',
  imports: [SandvikNewsItem],
  templateUrl: './sandvik-news-component.html',
  styles: ``,
})
export class SandvikNewsComponent {
  newsService: SandvikNewsService;
  constructor(newsService: SandvikNewsService) {
    this.newsService = newsService;
  }
}
