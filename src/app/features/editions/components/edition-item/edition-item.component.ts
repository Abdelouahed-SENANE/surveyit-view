import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter, Edition, Question } from '../../../../core/models';
import { EditionResponse, QuestionResponse } from '../../../../common/response/api-response.module';
import { EditionService } from '../../services/editions.service';

@Component({
  selector: 'app-edition-item',
  standalone:false,
  templateUrl: './edition-item.component.html',
  styleUrl: './edition-item.component.css'
})
export class EditionItemComponent implements OnInit {
  edition!: Edition
  isActive : boolean = false
  subchapter! : Chapter | undefined
  currentQuestion! : Question | undefined 
  isQuestions : boolean = true
  questions : Question[] | undefined
  constructor(private route : ActivatedRoute , private service : EditionService){}

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
          const firstChapter = this.edition.chapters[0];
          if (firstChapter && firstChapter.subchapters.length > 0) {
            this.subchapter = firstChapter.subchapters[0];
          }        
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

  updateSubchapter(suchapter : Chapter) : void {
    this.subchapter = suchapter
  }


  updateQuestion(update : Question) : void {  
    this.currentQuestion = update
  }

  onChangeIsActive(newState : boolean) : void {
      this.isActive = newState
  }
  

}
