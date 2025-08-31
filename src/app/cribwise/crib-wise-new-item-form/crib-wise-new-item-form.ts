import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ToolsService } from '../cribwise-demo-tools-page/cribwise-demo-tools-service';
import { MachinesService } from '../cribwise-demo-machines-page/cribwise-demo-machines-service';
import { CribwiseWarehouseItemType } from '../../../util/types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessToast } from '../../util/success-toast/success-toast';
import { Router } from '@angular/router';
import { ErrorToast } from '../../util/error-toast/error-toast';

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
  constructor(
    private router: Router,
    snackBar: MatSnackBar,
    toolsService: ToolsService,
    machinesService: MachinesService
  ) {
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

  areInputsInvalid() {
    return (
      !this.typeOfItem ||
      !this.itemName ||
      this.newQty == null ||
      this.usedQty == null ||
      this.refurbQty == null ||
      this.forServiceQty == null ||
      this.pickedQty == null ||
      this.atLocationQty == null ||
      this.maxQty == null ||
      this.orderPointQty == null ||
      this.minQty == null ||
      this.criticalLevelQty == null ||
      this.missingToMaxQty == null ||
      !this.state ||
      this.activeOrdersQty == null ||
      this.expectFromOrdersQty == null ||
      !this.expetedDateOfDelivery
    );
  }

  createItem() {
    if (this.areInputsInvalid()) {
      this.snackBar.openFromComponent(ErrorToast, {
        duration: 2500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['bg-red-200', 'text-center'],
      });
      return;
    }

    const item: CribwiseWarehouseItemType = {
      id: this.generateUUID(),
      itemName: this.itemName,
      new: this.newQty,
      used: this.usedQty,
      refurb: this.refurbQty,
      forService: this.forServiceQty,
      pickedQuantity: this.pickedQty,
      location: this.atLocationQty,
      maxQuantity: this.maxQty,
      orderPoint: this.orderPointQty,
      minQuantity: this.minQty,
      criticalLevel: this.criticalLevelQty,
      missingToMax: this.missingToMaxQty,
      state: this.calculateState(this.state),
      activeOrders: this.activeOrdersQty,
      expectFromOrders: this.expectFromOrdersQty,
      expectedDate: this.expetedDateOfDelivery,
    };

    if (this.typeOfItem === 'tool') {
      this.toolsService.addNewTool(item);
      this.router.navigate(['cribwise/demo/tools']);
    } else {
      this.machinesService.addNewTool(item);
      this.router.navigate(['cribwise/demo/machines']);
    }

    this.snackBar.openFromComponent(SuccessToast, {
      duration: 1800,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['bg-green-200', 'text-center'],
    });
  }

  generateUUID(): string {
    return crypto.randomUUID();
  }
}
