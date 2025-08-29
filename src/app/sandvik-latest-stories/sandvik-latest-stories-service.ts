import type { SandvikArticleItemType } from '../../util/types';
import { latestStories } from '../../util/sandvikLatestStories';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SandvikLatestStoriesService {
  get getLatestStories() {
    return latestStories;
  }
}
