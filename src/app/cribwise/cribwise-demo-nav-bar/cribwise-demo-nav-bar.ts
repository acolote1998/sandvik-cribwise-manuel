import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cribwise-demo-nav-bar',
  imports: [],
  templateUrl: './cribwise-demo-nav-bar.html',
  styles: ``,
})
export class CribwiseDemoNavBar {
  constructor(private router: Router) {}
  toReportsPage() {
    this.router.navigate(['cribwise/demo/reports']);
  }
  toToolsPage() {
    this.router.navigate(['cribwise/demo/tools']);
  }
  toMachinesPage() {
    this.router.navigate(['cribwise/demo/machines']);
  }
  toAboutThisDemoPage() {
    this.router.navigate(['cribwise/demo/about-this-demo']);
  }
}
