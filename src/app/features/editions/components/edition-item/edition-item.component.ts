import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../core/services/app.service';
import { Edition, Subchater } from '../../../../core/models';
import { EditionResponse, QuestionResponse } from '../../../../commons/response/api-response.module';
import { QuestionCreateDTO } from '../../../../commons/response/api-request.module';

@Component({
  selector: 'app-edition-item',
  standalone:false,
  templateUrl: './edition-item.component.html',
  styleUrl: './edition-item.component.css'
})
export class EditionItemComponent implements OnInit {
  edition!: Edition
  currentSubchapter! : Subchater | undefined
  newQuestion : QuestionCreateDTO = {text : '' , type : 'SINGLE_CHOICE', subchapterId  : this.currentSubchapter?.id}

  constructor(private route : ActivatedRoute , private service : AppService){}

  ngOnInit(): void {
    this.loadEdition()
  }

  loadEdition() : void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id) {
        this.service.getEdition(id).subscribe({
          next : (res : EditionResponse) =>{
            this.edition= res.data.edition            
          },
          error : (err) => {
            console.error(err)
          }
        })
      }      
    })
  }

  
  
  showQuestion(id : string  ) : void{
   
    this.currentSubchapter = this.edition.chapters
    .find(ch => ch.subchapters.some(sub => sub.id === id))
    ?.subchapters.find(sub => sub.id === id);

  }

  addQuestion() : void {
    this.newQuestion.subchapterId = this.currentSubchapter?.id
    if (this.newQuestion.subchapterId) {
      this.service.addQuestion(this.newQuestion).subscribe({
        next : (res : QuestionResponse) => {
          this.newQuestion = {text : '' , type : 'SINGLE_CHOICE', subchapterId  : this.currentSubchapter?.id}
        },
        error : (err) => {
          console.log(err)
        }
      })
    }
  }

  deleteQuestion(id : string) : void {
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

  

}
