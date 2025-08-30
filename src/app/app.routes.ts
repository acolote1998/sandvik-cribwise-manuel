import { Routes } from '@angular/router';
import { SandvikLandingPage } from './sandvik/sandvik-landing-page/sandvik-landing-page';
import { CribWiseLandingPage } from './cribwise/crib-wise-landing-page/crib-wise-landing-page';
import { CribwiseDemoLandingPage } from './cribwise/cribwise-demo-landing-page/cribwise-demo-landing-page';

export const routes: Routes = [
  { path: '', component: SandvikLandingPage },
  { path: 'cribwise', component: CribWiseLandingPage },
  { path: 'cribwise/demo', component: CribwiseDemoLandingPage },
  { path: '**', redirectTo: '' },
];
