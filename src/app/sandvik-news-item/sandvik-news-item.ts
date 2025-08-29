import { Component, Input } from '@angular/core';
import type { SandvikNewsItemType } from '../../util/types';

@Component({
  selector: 'app-sandvik-news-item',
  imports: [],
  templateUrl: './sandvik-news-item.html',
  styles: ``,
})
export class SandvikNewsItem {
  @Input({ required: true }) itemData!: SandvikNewsItemType;
}
