import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crib-wise-demo-button-bar',
  imports: [],
  templateUrl: './crib-wise-demo-button-bar.html',
  styles: ``,
})
export class CribWiseDemoButtonBar {
  constructor(private router: Router) {}
  toNewItemForm() {
    this.router.navigate(['cribwise/demo/new-item']);
  }
}
