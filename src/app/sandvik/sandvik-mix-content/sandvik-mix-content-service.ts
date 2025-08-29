import { Injectable } from '@angular/core';
import { mixContentItems } from '../../../util/sandvikMixContentItems';

@Injectable({ providedIn: 'root' })
export class SandvikMixContentService {
  get getMixContentItems() {
    return mixContentItems;
  }
}
