import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'sleep',
  //   loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  // },
  // {
  //   path: 'sleepiness',
  //   loadChildren: () => import('./sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
  // },
  // {
  //   path: 'history',
  //   loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
