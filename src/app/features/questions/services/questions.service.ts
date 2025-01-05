import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerResponse, ChapterResponse, EditionResponse, QuestionResponse, SubchapterResponse, SurveyListResponse, SurveyResponse } from '../../../common/response/api-response.module';
import { env } from '../../../../env/env';
import { AnswerRequestDTO, ChapterRequestDTO, QuestionCreateDTO, SurveyRequestDTO } from '../../../common/response/api-request.module';

@Injectable({
  providedIn: 'root'
})
export class QuestionService  {
  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
  }

  addQuestion(newQuestion : QuestionCreateDTO) : Observable<QuestionResponse> {
    return this.http.post<QuestionResponse>(env.API_URL+"/subchapters/"+newQuestion.subchapterId+"/questions" , newQuestion)
  }

  addAnswer(newAnswer : AnswerRequestDTO) : Observable<AnswerResponse> {
    return this.http.post<AnswerResponse>(env.API_URL+"/answers" , newAnswer)
  }

  deleteQuestion(questionId : string) : Observable<QuestionResponse> {
    return this.http.delete<QuestionResponse>(env.API_URL+"/questions/"+questionId)
  }

 
}
