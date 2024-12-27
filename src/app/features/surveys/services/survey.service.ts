import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Survey } from '../../../core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService  {
  private URL : string = "http://localhost:8080/api/surveys"
  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
  }

  getSurveys() : Observable<Survey[]> {
   return this.http.get<Survey[]>(this.URL)
  }
}
