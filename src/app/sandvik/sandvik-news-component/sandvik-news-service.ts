import { Injectable } from '@angular/core';
import { newsItems } from '../../../util/sandvikNewsItems';
@Injectable({ providedIn: 'root' })
export class SandvikNewsService {
  get getNewsItems() {
    return newsItems;
  }
}
