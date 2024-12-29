import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionItemComponent } from './components/edition-item/edition-item.component';

const routes: Routes = [
  {
    path : '',
    children : [
      {path : ':id' , component : EditionItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionsRoutingModule { }
