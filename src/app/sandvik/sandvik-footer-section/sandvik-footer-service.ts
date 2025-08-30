import { Injectable } from '@angular/core';
import { footerPageLinks } from '../../../util/footerPageLinks';
@Injectable({ providedIn: 'root' })
export class SandvikFooterService {
  get getPageLinks() {
    return footerPageLinks;
  }
}
