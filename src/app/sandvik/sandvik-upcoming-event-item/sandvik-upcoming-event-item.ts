import { Component, Input } from '@angular/core';
import type { SandvikUpcomingEventItemType } from '../../../util/types';

@Component({
  selector: 'app-sandvik-upcoming-event-item',
  imports: [],
  templateUrl: './sandvik-upcoming-event-item.html',
  styles: ``,
})
export class SandvikUpcomingEventItem {
  @Input({ required: true }) itemData!: SandvikUpcomingEventItemType;
}
