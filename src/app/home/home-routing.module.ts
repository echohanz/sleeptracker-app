import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      // {
      //   path:'home',
      //   children: [
      //     {
      //       path:'',
      //       loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      //     }
      //   ]
      // },
      {
        path:'sleep',
        children: [
          {
            path:'',
            loadChildren: () => import('../sleep/sleep.module').then( m => m.SleepPageModule)
          }
        ]
      },
      {
        path: 'sleepiness',
        children: [
          {
            path:'',
            loadChildren: () => import('../sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
          }
        ]
      },
      {
        path:'history',
        children: [
          {
            path:'',
            loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/sleep',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sleep',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
