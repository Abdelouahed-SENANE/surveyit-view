import {NgModule} from '@angular/core';
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DashboardLayoutComponent} from './layouts/dashboard-layout/dashboard-layout.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/services/auth/auth.guard';
import { UnauthorizedComponent } from './features/errors/unauthorized/unauthorized.component';

export const routes: Routes = [
  {
    path: "owner",
    component: DashboardLayoutComponent,
    data : {requiredRole : 'ROLE_OWNER'},
    canActivate : [AuthGuard],
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
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes').then(r => r.routes)
      },
    ]
  },
  {
    path : 'unauthorized',
    component : UnauthorizedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
