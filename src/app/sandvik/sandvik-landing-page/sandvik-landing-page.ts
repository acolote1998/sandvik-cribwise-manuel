import { Component } from '@angular/core';
import { Header } from '../sandvik-header/header';
import { SandvikInterimReportSection } from '../sandvik-interim-report-section/sandvik-interim-report-section';
import { SandvikNewsComponent } from '../sandvik-news-component/sandvik-news-component';
import { SandvikMixContent } from '../sandvik-mix-content/sandvik-mix-content';

@Component({
  selector: 'app-sandvik-landing-page',
  imports: [Header, SandvikInterimReportSection, SandvikNewsComponent, SandvikMixContent],
  templateUrl: './sandvik-landing-page.html',
  styles: ``,
})
export class SandvikLandingPage {}
