import { Injectable } from '@angular/core';
import { upcomingEvents } from '../../../util/sandvikUpcomingEvents';

@Injectable({ providedIn: 'root' })
export class SandvikUpcomingEventsService {
  get getUpcomingEvents() {
    return upcomingEvents;
  }
}
