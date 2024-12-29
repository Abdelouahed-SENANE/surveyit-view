import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionsRoutingModule } from './editions.routes';
import { EditionItemComponent } from './components/edition-item/edition-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditionItemComponent,
  ],
  imports: [
    CommonModule,
    EditionsRoutingModule,
    FormsModule
  
]
})
export class EditionsModule { }
