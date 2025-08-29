import { Component } from '@angular/core';
import { HeaderNavBarService } from './header-nav-bar-service';

@Component({
  selector: 'app-header-nav-bar',
  imports: [],
  templateUrl: './header-nav-bar.html',
  styles: ``,
})
export class HeaderNavBar {
  constructor(private navBarService: HeaderNavBarService) {
    this.navBarService = navBarService;
  }
}
