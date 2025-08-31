import { Injectable } from '@angular/core';
import { machinesData } from '../../../util/warehouseItems';
import type { CribwiseWarehouseItemType } from '../../../util/types';

@Injectable({ providedIn: 'root' })
export class MachinesService {
  get getMachinesData() {
    return machinesData;
  }
  addNewTool(machine: CribwiseWarehouseItemType) {
    machinesData.push(machine);
  }
}
