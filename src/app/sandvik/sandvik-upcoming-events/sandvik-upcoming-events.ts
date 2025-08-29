import { Component } from '@angular/core';
import { SandvikUpcomingEventsService } from './sandvik-upcoming-events-service';

@Component({
  selector: 'app-sandvik-upcoming-events',
  imports: [],
  templateUrl: './sandvik-upcoming-events.html',
  styles: ``,
})
export class SandvikUpcomingEvents {
  upcomingEventsService: SandvikUpcomingEventsService;
  constructor(upcomingEventsService: SandvikUpcomingEventsService) {
    this.upcomingEventsService = upcomingEventsService;
  }
}
