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

  get getFunctioningVersusInServiceTools() {
    let functioningtools = 0;
    this.toolsService.getToolsData.forEach((tool) => {
      functioningtools += tool.new;
      functioningtools += tool.used;
      functioningtools += tool.refurb;
    });
    let toolsNeedingService = 0;
    this.toolsService.getToolsData.forEach((tool) => {
      toolsNeedingService += tool.forService;
    });
    return [
      {
        name: 'Functional',
        quantity: functioningtools,
      },
      { name: 'Needing Service', quantity: toolsNeedingService },
    ];
  }

  get getAvailableToolsVersusAvailableMachines() {
    let availableTools = 0;
    let availableMachines = 0;
    this.toolsService.getToolsData.forEach((tool) => {
      if (tool.state) {
        availableTools++;
      }
    });
    this.machinesService.getMachinesData.forEach((machine) => {
      if (machine.state) {
        availableMachines++;
      }
    });
    return [
      {
        name: 'Available Tools',
        quantity: availableTools,
      },
      { name: 'Available Machines', quantity: availableMachines },
    ];
  }
}
