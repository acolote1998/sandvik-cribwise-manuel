import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SandvikLandingPage } from './sandvik/sandvik-landing-page/sandvik-landing-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SandvikLandingPage],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sandvik-cribwise-manuel');
}
