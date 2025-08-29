import { Component } from '@angular/core';
import { Header } from '../sandvik-header/header';
import { SandvikInterimReportSection } from '../sandvik-interim-report-section/sandvik-interim-report-section';

@Component({
  selector: 'app-sandvik-landing-page',
  imports: [Header, SandvikInterimReportSection],
  templateUrl: './sandvik-landing-page.html',
  styles: ``,
})
export class SandvikLandingPage {}
