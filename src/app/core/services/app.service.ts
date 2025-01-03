import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerResponse, ChapterResponse, EditionResponse, QuestionResponse, SubchapterResponse, SurveyListResponse, SurveyResponse } from '../../shared/response/api-response.module';
import { env } from '../../../env/env';
import { AnswerRequestDTO, ChapterRequestDTO, QuestionCreateDTO, SurveyRequestDTO } from '../../shared/response/api-request.module';

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

  addAnswer(newAnswer : AnswerRequestDTO) : Observable<AnswerResponse> {
    return this.http.post<AnswerResponse>(env.API_URL+"/answers" , newAnswer)
  }

  deleteAnswer(answerId : string) : Observable<AnswerResponse> {
    return this.http.delete<AnswerResponse>(env.API_URL+"/answers/"+answerId)
  }
  deleteQuestion(questionId : string) : Observable<QuestionResponse> {
    return this.http.delete<QuestionResponse>(env.API_URL+"/questions/"+questionId)
  }

  addSurvey(newSurvey : SurveyRequestDTO) : Observable<SurveyResponse> {
    return this.http.post<SurveyResponse>(env.API_URL+"/surveys" , newSurvey)
  }
  editSurvey(updateSurevy : SurveyRequestDTO) : Observable<SurveyResponse> {        
    return this.http.put<SurveyResponse>(env.API_URL+"/surveys/"+updateSurevy.id , updateSurevy)
  }
  deleteSurvey(surveyId : string) : Observable<SurveyResponse> {

    return this.http.delete<SurveyResponse>(env.API_URL+"/surveys/"+surveyId)
  }

  addChapter(newChapter : ChapterRequestDTO , editionId : string) : Observable<ChapterResponse> {
    return this.http.post<ChapterResponse>(env.API_URL+"/editions/"+editionId+"/chapters", newChapter)
  }

  addSubchapter(newSuchapter : ChapterRequestDTO , chapterId : string ) : Observable<SubchapterResponse> {
    return this.http.post<SubchapterResponse>(env.API_URL+"/chapters/"+chapterId + "/subchapters", newSuchapter)
  }

  deleteChapter(id : string) : Observable<ChapterResponse> {
    return this.http.delete<ChapterResponse>(env.API_URL+"/chapters/"+id)

  }

}
