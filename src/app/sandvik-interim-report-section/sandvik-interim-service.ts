import { interimItems } from '../../util/sandvikInterimItems';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SandvikInterimService {
  get getInterimItems() {
    return interimItems;
  }
}
