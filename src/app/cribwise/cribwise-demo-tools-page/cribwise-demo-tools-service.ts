import { Injectable } from '@angular/core';
import { toolsData } from '../../../util/warehouseItems';
import { CribwiseWarehouseItemType } from '../../../util/types';

@Injectable({ providedIn: 'root' })
export class ToolsService {
  get getToolsData() {
    return toolsData;
  }
  addNewTool(tool: CribwiseWarehouseItemType) {
    toolsData.push(tool);
  }
}
