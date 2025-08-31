import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { MachinesService } from './cribwise-demo-machines-service';
import { CribWiseDemoTableForItems } from '../crib-wise-demo-table-for-items/crib-wise-demo-table-for-items';

@Component({
  selector: 'app-cribwise-demo-machines-page',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar, CribWiseDemoTableForItems],
  templateUrl: './cribwise-demo-machines-page.html',
})
export class CribwiseDemoMachinesPage {
  machinesService: MachinesService;
  constructor(machinesService: MachinesService) {
    this.machinesService = machinesService;
  }
}
