import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cribwise-demo-header',
  imports: [],
  templateUrl: './cribwise-demo-header.html',
  styles: ``,
})
export class CribwiseDemoHeader {
  constructor(private router: Router) {}
  toIndex() {
    this.router.navigate(['/cribwise/demo']);
  }
}
