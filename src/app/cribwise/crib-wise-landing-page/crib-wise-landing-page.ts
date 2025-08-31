import { Component } from '@angular/core';
import { CribWiseLandingNavBar } from '../crib-wise-landing-nav-bar/crib-wise-landing-nav-bar';
import { Router } from '@angular/router';
import { SandvikMobileDisclaimer } from '../../sandvik/sandvik-mobile-disclaimer/sandvik-mobile-disclaimer';

@Component({
  selector: 'app-crib-wise-landing-page',
  imports: [CribWiseLandingNavBar, SandvikMobileDisclaimer],
  templateUrl: './crib-wise-landing-page.html',
  styles: ``,
})
export class CribWiseLandingPage {
  constructor(private router: Router) {}
  toCribwiseDemoPage() {
    this.router.navigate(['cribwise/demo']);
  }
}
