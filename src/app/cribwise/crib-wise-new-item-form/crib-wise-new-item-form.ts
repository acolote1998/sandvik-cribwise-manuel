import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';

@Component({
  selector: 'app-crib-wise-new-item-form',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar],
  templateUrl: './crib-wise-new-item-form.html',
  styles: ``,
})
export class CribWiseNewItemForm {}
