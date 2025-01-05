import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyRequestDTO } from '../../../../common/response/api-request.module';


@Component({
  selector: 'app-survey-form',
  standalone : false,
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent {
  @Input() isActive! : boolean
  @Input() survey : SurveyRequestDTO = {id : '', title : '' , description : '' , ownerId : '1'}

  @Output() toggleForm : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submit : EventEmitter<SurveyRequestDTO> = new EventEmitter<SurveyRequestDTO>();


  setIsActive() : void {
    this.isActive = !this.isActive
    this.toggleForm.emit(this.isActive)
  }

  onSubmit() : void {
    this.submit.emit(this.survey)
    this.resetForm()
    this.isActive = false
  }

  resetForm() : void {
    this.survey = {id : '',title : '' , description : '' , ownerId : '1'}
  }

  }


