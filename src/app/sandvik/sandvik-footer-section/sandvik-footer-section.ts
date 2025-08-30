import { Component } from '@angular/core';
import { SandvikFooterService } from './sandvik-footer-service';

@Component({
  selector: 'app-sandvik-footer-section',
  imports: [],
  templateUrl: './sandvik-footer-section.html',
  styles: ``,
})
export class SandvikFooterSection {
  footerService: SandvikFooterService;
  constructor(footerService: SandvikFooterService) {
    this.footerService = footerService;
  }
}
