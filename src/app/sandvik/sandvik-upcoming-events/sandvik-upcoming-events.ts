import { Component } from '@angular/core';
import { SandvikUpcomingEventsService } from './sandvik-upcoming-events-service';
import { SandvikUpcomingEventItem } from '../sandvik-upcoming-event-item/sandvik-upcoming-event-item';

@Component({
  selector: 'app-sandvik-upcoming-events',
  imports: [SandvikUpcomingEventItem],
  templateUrl: './sandvik-upcoming-events.html',
  styles: ``,
})
export class SandvikUpcomingEvents {
  upcomingEventsService: SandvikUpcomingEventsService;
  constructor(upcomingEventsService: SandvikUpcomingEventsService) {
    this.upcomingEventsService = upcomingEventsService;
  }
}
