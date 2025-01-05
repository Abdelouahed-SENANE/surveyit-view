import { Routes } from "@angular/router";
import { ParticipateSelectComponent } from "./components/participate-select/participate-select.component";
import { ParticipateStartComponent } from "./components/participate-start/participate-start.component";

export const routes : Routes = [
      {
            
            path : '',  
            children : [
                  {path : '' , component  : ParticipateSelectComponent},
                  {path : 'start/:id' , component  : ParticipateStartComponent},
            ]
      }


]