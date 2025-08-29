import { Component, Input } from '@angular/core';
import { SandvikNavBarItemType } from '../../util/types';

@Component({
  selector: 'app-sandvik-nav-bar-item-component',
  imports: [],
  templateUrl: './sandvik-nav-bar-item-component.html',
  styles: ``,
})
export class SandvikNavBarItemComponent {
  @Input({ required: true }) itemData!: SandvikNavBarItemType;
}
