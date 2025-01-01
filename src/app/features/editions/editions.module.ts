import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionsRoutingModule } from './editions.routes';
import { EditionItemComponent } from './components/edition-item/edition-item.component';
import { FormsModule } from '@angular/forms';
import { QuestionsTableComponent } from "../questions/components/questions-table/questions-table.component";
import { AnswerTableComponent } from '../answers/components/answer-table/answer-table.component';
import { ChapterNodeComponent } from '../chapters/components/chapter-tree/chapter-tree.component';


@NgModule({
  declarations: [
    EditionItemComponent,
  ],
  imports: [
    CommonModule,
    EditionsRoutingModule,
    FormsModule,
    QuestionsTableComponent,
    AnswerTableComponent,
    ChapterNodeComponent
]
})
export class EditionsModule { }
