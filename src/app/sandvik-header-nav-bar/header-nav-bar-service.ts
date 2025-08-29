import { Injectable } from '@angular/core';
import { sandvikNavBarItems } from '../../util/sandvikNavBarItems';
import { SandvikNavBarItem } from '../../util/types';
@Injectable({ providedIn: 'root' })
export class HeaderNavBarService {
  get getNavBarItems(): SandvikNavBarItem[] {
    return sandvikNavBarItems;
  }
}
