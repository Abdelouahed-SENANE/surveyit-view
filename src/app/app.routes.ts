import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
    {
        path: "admin",
        component : DashboardLayout,
        children : [
            {
                path : "surveys",
                loadChildren : () => import('./features/surveys/surveys.module').then(m => m.SurveysModule)
            },
            {
                path : "editions",
                loadChildren : () => import('./features/editions/editions.module').then(m => m.EditionsModule)
            }
        ]
    },
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}
