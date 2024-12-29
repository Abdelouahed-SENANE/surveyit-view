import { NgModule } from "@angular/core";
import { SurveyListComponent } from "./components/survey-list/survey-list.component";
import { CommonModule } from "@angular/common";
import { SurveyRoutingModule } from "./surveys.routes";
import { SurveyItemComponent } from "./components/survey-item/survey-item.component";
import { SurveyFormComponent } from "./components/survey-form/survey-form.component";
import { FormsModule } from "@angular/forms";
import { UpdateSurveyComponent } from "./components/update-survey/update-survey.component";


@NgModule({
    declarations : [
        SurveyListComponent,
        SurveyFormComponent,
        UpdateSurveyComponent
    ],
    imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    SurveyItemComponent,
    
]
})
export class SurveysModule {

}