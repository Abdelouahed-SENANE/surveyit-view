import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SurveyRequestDTO } from '../../../../shared/response/api-request.module';
import { AppService } from '../../../../core/services/app.service';
import { SurveyResponse } from '../../../../shared/response/api-response.module';
import { Router } from '@angular/router';
import { Survey } from '../../../../core/models';

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


