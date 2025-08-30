import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sandvik-nav-bar-side-bar',
  imports: [],
  templateUrl: './sandvik-nav-bar-side-bar.html',
  styles: ``,
})
export class SandvikNavBarSideBar {
  constructor(private router: Router) {}
  goToCribwise() {
    this.router.navigate(['/cribwise']);
  }
}
