import { Component, Input } from '@angular/core';
import { SandvikInterimItemType } from '../../../util/types';

@Component({
  selector: 'app-sandvik-interim-report-item',
  imports: [],
  templateUrl: './sandvik-interim-report-item.html',
})
export class SandvikInterimReportItem {
  @Input({ required: true }) itemData!: SandvikInterimItemType;
}
