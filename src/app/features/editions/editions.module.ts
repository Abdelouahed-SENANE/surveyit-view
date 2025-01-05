import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionsRoutingModule } from './editions.routes';
import { EditionItemComponent } from './components/edition-item/edition-item.component';
import { FormsModule } from '@angular/forms';
import { QuestionsListComponent } from "../questions/components/questions-list/questions-list.component";
import { AnswerListComponent } from '../answers/components/answer-list/answer-list.component';
import { ChapterNodeComponent } from '../chapters/components/chapter-tree/chapter-tree.component';
import { ChapterItemComponent } from "../chapters/components/chapter-item/chapter-item.component";
import { ErrorComponent } from "../../common/components/error/error.component";


@NgModule({
  declarations: [
    EditionItemComponent,
  ],
  imports: [
    CommonModule,
    EditionsRoutingModule,
    FormsModule,
    QuestionsListComponent,
    AnswerListComponent,
    ChapterNodeComponent,
    ChapterItemComponent,
    ErrorComponent
]
})
export class EditionsModule { }
