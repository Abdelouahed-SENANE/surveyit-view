import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyListResponse, SurveyResponse } from '../../../common/response/api-response.module';
import {env} from '../../../../env/env'
import { SurveyRequestDTO } from '../../../common/response/api-request.module';
@Injectable({
  providedIn: 'root'
})
export class SurveyService  {
  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
  }

  getSurveys() : Observable<SurveyListResponse> {    
    return this.http.get<SurveyListResponse>(env.API_URL+"/surveys")
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


}
