import { Component } from '@angular/core';
import { SandvikMixContentService } from './sandvik-mix-content-service';

@Component({
  selector: 'app-sandvik-mix-content',
  imports: [],
  templateUrl: './sandvik-mix-content.html',
  styles: ``,
})
export class SandvikMixContent {
  mixContentService: SandvikMixContentService;
  constructor(mixContentService: SandvikMixContentService) {
    this.mixContentService = mixContentService;
  }
}
