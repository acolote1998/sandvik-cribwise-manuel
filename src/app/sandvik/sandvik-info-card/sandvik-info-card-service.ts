import { Injectable } from '@angular/core';
import { infoCards } from '../../../util/sandvikInfoCards';
@Injectable({ providedIn: 'root' })
export class SandvikInfoCardService {
  get getInfoCards() {
    return infoCards;
  }
}
