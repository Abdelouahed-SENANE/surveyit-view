import { Component, inject, OnInit } from '@angular/core';
import { Chapter, Edition, Question } from '../../../../core/models';
import { ActivatedRoute } from '@angular/router';
import { ParticipateService } from '../../services/participates.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-participate-start',
  imports: [
    NgForOf
  ],
  templateUrl: './participate-start.component.html',
  styleUrl: './participate-start.component.css'
})
export class ParticipateStartComponent implements OnInit {
  private readonly route : ActivatedRoute = inject(ActivatedRoute)
  private readonly service : ParticipateService = inject(ParticipateService)
  edition! : Edition
  data : {title : string , questions : Question[]}[] = []
  chapterIndex : number = 0
  questionIndex : number = 0
  ngOnInit(): void {
    this.loadEdition()
  }

  loadEdition() : void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id')
        if (id) {
          this.service.readEdition(id).subscribe({
            next : (res) =>{
              this.edition= res.data.edition
              if (this.edition.chapters) {
                this.findChapterAndHisQuestion(this.edition.chapters)
              }
              console.log(this.data)
            },
            error : (err) => {
              console.error(err)
            }
          })
        }
      })
    }


  private findChapterAndHisQuestion(chapters: Chapter[]) {
    for (const chapter of chapters) {
      if (chapter.questions && chapter.questions.length > 0) {
        this.data.push({ title: chapter.title, questions: chapter.questions });
      } else {
        if (chapter.subchapters && chapter.subchapters.length > 0) {
          this.findChapterAndHisQuestion(chapter.subchapters);
        }
      }
    }
  }


  protected readonly inject = inject;
}
