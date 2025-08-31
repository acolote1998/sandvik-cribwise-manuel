import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { MachinesService } from './cribwise-demo-machines-service';
import { CribWiseDemoTableForItems } from '../crib-wise-demo-table-for-items/crib-wise-demo-table-for-items';
import { CribWiseDemoButtonBar } from '../../crib-wise-demo-button-bar/crib-wise-demo-button-bar';

@Component({
  selector: 'app-cribwise-demo-machines-page',
  imports: [
    CribwiseDemoHeader,
    CribwiseDemoNavBar,
    CribWiseDemoTableForItems,
    CribWiseDemoButtonBar,
  ],
  templateUrl: './cribwise-demo-machines-page.html',
})
export class CribwiseDemoMachinesPage {
  machinesService: MachinesService;
  constructor(machinesService: MachinesService) {
    this.machinesService = machinesService;
  }
}
