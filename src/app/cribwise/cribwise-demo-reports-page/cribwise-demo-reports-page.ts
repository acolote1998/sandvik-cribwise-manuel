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
  public chartOptions: AgChartOptions;
  constructor(private reportsService: CribWiseReportsService) {
    this.chartOptions = {
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
  }
}
