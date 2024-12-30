import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../../../core/models';
import { AnswerRequestDTO } from '../../../../shared/response/api-request.module';
import { AppService } from '../../../../core/services/app.service';
import { AnswerResponse } from '../../../../shared/response/api-response.module';

@Component({
  selector: 'app-answer-table',
  imports: [FormsModule],
  templateUrl: './answer-table.component.html',
  styleUrl: './answer-table.component.css'
})
export class AnswerTableComponent implements OnInit{
  @Input() question! : Question | undefined
  @Output() onChangeIsQuestion = new EventEmitter<void>();
  
  newAnswer : AnswerRequestDTO = {id : '' , text : '' , selectionCount : 0, questionId  : this.question?.id}

  constructor( private service : AppService){
    
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
