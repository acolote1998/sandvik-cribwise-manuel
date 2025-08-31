import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crib-wise-demo-title-block',
  imports: [],
  templateUrl: './crib-wise-demo-title-block.html',
  styles: ``,
})
export class CribWiseDemoTitleBlock {
  @Input({ required: true }) title!: string;
}
