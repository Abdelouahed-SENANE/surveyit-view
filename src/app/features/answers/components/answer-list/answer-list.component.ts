import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../../core/models';
import { AnswerRequestDTO } from '../../../../common/response/api-request.module';
import { AnswerResponse } from '../../../../common/response/api-response.module';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-answer-list',
  imports: [FormsModule],
  templateUrl: './answer-list.component.html',
  styleUrl: './answer-list.component.css'
})
export class AnswerListComponent implements OnInit{
  @Input() question! : Question | undefined
  @Output() onChangeIsQuestion = new EventEmitter<void>();
  
  newAnswer : AnswerRequestDTO = {id : '' , text : '' , selectionCount : 0, questionId  : this.question?.id}

  constructor( private service : AnswerService){
    
  }
  ngOnInit(): void {
    console.log(this.question);
  }

  viewQuestions() : void {
    this.onChangeIsQuestion.emit()
  }

  deleteAnswer(id : string) : void {
    const confirm = window.confirm("Are you sure to delete this answer?");
    if (confirm) {
      this.service.deleteAnswer(id).subscribe({
        next: (res ) => {
          this.eraseItem(id)
          console.log(res);
        },
        error : (err) => {
          console.error(err)
        }
      })
    }
  }
  addAnswer() : void {
    this.newAnswer.questionId = this.question?.id
    
    if (this.newAnswer.questionId) {
      this.service.addAnswer(this.newAnswer).subscribe({
        next : (res : AnswerResponse) => {
          this.question?.answers.push(res.data.answer)
          this.resetForm()
        },
        error : (err) => {
          console.log(err)
        }
      })
    }
  }
  eraseItem(id : string) {
    if (this.question?.answers) {
      const index = this.question?.answers.findIndex(answer => answer.id === id)
      if (index !== -1) {
         this.question?.answers.splice(index , 1)
      }else {
       console.error("Error delete from array.");
      }
    }
  }

  resetForm() : void {
    this.newAnswer = {text : '' , selectionCount : 0, questionId  : this.question?.id}
  }
}
