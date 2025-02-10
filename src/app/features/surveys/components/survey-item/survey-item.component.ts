import { Component, Input } from '@angular/core';
import { Survey } from '../../../../core/models';
import { SurveyRequestDTO } from '../../../../common/response/api-request.module';
import { SurveyService } from '../../services/surveys.service';

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
  constructor(private service : SurveyService){}
  
  onToggle(newState : boolean) : void {
    this.isActive = !this.isActive
  }

  deleteSurvey(id : string) {
    const confirm = window.confirm("Are you sure to delete this survey.")
    if(confirm){
      this.service.deleteSurvey(id).subscribe({
        next : (res) => {
          window.location.href = "/owner/surveys/all"
        },
        error : (err) => {
          console.error(err)
        }
      })
    }
  }

  editSurvey(updateSurvey : SurveyRequestDTO) : void {
    this.service.editSurvey(updateSurvey).subscribe({
      next : (res) => {
        window.location.href = '/owner/surveys/all'
      },
      error : (err) => {
        console.error(err)
      }
    })
    }
}
