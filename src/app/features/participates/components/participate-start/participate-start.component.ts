import {Component, inject, OnInit} from '@angular/core';
import {Chapter, Edition, Question} from '../../../../core/models';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {ParticipateService} from '../../services/participates.service';
import {NgForOf, NgIf} from '@angular/common';
import {data} from 'autoprefixer';
import {ignoreElements} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../../../../common/components/header/header.component';
import {LoaderComponent} from '../../../../common/components/loader/loader.component';

@Component({
  selector: 'app-participate-start',
  imports: [NgForOf, FormsModule, LoaderComponent],
  templateUrl: './participate-start.component.html',
  styleUrl: './participate-start.component.css'
})
export class ParticipateStartComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  private readonly router: Router = inject(Router)
  private readonly service: ParticipateService = inject(ParticipateService)
  edition!: Edition
  data: { title: string, questions: Question[] }[] = []
  chapterIndex: number = 0
  questionIndex: number = 0
  isFinished: boolean = false;
  isLoading: boolean = true;

  multi: { questionId: string, answers: {answerId : string}[] } = {
    questionId: '',
    answers: []
  }
  single: { questionId: string, answerId: string } = {
    questionId: '',
    answerId: ''
  }
  resetMulti() { 
    this.multi = {
      questionId: '',
      answers: []
    }
  }
  resetSingle() {
    this.single = {
      questionId: '',
      answerId: ''
    }
  }
   ngOnInit(): void {

      this.loadEdition();


  }

  loadProgress(): void {
    const progress = localStorage.getItem('progress');
    console.log(progress);
    if (progress) {
      const parse = JSON.parse(progress);
      if (this.edition.id == parse.editionId) {
        this.questionIndex = parse.questionIndex
        this.chapterIndex = parse.chapterIndex
      }

    }
  }

  loadEdition(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id')
        if (id) {
          this.service.readEdition(id).subscribe({
            next: (res) => {
              this.edition = res.data.edition
              if (this.edition.chapters) {
                this.findChapterAndHisQuestion(this.edition.chapters)
              }
              console.log(this.data)
            },
            error: (err) => {
              console.error(err)
            },
            complete : () => {
              this.loadProgress();
              setTimeout(() => {
                this.isLoading = false
              }, 300);
            }
          })
        }
      })


  }

  onChangeAnswers(answerId: string, event: Event): void {

    const checkbox = event.target as HTMLInputElement;
    this.multi.questionId = this.data[this.chapterIndex].questions[this.questionIndex].id
    if (checkbox.checked) {
      if (!this.multi.answers.some(a => a.answerId === answerId)) {
        this.multi.answers.push({answerId : answerId})
      }
    } else {
      this.multi.answers = this.multi.answers.filter(a => a.answerId != answerId)
    }
    console.log(this.multi);
    
  }

  onChangeAnswer(answerId: string): void {
    this.single.questionId = this.data[this.chapterIndex].questions[this.questionIndex].id
    this.single.answerId = answerId
  }

  submitForm(newParticipation: any) {
      this.service.addParticipation(newParticipation ,this.edition.survey.id).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.error(err)
        }
      })
    }

  private findChapterAndHisQuestion(chapters: Chapter[]) {
    for (const chapter of chapters) {
      if (chapter.questions && chapter.questions.length > 0) {
        this.data.push({title: chapter.title, questions: chapter.questions});
      } else {
        if (chapter.subchapters && chapter.subchapters.length > 0) {
          this.findChapterAndHisQuestion(chapter.subchapters);
        }
      }
    }
  }

  next() {


    const currentQuestion: Question = this.data[this.chapterIndex].questions[this.questionIndex]

    if (currentQuestion.type == "SINGLE_CHOICE") {
      if (this.single.questionId && this.single.answerId) {
        this.submitForm(this.single)
     }
    } else {
      if (this.multi.questionId && this.multi.answers) {
        this.submitForm(this.multi)
      }
    }

    const currentChapter = this.data[this.chapterIndex];

    if (!currentChapter || !currentChapter.questions) {
      console.error('Chapter not found.');
      return;
    }

    const TOTAL_QUESTIONS = currentChapter.questions.length;

    if (this.questionIndex < TOTAL_QUESTIONS - 1) {
      this.questionIndex++;
    } else if (this.chapterIndex < this.data.length - 1) {
      this.questionIndex = 0;
      this.chapterIndex++;
    } else {
      this.isFinished = true;
      setTimeout(() => {
        this.router.navigate(['/participate']);
      },5000)
      this.restProgress()
      return;
    }
    this.saveProgress()
    this.resetMulti()
    this.resetSingle()
  }


  private saveProgress() {
    const progress = {editionId: this.edition.id, chapterIndex: this.chapterIndex, questionIndex: this.questionIndex}
    localStorage.setItem("progress", JSON.stringify(progress));
  }

  private restProgress() {
    const progress = {editionId: this.edition.id, chapterIndex: 0, questionIndex: 0}

    localStorage.setItem("progress", JSON.stringify(progress));
  }


  skip() {

    if (this.chapterIndex < this.data.length - 1) {
      this.chapterIndex++;
      this.questionIndex = 0;
      console.log(`Skipped to Chapter Index: ${this.chapterIndex}, Question Index: ${this.questionIndex}`);
    } else {

      console.log("No more chapters to skip to.");

    }
  }

}
