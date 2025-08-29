import { Injectable } from '@angular/core';
import { sandvikNavBarItems } from '../../util/sandvikNavBarItems';
import { SandvikNavBarItemType } from '../../util/types';
@Injectable({ providedIn: 'root' })
export class HeaderNavBarService {
  get getNavBarItems(): SandvikNavBarItemType[] {
    return sandvikNavBarItems;
  }
}
