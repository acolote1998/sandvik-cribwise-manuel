import { Component } from '@angular/core';
import { SandvikInterimService } from './sandvik-interim-service';
import { SandvikInterimReportItem } from '../sandvik-interim-report-item/sandvik-interim-report-item';

@Component({
  selector: 'app-sandvik-interim-report-section',
  imports: [SandvikInterimReportItem],
  templateUrl: './sandvik-interim-report-section.html',
  styles: ``,
})
export class SandvikInterimReportSection {
  interimService: SandvikInterimService;
  constructor(interimService: SandvikInterimService) {
    this.interimService = interimService;
  }
}
