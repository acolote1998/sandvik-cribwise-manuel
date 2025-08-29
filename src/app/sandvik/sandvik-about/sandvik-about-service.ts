import { Injectable } from '@angular/core';
import { aboutItems } from '../../../util/sandvikAboutItems';

@Injectable({ providedIn: 'root' })
export class SandvikAboutService {
  get getAboutItems() {
    return aboutItems;
  }
}
