import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionCreateDTO } from '../../../../common/response/api-request.module';
import { Chapter, Question } from '../../../../core/models';
import { QuestionResponse } from '../../../../common/response/api-response.module';
import { QuestionService } from '../../services/questions.service';

@Component({
  selector: 'app-questions-list',
  imports: [FormsModule],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent {
  @Input() subchapter! : Chapter | undefined
  @Output() onChangeIsQuestion = new EventEmitter<void>();
  @Output() questionChange = new EventEmitter<Question>()
  newQuestion : QuestionCreateDTO = {text : '' , type : 'SINGLE_CHOICE', subchapterId  : this.subchapter?.id}
  question! : Question | undefined
  isAdd : boolean = false
  constructor( private service : QuestionService){}

  toggleIsAdd() {
    this.isAdd = !this.isAdd
  }

  findQuestion(id: string): Question | undefined {
    return this.subchapter?.questions.find(question => question.id === id);;  
  }
  
  deleteQuestion(id : string) : void {
    const confirm = window.confirm("Are you sure to delete this question?");
    if (confirm) {
      this.service.deleteQuestion(id).subscribe({
        next: (res ) => {
          console.log(res);
          this.eraseItem(id)
        },
        error : (err) => {
          console.error(err)
        }
      })
    }
  }
  addQuestion() : void {
    this.newQuestion.subchapterId = this.subchapter?.id    
    if (this.newQuestion.subchapterId) {
      this.service.addQuestion(this.newQuestion).subscribe({
        next : (res : QuestionResponse) => {
          this.subchapter?.questions.push(res.data.question)
          this.toggleIsAdd()
          this.resetForm()
        },
        error : (err) => {
          console.log(err)
        }
      })
    }
  }


  viewsAnswers(id : string) {
    this.onChangeIsQuestion.emit()
    const found = this.findQuestion(id)    
    if(found) {
      this.questionChange.emit(found)
    }
  }
  resetForm() : void {
    this.newQuestion = {text : '' , type : 'SINGLE_CHOICE', subchapterId  : this.subchapter?.id}
  }
  eraseItem(id : string) {
    if (this.subchapter?.questions) {
      const index = this.subchapter?.questions.findIndex(question => question.id === id)
      if (index !== -1) {
         this.subchapter?.questions.splice(index , 1)
      }else {
       console.error("Error delete from array.");
      }
    }
  }

}
