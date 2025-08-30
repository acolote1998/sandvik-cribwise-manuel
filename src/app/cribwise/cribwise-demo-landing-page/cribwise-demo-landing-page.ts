import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';

@Component({
  selector: 'app-cribwise-demo-landing-page',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar],
  templateUrl: './cribwise-demo-landing-page.html',
  styles: ``,
})
export class CribwiseDemoLandingPage {}
