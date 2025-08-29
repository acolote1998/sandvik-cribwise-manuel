import { Component } from '@angular/core';
import { SandvikLatestStoriesService } from './sandvik-latest-stories-service';
import { SandvikArticleItem } from '../sandvik-article-item/sandvik-article-item';

@Component({
  selector: 'app-sandvik-latest-stories',
  imports: [SandvikArticleItem],
  templateUrl: './sandvik-latest-stories.html',
  styles: ``,
})
export class SandvikLatestStories {
  latestStoriesService: SandvikLatestStoriesService;
  constructor(latestStoriesService: SandvikLatestStoriesService) {
    this.latestStoriesService = latestStoriesService;
  }
}
