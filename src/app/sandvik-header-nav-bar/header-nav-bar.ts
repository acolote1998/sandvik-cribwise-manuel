import { Component } from '@angular/core';
import { HeaderNavBarService } from './header-nav-bar-service';
import { SandvikNavBarItemComponent } from '../sandvik-nav-bar-item-component/sandvik-nav-bar-item-component';

@Component({
  selector: 'app-header-nav-bar',
  imports: [SandvikNavBarItemComponent],
  templateUrl: './header-nav-bar.html',
  styles: ``,
})
export class HeaderNavBar {
  navBarService: HeaderNavBarService;
  constructor(navBarService: HeaderNavBarService) {
    this.navBarService = navBarService;
  }
}
