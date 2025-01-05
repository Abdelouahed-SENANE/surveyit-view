import { inject, Injectable, OnInit } from "@angular/core";
import { SurveyService } from "../../surveys/services/surveys.service";
import { EditionService } from "../../editions/services/editions.service";

@Injectable({
      providedIn:"root"
})
export class ParticipateService {
      private readonly editionService : EditionService = inject(EditionService);

      public readAllEditions() {
            return this.editionService.getEditions()
      }
      public readEdition(id : string) {
            return this.editionService.getEdition(id)
      }

}
