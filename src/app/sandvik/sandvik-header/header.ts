import { Component } from '@angular/core';
import { HeaderNavBar } from '../sandvik-header-nav-bar/header-nav-bar';
import { SandvikNavBarSideBar } from '../sandvik-nav-bar-side-bar/sandvik-nav-bar-side-bar';
import { SandvikHeaderContent } from '../sandvik-header-content/sandvik-header-content';

@Component({
  selector: 'app-header',
  imports: [HeaderNavBar, SandvikNavBarSideBar, SandvikHeaderContent],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {}
