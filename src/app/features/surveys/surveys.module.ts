import { NgModule } from "@angular/core";
import { SurveyListComponent } from "./survey-list/survey-list.component";
import { CommonModule } from "@angular/common";
import { SurveyRoutingModule } from "./surveys.routes";


@NgModule({
    declarations : [
        SurveyListComponent
    ],
    imports : [
        CommonModule,
        SurveyRoutingModule
    ]
})
export class SurveysModule {

}