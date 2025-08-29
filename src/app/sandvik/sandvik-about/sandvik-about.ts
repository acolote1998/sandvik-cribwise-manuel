import { Component } from '@angular/core';
import { SandvikAboutService } from './sandvik-about-service';
import { SandvikInterimReportItem } from '../sandvik-interim-report-item/sandvik-interim-report-item';
@Component({
  selector: 'app-sandvik-about',
  imports: [SandvikInterimReportItem],
  templateUrl: './sandvik-about.html',
  styles: ``,
})
export class SandvikAbout {
  aboutService: SandvikAboutService;
  constructor(aboutService: SandvikAboutService) {
    this.aboutService = aboutService;
  }
}
