import { Component } from '@angular/core';
import { Header } from '../sandvik-header/header';
import { SandvikInterimReportSection } from '../sandvik-interim-report-section/sandvik-interim-report-section';
import { SandvikNewsComponent } from '../sandvik-news-component/sandvik-news-component';
import { SandvikMixContent } from '../sandvik-mix-content/sandvik-mix-content';
import { SandvikLatestStories } from '../sandvik-latest-stories/sandvik-latest-stories';
import { SandvikUpcomingEvents } from '../sandvik-upcoming-events/sandvik-upcoming-events';
import { SandvikShareInfo } from '../sandvik-share-info/sandvik-share-info';
import { SandvikAbout } from '../sandvik-about/sandvik-about';
SandvikLatestStories;

@Component({
  selector: 'app-sandvik-landing-page',
  imports: [
    Header,
    SandvikInterimReportSection,
    SandvikNewsComponent,
    SandvikMixContent,
    SandvikLatestStories,
    SandvikUpcomingEvents,
    SandvikShareInfo,
    SandvikAbout,
  ],
  templateUrl: './sandvik-landing-page.html',
  styles: ``,
})
export class SandvikLandingPage {}
