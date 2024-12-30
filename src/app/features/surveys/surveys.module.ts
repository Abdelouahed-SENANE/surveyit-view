import { NgModule } from "@angular/core";
import { SurveyListComponent } from "./components/survey-list/survey-list.component";
import { CommonModule } from "@angular/common";
import { SurveyRoutingModule } from "./surveys.routes";
import { SurveyItemComponent } from "./components/survey-item/survey-item.component";
import { SurveyFormComponent } from "./components/survey-form/survey-form.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations : [
        SurveyListComponent,
        SurveyItemComponent,
        SurveyFormComponent, 
    ],
    imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,

]
})
export class SurveysModule {

}