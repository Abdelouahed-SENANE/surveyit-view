import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionsRoutingModule } from './editions.routes';
import { EditionItemComponent } from './components/edition-item/edition-item.component';


@NgModule({
  declarations: [
    EditionItemComponent,
  ],
  imports: [
    CommonModule,
    EditionsRoutingModule,
  
]
})
export class EditionsModule { }
