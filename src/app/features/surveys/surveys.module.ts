import { NgModule } from "@angular/core";
import { SurveyListComponent } from "./components/survey-list/survey-list.component";
import { CommonModule } from "@angular/common";
import { SurveyRoutingModule } from "./surveys.routes";
import { SurveyItemComponent } from "./components/survey-item/survey-item.component";


@NgModule({
    declarations : [
        SurveyListComponent
    ],
    imports: [
    CommonModule,
    SurveyRoutingModule,
    SurveyItemComponent
]
})
export class SurveysModule {

}