import { Component, EventEmitter, OnInit, Output, signal, Signal } from '@angular/core';
import { Survey } from '../../../../core/models';
import { AppService } from '../../../../core/services/app.service';
import { SurveyResponse } from '../../../../commons/response/api-response.module';

@Component({
  selector: 'app-survey-list',
  standalone:false,
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit{
  surveys = signal<Survey[]>([]); // Initialize the signal for surveys
  errorMessage: string = ''; 
  constructor(private service: AppService) {} // Use dependency injection for AppService


  ngOnInit(): void {

    this.loadSurveys(); 

  }
  loadSurveys(): void {

    this.service.getSurveys().subscribe(

      (res: SurveyResponse) => {

        this.surveys.set(res.data.surveys); 

      },

      (error) => {

        this.errorMessage = error; // Handle the error

      }

    );

  }
}
