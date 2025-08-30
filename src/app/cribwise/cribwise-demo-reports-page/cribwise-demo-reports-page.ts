import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';

@Component({
  selector: 'app-cribwise-demo-reports-page',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar],
  templateUrl: './cribwise-demo-reports-page.html',
})
export class CribwiseDemoReportsPage {}
