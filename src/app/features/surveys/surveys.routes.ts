import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { SurveyListComponent } from "./components/survey-list/survey-list.component";
import { EditionItemComponent } from "../editions/components/edition-item/edition-item.component";



const routes : Routes = [
    {
        path : '',
        children : [
            {
                path: "all",
                component : SurveyListComponent
            }
        ]
    }
    
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class SurveyRoutingModule {}