import { Component, EventEmitter, OnInit, Output, signal, Signal } from '@angular/core';
import { Survey } from '../../../../core/models';
import { AppService } from '../../../../core/services/app.service';

@Component({
  selector: 'app-survey-list',
  standalone:false,
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit{
  surveys = signal<Survey[]>([]);
  errorMessage: string = ''; 

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
}
