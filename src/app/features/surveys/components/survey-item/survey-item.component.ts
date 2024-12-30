import { Component, Input } from '@angular/core';
import { Survey } from '../../../../core/models';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../../core/services/app.service';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { SurveyRequestDTO } from '../../../../shared/response/api-request.module';

@Component({
  selector: 'app-survey-item',
  standalone : false,
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey 
  existSurvey! : SurveyRequestDTO;
  isActive! : boolean
  constructor(private service : AppService){}
  
  onToggle(newState : boolean) : void {
    this.isActive = !this.isActive
  }

  deleteSurvey(id : string) {
    const confirm = window.confirm("Are you sure to delete this survey.")
    if(confirm){
      this.service.deleteSurvey(id).subscribe({
        next : (res) => {
          
          window.location.href = "/admin/surveys/all"
        },
        error : (err) => {
          console.error(err)
        }
      })
    }
  }

  editSurvey(updateSurvey : SurveyRequestDTO) : void {
    updateSurvey.ownerId = '1'
    this.service.editSurvey(updateSurvey).subscribe({
      next : (res) => {
        console.log(res.data.survey);
        window.location.href = '/admin/surveys/all'
      },
      error : (err) => {
        console.error(err)
      }
    })
    }
}
