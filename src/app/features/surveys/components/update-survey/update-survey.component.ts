import { Component, Input } from '@angular/core';
import { Survey } from '../../../../core/models';
import { SurveyCreateDTO } from '../../../../shared/response/api-request.module';

@Component({
  selector: 'app-update-survey',
  standalone : false,
  templateUrl: './update-survey.component.html',
  styleUrl: './update-survey.component.css'
})
export class UpdateSurveyComponent {
  @Input() isActive! : boolean 
  @Input() survey! : Survey

  toggleForm() : void {
    this.isActive = !this.isActive
  }

  updateSurvey() : void{

  }
}
