import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { CribWiseDemoTableForItems } from '../crib-wise-demo-table-for-items/crib-wise-demo-table-for-items';
import { ToolsService } from './cribwise-demo-tools-service';
import { CribWiseDemoButtonBar } from '../crib-wise-demo-button-bar/crib-wise-demo-button-bar';

@Component({
  selector: 'app-cribwise-demo-tools-page',
  imports: [
    CribwiseDemoHeader,
    CribwiseDemoNavBar,
    CribWiseDemoTableForItems,
    CribWiseDemoButtonBar,
  ],
  templateUrl: './cribwise-demo-tools-page.html',
})
export class CribwiseDemoToolsPage {
  toolsService: ToolsService;
  constructor(toolsService: ToolsService) {
    this.toolsService = toolsService;
  }
}
