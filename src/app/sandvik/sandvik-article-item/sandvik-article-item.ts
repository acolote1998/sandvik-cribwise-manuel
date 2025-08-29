import { Component, Input } from '@angular/core';
import type { SandvikArticleItemType } from '../../../util/types';

@Component({
  selector: 'app-sandvik-article-item',
  imports: [],
  templateUrl: './sandvik-article-item.html',
  styles: ``,
})
export class SandvikArticleItem {
  @Input({ required: true }) itemData!: SandvikArticleItemType;
}
