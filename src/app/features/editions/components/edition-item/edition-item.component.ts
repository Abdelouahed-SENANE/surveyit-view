import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../core/services/app.service';
import { Chapter, Edition, Question } from '../../../../core/models';
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
  currentChapter! : Chapter | undefined
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
            
          const firstChapter = this.edition.chapters[0];
          if (firstChapter && firstChapter.subchapters.length > 0) {
            this.currentChapter = firstChapter.subchapters[0];
            this.handleFindQuestions(this.currentChapter.id); 
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

  handleFindQuestions(subId : string) {   
    this.currentChapter = this.pluckChapter(subId , this.edition.chapters)
  } 

  private pluckChapter(id: string , chapters : Chapter[]): Chapter | undefined {
    for (const chapter of chapters) {
      if (chapter.id === id) {
          return chapter;
      }
      
      if (chapter.subchapters && chapter.subchapters.length > 0) {
          const foundSubchapter = this.pluckChapter(id, chapter.subchapters);
          if (foundSubchapter) {
              return foundSubchapter;
          }
      }
  }

  // Return undefined if no chapter is found
  return undefined;
}



  updateQuestion(update : Question) : void {  
    this.currentQuestion = update
  }

  onChangeIsActive(newState : boolean) : void {
      this.isActive = newState
  }
  

}
