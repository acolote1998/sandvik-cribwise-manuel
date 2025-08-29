import { Component } from '@angular/core';
import { SandvikNewsService } from './sandvik-news-service';

@Component({
  selector: 'app-sandvik-news-component',
  imports: [],
  templateUrl: './sandvik-news-component.html',
  styles: ``,
})
export class SandvikNewsComponent {
  newsService: SandvikNewsService;
  constructor(newsService: SandvikNewsService) {
    this.newsService = newsService;
  }
}
