import { Component, EventEmitter, Input, OnInit, Output, signal, Signal } from '@angular/core';
import { Survey } from '../../../../core/models';
import { SurveyRequestDTO } from '../../../../common/response/api-request.module';
import { SurveyService } from '../../services/surveys.service';

@Component({
  selector: 'app-survey-list',
  standalone:false,
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit{
  @Input() surveys : Survey[] | undefined;
  isActive : boolean = false
  newSurvey : SurveyRequestDTO = {id: '' , title : '' , description : '' , ownerId : '1'}
  constructor(private service: SurveyService) {}

  ngOnInit(): void {
    this.loadSurveys(); 
  }

  loadSurveys(): void {
    this.service.getSurveys().subscribe({
      next : (res) => {
        this.surveys = res.data.surveys
      },
      error: (err) => {
        console.error(err)
      }
    }
    
    );

  }

  addSurvey(newSurevy : SurveyRequestDTO) : void {
    console.log(newSurevy.description , newSurevy.ownerId);
    
    this.service.addSurvey(newSurevy).subscribe({
      next : (res) => {
        this.surveys?.push(res.data.survey)
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
