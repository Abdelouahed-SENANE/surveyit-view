import {NgModule} from '@angular/core';
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';

export const routes: Routes = [
  {
    path: "owner",
    component: DashboardLayoutComponent,
    children: [
      {
        path: "surveys",
        loadChildren: () => import('./features/surveys/surveys.module').then(m => m.SurveysModule)
      },
      {
        path: "editions",
        loadChildren: () => import('./features/editions/editions.module').then(m => m.EditionsModule)
      },

    ]
  },

  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'participate',
        loadChildren: () => import('./features/participates/participate.routes').then(r => r.routes)
      },
      {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(r => r.routes)
      },
      {
        path: 'results',
        loadChildren: () => import('./features/results/results.routes').then(r => r.routes)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
