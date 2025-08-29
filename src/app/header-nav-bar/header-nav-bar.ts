import { Component } from '@angular/core';
import { HeaderNavBarService } from './header-nav-bar-service';

@Component({
  selector: 'app-header-nav-bar',
  imports: [],
  templateUrl: './header-nav-bar.html',
  styles: ``,
})
export class HeaderNavBar {
  navBarService: HeaderNavBarService;
  constructor(navBarService: HeaderNavBarService) {
    this.navBarService = navBarService;
  }
}
