import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crib-wise-landing-nav-bar',
  imports: [],
  templateUrl: './crib-wise-landing-nav-bar.html',
  styles: ``,
})
export class CribWiseLandingNavBar {
  constructor(private router: Router) {}
  toSandvikLandingPage() {
    this.router.navigate(['/']);
  }
}
