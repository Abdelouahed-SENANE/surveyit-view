import {Routes} from '@angular/router';
import {ResultItemComponent} from './components/result-item/result-item.component';
import {ResultListComponent} from './components/result-list/result-list.component';


export const routes : Routes = [
  {path : '', component : ResultListComponent},
  {path : ':name/edition/:id' , component : ResultItemComponent}
]
