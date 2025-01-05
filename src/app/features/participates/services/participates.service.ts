import { inject, Injectable, OnInit } from "@angular/core";
import { SurveyService } from "../../surveys/services/surveys.service";
import { EditionService } from "../../editions/services/editions.service";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {env} from '../../../../env/env';

@Injectable({
      providedIn:"root"
})
export class ParticipateService {
      private readonly http: HttpClient = inject(HttpClient);
      private readonly editionService : EditionService = inject(EditionService);

      public readAllEditions() {
            return this.editionService.getEditions()
      }
      public readEdition(id : string) {
            return this.editionService.getEdition(id)
      }

      public addParticipation(newParticipation : any , surveyId : string)  : Observable<any> {
        return this.http.post<any>(env.API_URL + "/surveys/"+ surveyId+"/participate", newParticipation)
      }

}
