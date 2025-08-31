import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ToolsService } from '../cribwise-demo-tools-page/cribwise-demo-tools-service';
import { MachinesService } from '../cribwise-demo-machines-page/cribwise-demo-machines-service';
import { CribwiseWarehouseItemType } from '../../../util/types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessToast } from '../../success-toast/success-toast';

@Component({
  selector: 'app-crib-wise-new-item-form',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar, FormsModule],
  templateUrl: './crib-wise-new-item-form.html',
  styles: ``,
})
export class CribWiseNewItemForm {
  toolsService: ToolsService;
  machinesService: MachinesService;
  snackBar: MatSnackBar;
  constructor(snackBar: MatSnackBar, toolsService: ToolsService, machinesService: MachinesService) {
    this.snackBar = snackBar;
    this.toolsService = toolsService;
    this.machinesService = machinesService;
  }
  typeOfItem!: 'tool' | 'machine';
  itemName!: string;
  newQty!: number;
  usedQty!: number;
  refurbQty!: number;
  forServiceQty!: number;
  pickedQty!: number;
  atLocationQty!: number;
  maxQty!: number;
  orderPointQty!: number;
  minQty!: number;
  criticalLevelQty!: number;
  missingToMaxQty!: number;
  state!: string;
  activeOrdersQty!: number;
  expectFromOrdersQty!: number;
  expetedDateOfDelivery!: string;

  calculateState(availability: string) {
    if (availability === 'available') {
      return true;
    } else return false;
  }
  createItem(item: CribwiseWarehouseItemType) {
    if (this.typeOfItem === 'tool') {
      this.toolsService.addNewTool(item);
    } else if (this.typeOfItem === 'machine') {
      this.machinesService.addNewTool(item);
    }
    this.snackBar.openFromComponent(SuccessToast, {
      duration: 1000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
  generateUUID(): string {
    return crypto.randomUUID();
  }
}
