import { Component, EventEmitter, OnInit, Output, signal, Signal } from '@angular/core';
import { Survey } from '../../../../core/models';
import { AppService } from '../../../../core/services/app.service';
import { SurveyRequestDTO } from '../../../../shared/response/api-request.module';

@Component({
  selector: 'app-survey-list',
  standalone:false,
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit{
  surveys = signal<Survey[]>([]);
  isActive : boolean = false
  // newSurvey : SurveyRequestDTO = {title : '' , description : '' , ownerId : '1'}
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.loadSurveys(); 
  }

  loadSurveys(): void {
    this.service.getSurveys().subscribe({
      next : (res) => {
        this.surveys.set(res.data.surveys)
      },
      error: (err) => {
        console.error(err)
      }
    }
    
    );

  }

  addSurvey(newSurevy : SurveyRequestDTO) : void {
    this.service.addSurvey(newSurevy).subscribe({
      next : (res) => {
        console.log(res.data.survey);
        window.location.href = '/admin/surveys/all'
      },
      error : (err) => {
        console.error(err)
      }
    })
  }

  onChangeIsActive(newState : boolean) : void {
    this.isActive = newState
  }


}
