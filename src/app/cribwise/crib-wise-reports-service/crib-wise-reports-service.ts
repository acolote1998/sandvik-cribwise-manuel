import { ToolsService } from '../cribwise-demo-tools-page/cribwise-demo-tools-service';
import { MachinesService } from '../cribwise-demo-machines-page/cribwise-demo-machines-service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CribWiseReportsService {
  constructor(private toolsService: ToolsService, private machinesService: MachinesService) {}
  get getAllItems() {
    return [...this.toolsService.getToolsData, ...this.machinesService.getMachinesData];
  }
  get getAllQuantitiesPerItemType() {
    return [
      { name: 'Tools', quantity: this.toolsService.getToolsData.length },
      { name: 'Machines', quantity: this.machinesService.getMachinesData.length },
    ];
  }
  get getFunctioningVersusInServiceMachines() {
    let functioningMachines = 0;
    this.machinesService.getMachinesData.forEach((machine) => {
      functioningMachines += machine.new;
      functioningMachines += machine.used;
      functioningMachines += machine.refurb;
    });
    let machinesNeedingService = 0;
    this.machinesService.getMachinesData.forEach((machine) => {
      machinesNeedingService += machine.forService;
    });
    return [
      {
        name: 'Functional',
        quantity: functioningMachines,
      },
      { name: 'Needing Service', quantity: machinesNeedingService },
    ];
  }
}
