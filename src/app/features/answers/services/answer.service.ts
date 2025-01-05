import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerResponse, ChapterResponse, EditionResponse, QuestionResponse, SubchapterResponse, SurveyListResponse, SurveyResponse } from '../../../common/response/api-response.module';
import { env } from '../../../../env/env';
import { AnswerRequestDTO, ChapterRequestDTO, QuestionCreateDTO, SurveyRequestDTO } from '../../../common/response/api-request.module';

@Injectable({
  providedIn: 'root'
})
export class AnswerService  {
  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
  }



  addAnswer(newAnswer : AnswerRequestDTO) : Observable<AnswerResponse> {
    return this.http.post<AnswerResponse>(env.API_URL+"/answers" , newAnswer)
  }

  deleteAnswer(answerId : string) : Observable<AnswerResponse> {
    return this.http.delete<AnswerResponse>(env.API_URL+"/answers/"+answerId)
  }
 

}
