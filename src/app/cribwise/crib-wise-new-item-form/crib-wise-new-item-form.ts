import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-crib-wise-new-item-form',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar, FormsModule],
  templateUrl: './crib-wise-new-item-form.html',
  styles: ``,
})
export class CribWiseNewItemForm {
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
}
