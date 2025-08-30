import { Injectable } from '@angular/core';
import { toolsData } from '../../../util/warehouseItems';

@Injectable({ providedIn: 'root' })
export class ToolsService {
  get getToolsData() {
    return toolsData;
  }
}
