import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cribwise-demo-landing-page',
  imports: [],
  templateUrl: './cribwise-demo-landing-page.html',
  styles: ``,
})
export class CribwiseDemoLandingPage {
  constructor(private router: Router) {}
  toIndex() {
    this.router.navigate(['/cribwise/demo']);
  }
}
