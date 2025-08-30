import { Routes } from '@angular/router';
import { SandvikLandingPage } from './sandvik/sandvik-landing-page/sandvik-landing-page';
import { CribWiseLandingPage } from './cribwise/crib-wise-landing-page/crib-wise-landing-page';

export const routes: Routes = [
  { path: '', component: SandvikLandingPage },
  { path: 'cribwise', component: CribWiseLandingPage },
  { path: '**', redirectTo: '' },
];
