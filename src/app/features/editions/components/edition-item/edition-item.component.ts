import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../core/services/app.service';
import { Edition, Question, Subchater } from '../../../../core/models';
import { EditionResponse, QuestionResponse } from '../../../../shared/response/api-response.module';

@Component({
  selector: 'app-edition-item',
  standalone:false,
  templateUrl: './edition-item.component.html',
  styleUrl: './edition-item.component.css'
})
export class EditionItemComponent implements OnInit {
  edition!: Edition
  isActive : boolean = false
  currentSubchapter! : Subchater | undefined
  currentQuestion! : Question | undefined 
  isQuestions : boolean = true

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

  toggleIsQuestions() : void {    
    this.isQuestions = !this.isQuestions
  }

  findAllQuestions(id : string  ) : void{
    this.currentSubchapter = this.edition.chapters
    .find(ch => ch.subchapters.some(sub => sub.id === id))
    ?.subchapters.find(sub => sub.id === id);
  }
  updateQuestion(update : Question) : void {
    console.log(update);
  
    this.currentQuestion = update
  }

  onChangeIsActive(newState : boolean) : void {
      this.isActive = newState
  }
  

}
