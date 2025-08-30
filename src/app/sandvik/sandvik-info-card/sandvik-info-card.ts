import { Component, Input } from '@angular/core';
import { SandvikArticleItem } from '../sandvik-article-item/sandvik-article-item';
import type { SandvikArticleItemType } from '../../../util/types';

@Component({
  selector: 'app-sandvik-info-card',
  imports: [SandvikArticleItem],
  templateUrl: './sandvik-info-card.html',
  styles: ``,
})
export class SandvikInfoCard {
  @Input({ required: true }) itemData!: SandvikArticleItemType;
}
