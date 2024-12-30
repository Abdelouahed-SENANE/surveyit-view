import { Component, Input, OnInit } from '@angular/core';
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
  newAnswer : AnswerRequestDTO = {id : '' , text : '' , selectionCount : 0, questionId  : this.question?.id}

  constructor( private service : AppService){
    
  }
  ngOnInit(): void {
    console.log(this.question);
  }

  deleteAnswer(id : string) : void {
    const confirm = window.confirm("Are you sure to delete this question?");
    if (confirm) {
      this.service.deleteQuestion(id).subscribe({
        next: (res ) => {
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
    console.log("before insert.." + this.newAnswer.text);
    
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

  resetForm() : void {
    this.newAnswer = {text : '' , selectionCount : 0, questionId  : this.question?.id}
  }
}
