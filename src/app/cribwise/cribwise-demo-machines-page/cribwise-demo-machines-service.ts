import { Injectable } from '@angular/core';
import { machinesData } from '../../../util/warehouseItems';

@Injectable({ providedIn: 'root' })
export class MachinesService {
  get getMachinesData() {
    return machinesData;
  }
}
