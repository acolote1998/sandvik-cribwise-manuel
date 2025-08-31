import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { SandvikMobileDisclaimer } from '../../sandvik/sandvik-mobile-disclaimer/sandvik-mobile-disclaimer';

@Component({
  selector: 'app-cribwise-demo-landing-page',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar, SandvikMobileDisclaimer],
  templateUrl: './cribwise-demo-landing-page.html',
  styles: ``,
})
export class CribwiseDemoLandingPage {}
