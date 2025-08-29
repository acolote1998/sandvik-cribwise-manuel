import { Component } from '@angular/core';
import { SandvikMixContentService } from './sandvik-mix-content-service';
import { SandvikArticleItem } from '../sandvik-article-item/sandvik-article-item';

@Component({
  selector: 'app-sandvik-mix-content',
  imports: [SandvikArticleItem],
  templateUrl: './sandvik-mix-content.html',
  styles: ``,
})
export class SandvikMixContent {
  mixContentService: SandvikMixContentService;
  constructor(mixContentService: SandvikMixContentService) {
    this.mixContentService = mixContentService;
  }
}
