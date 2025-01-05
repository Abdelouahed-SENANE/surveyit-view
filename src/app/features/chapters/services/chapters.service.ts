import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerResponse, ChapterResponse, EditionResponse, QuestionResponse, SubchapterResponse, SurveyListResponse, SurveyResponse } from '../../../common/response/api-response.module';
import { env } from '../../../../env/env';
import { AnswerRequestDTO, ChapterRequestDTO, QuestionCreateDTO, SurveyRequestDTO } from '../../../common/response/api-request.module';

@Injectable({
  providedIn: 'root'
})
export class ChapterService  {
  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
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
