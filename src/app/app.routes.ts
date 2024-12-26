import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './commons/layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: "admin",
        component : AdminLayoutComponent,
        children : [
            {
                path : "survey",
                loadChildren : () => import('./features/surveys/surveys.module').then(m => m.SurveysModule)
            }
        ]
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}
