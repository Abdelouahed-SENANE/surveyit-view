import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Survey } from '../../../../core/models';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey-list',
  standalone:false,
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit{
  private service : SurveyService
   surveys : Survey[] = []
  constructor(service : SurveyService) {
    this.service = service
  }
  ngOnInit(): void {
    this.service.getSurveys().subscribe({
      next: (data) => {
        this.surveys = data
        console.log(data)
      },
      error : (error) =>{
        console.error("Error Fetching " + error);
        
      }
    })
  }
}
