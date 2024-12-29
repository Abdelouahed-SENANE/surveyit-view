import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyCreateDTO } from '../../../../shared/response/api-request.module';
import { AppService } from '../../../../core/services/app.service';
import { SurveyResponse } from '../../../../shared/response/api-response.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  standalone : false,
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent {
  @Input() isActive! : boolean
  @Output() isActiveChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  newSurvey : SurveyCreateDTO = {title : '' , description : '' , ownerId : '1'}
  constructor(private service : AppService , private router : Router){}
  toggleForm() : void {
    this.isActive = !this.isActive
    this.isActiveChange.emit(this.isActive)
  }

  addSurvey() : void {    
    this.service.addSurvey(this.newSurvey).subscribe({
      next : (res : SurveyResponse) => {
        console.log(res.data.survey);
        this.resetForm()
        this.isActive = false
        window.alert("Survey " + this.newSurvey.title + "added sucessfully.")
        setTimeout(() => {
          window.location.href = '/admin/surveys/all'
        },300)
      },
      error : (err) => {
        console.error(err);
      }
    })


  }
  resetForm() : void {
    this.newSurvey = {title : '' , description : '' , ownerId : '1'}

  }
}
