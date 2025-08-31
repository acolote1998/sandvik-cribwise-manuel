import { ToolsService } from '../cribwise-demo-tools-page/cribwise-demo-tools-service';
import { MachinesService } from '../cribwise-demo-machines-page/cribwise-demo-machines-service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CribWiseReportsService {
  constructor(private toolsService: ToolsService, private machinesService: MachinesService) {}
  get getAllItems() {
    return [...this.toolsService.getToolsData, ...this.machinesService.getMachinesData];
  }
}
