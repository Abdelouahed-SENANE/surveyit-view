import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditionResponse, SurveyListResponse } from '../../commons/response/api-response.module';
import { env } from '../../../env/env';

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
  
}
