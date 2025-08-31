import { Component } from '@angular/core';
import { CribwiseDemoHeader } from '../cribwise-demo-header/cribwise-demo-header';
import { CribwiseDemoNavBar } from '../cribwise-demo-nav-bar/cribwise-demo-nav-bar';
import { CribWiseReportsService } from '../crib-wise-reports-service/crib-wise-reports-service';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-cribwise-demo-reports-page',
  imports: [CribwiseDemoHeader, CribwiseDemoNavBar, AgCharts],
  templateUrl: './cribwise-demo-reports-page.html',
})
export class CribwiseDemoReportsPage {
  public machinesVsToolsDistributionOptions: AgChartOptions;
  public functioningVersusServiceMachineOptions: AgChartOptions;
  public functioningVersusServiceToolOptions: AgChartOptions;
  public availableToolsVersusAvailableMachines: AgChartOptions;
  constructor(private reportsService: CribWiseReportsService) {
    this.machinesVsToolsDistributionOptions = {
      data: reportsService.getAllQuantitiesPerItemType,
      title: { text: 'Machines vs Tools Distribution' },
      series: [
        {
          sectorLabelKey: 'name',
          sectorLabel: { color: 'white', fontWeight: 'bold' },
          type: 'pie',
          angleKey: 'quantity',
          legendItemKey: 'name',
        },
      ],
    };
    this.functioningVersusServiceMachineOptions = {
      data: reportsService.getFunctioningVersusInServiceMachines,
      title: { text: 'Functioning vs Needing Service Machines Distribution' },
      series: [
        {
          sectorLabelKey: 'name',
          sectorLabel: { color: 'white', fontWeight: 'bold' },
          type: 'pie',
          angleKey: 'quantity',
          legendItemKey: 'name',
        },
      ],
    };
    this.functioningVersusServiceToolOptions = {
      data: reportsService.getFunctioningVersusInServiceTools,
      title: { text: 'Functioning vs Needing Service Tools Distribution' },
      series: [
        {
          sectorLabelKey: 'name',
          sectorLabel: { color: 'white', fontWeight: 'bold' },
          type: 'pie',
          angleKey: 'quantity',
          legendItemKey: 'name',
        },
      ],
    };
    this.availableToolsVersusAvailableMachines = {
      data: reportsService.getAvailableToolsVersusAvailableMachines,
      title: { text: 'Available Tools vs Available Machines Distribution' },
      series: [
        {
          sectorLabelKey: 'name',
          sectorLabel: { color: 'white', fontWeight: 'bold' },
          type: 'pie',
          angleKey: 'quantity',
          legendItemKey: 'name',
        },
      ],
    };
  }
}
