import { Component, Input } from '@angular/core';
import type { CribwiseWarehouseItemType } from '../../../util/types';

@Component({
  selector: 'app-crib-wise-demo-table-for-items',
  imports: [],
  templateUrl: './crib-wise-demo-table-for-items.html',
  styles: ``,
})
export class CribWiseDemoTableForItems {
  @Input({ required: true }) itemsData!: CribwiseWarehouseItemType[];
}
