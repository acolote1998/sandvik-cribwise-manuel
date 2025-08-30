import { Routes } from '@angular/router';
import { SandvikLandingPage } from './sandvik/sandvik-landing-page/sandvik-landing-page';
import { CribWiseLandingPage } from './cribwise/crib-wise-landing-page/crib-wise-landing-page';
import { CribwiseDemoLandingPage } from './cribwise/cribwise-demo-landing-page/cribwise-demo-landing-page';
import { CribwiseDemoReportsPage } from './cribwise/cribwise-demo-reports-page/cribwise-demo-reports-page';
import { CribwiseDemoToolsPage } from './cribwise/cribwise-demo-tools-page/cribwise-demo-tools-page';
import { CribwiseDemoMachinesPage } from './cribwise/cribwise-demo-machines-page/cribwise-demo-machines-page';
import { CribwiseDemoAboutThisDemoPage } from './cribwise/cribwise-demo-about-this-demo-page/cribwise-demo-about-this-demo-page';

export const routes: Routes = [
  { path: '', component: SandvikLandingPage },
  { path: 'cribwise', component: CribWiseLandingPage },
  { path: 'cribwise/demo', component: CribwiseDemoLandingPage },
  { path: 'cribwise/demo/reports', component: CribwiseDemoReportsPage },
  { path: 'cribwise/demo/tools', component: CribwiseDemoToolsPage },
  { path: 'cribwise/demo/machines', component: CribwiseDemoMachinesPage },
  { path: 'cribwise/demo/about-this-demo', component: CribwiseDemoAboutThisDemoPage },
  { path: '**', redirectTo: '' },
];
