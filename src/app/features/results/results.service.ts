import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {env} from '../../../env/env';
import {Observable} from 'rxjs';
import {EditionListRespons} from '../../common/response/api-response.module';


@Injectable({
  providedIn : "root"
})

export class ResultsService {
  private readonly http : HttpClient = inject(HttpClient)

  /**
   * This function sends a GET request to the API to retrieve the list of
   * all editions.
   * @returns An observable containing the list of editions.
   */
  getEditions() : Observable<EditionListRespons> {
    return this.http.get<EditionListRespons>(`${env.API_URL}/editions`)
  }
}
