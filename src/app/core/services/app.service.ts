import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditionResponse, QuestionResponse, SurveyListResponse } from '../../commons/response/api-response.module';
import { env } from '../../../env/env';
import { Question } from '../models';
import { QuestionCreateDTO } from '../../commons/response/api-request.module';

@Injectable({
  providedIn: 'root'
})
export class AppService  {
  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
  }

  getSurveys() : Observable<SurveyListResponse> {    
    return this.http.get<SurveyListResponse>(env.API_URL+"/surveys")
  }

  getEdition(id : string) : Observable<EditionResponse>{
    return this.http.get<EditionResponse>(env.API_URL+"/editions/"+id)
  }

  addQuestion(newQuestion : QuestionCreateDTO) : Observable<QuestionResponse> {
    return this.http.post<QuestionResponse>(env.API_URL+"/subchapters/"+newQuestion.subchapterId+"/questions" , newQuestion)
  }

  deleteQuestion(questionId : string) : Observable<QuestionResponse> {
    return this.http.delete<QuestionResponse>(env.API_URL+"/questions/"+questionId)
  }
}
