import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  EditionListRespons, EditionResponse } from '../../../common/response/api-response.module';
import { env } from '../../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class EditionService  {

  private http : HttpClient;
  constructor(http : HttpClient) { 
    this.http = http
  }

  getEdition(id : string) : Observable<EditionResponse>{
    return this.http.get<EditionResponse>(env.API_URL+"/editions/"+id)
  }

  getEditions() : Observable<EditionListRespons>{
    return this.http.get<EditionListRespons>(env.API_URL+"/editions")
  }

}
