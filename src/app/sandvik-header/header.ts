import { Component } from '@angular/core';
import { HeaderNavBar } from '../sandvik-header-nav-bar/header-nav-bar';
import { SandvikNavBarSideBar } from '../sandvik-nav-bar-side-bar/sandvik-nav-bar-side-bar';

@Component({
  selector: 'app-header',
  imports: [HeaderNavBar, SandvikNavBarSideBar],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {}
