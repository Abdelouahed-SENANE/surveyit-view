import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './commons/layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: "admin",
        component : AdminLayoutComponent,
        children : [
            {
                path : "surveys",
                loadChildren : () => import('./features/surveys/surveys.module').then(m => m.SurveysModule)
            }
            // {
            //     path : "owners",
            //     loadChildren : () => import('./features/owners/owner-list/').then(m => m.EditionsModule)
            // }
        ]
    },
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}
