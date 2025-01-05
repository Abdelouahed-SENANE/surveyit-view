import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chapter, Edition } from '../../../../core/models';
import { ChapterNodeComponent } from '../chapter-tree/chapter-tree.component';
import { FormsModule } from '@angular/forms';
import { ChapterRequestDTO } from '../../../../common/response/api-request.module';
import { ToastComponent } from "../../../../common/components/toast/toast.component";
import { ChapterService } from '../../services/chapters.service';

@Component({
  selector: 'app-chapter-item',
  imports: [ChapterNodeComponent, FormsModule, ToastComponent],
  templateUrl: './chapter-item.component.html',
  styleUrl: './chapter-item.component.css'
})
export class ChapterItemComponent {
  @Input() edition! : Edition
  subchapterId : string | undefined
  @Output() sendCurrentChapter : EventEmitter<Chapter> = new EventEmitter<Chapter>()
  @Output() sendSuchapter : EventEmitter<Chapter> = new EventEmitter<Chapter>()
  hasError : boolean = false
  errorMessage : string = ''
  newChapter : ChapterRequestDTO = {title : ''} 
  isAdd : boolean = false
  canAddQuestions! : boolean
  isActions : boolean = false
  constructor(private service : ChapterService ){}

  recieveSubchapterId(subId : string) {  
    this.subchapterId = subId
  } 
  setIsAdd() {
    this.isAdd = true
  }
  recieveSubchapterIdFromCheckbox(subId : string) {  

    if (subId) {
      this.isActions = true
      this.subchapterId = subId 
    }else {
      this.isActions = false
      this.subchapterId = ''
      this.isAdd = false
    }

  } 


  recieveAndResendSubchapter(chapter : Chapter){
    this.sendSuchapter.emit(chapter)
  } 

  addChapter() : void {
    
    if (this.subchapterId) {
      this.service.addSubchapter(this.newChapter , this.subchapterId).subscribe({
        next : (res) => {
          const id = this.subchapterId ? this.subchapterId  : ''
          const chapter = this.findSubchapter(id) 
          chapter?.subchapters.push(res.data.subchapter)          
        },
        error : (err : any) => {

          if (err) {
            this.hasError = true
            this.errorMessage = err.error.message
            setTimeout(() => {
              this.hasError = false
            },5000)
          }

        }
      })
    }else{
      this.service.addChapter(this.newChapter , this.edition.id).subscribe({
        next : (res) => {
          this.edition.chapters.push(res.data.chapter)
          console.log("chapter ==> " + res.data.chapter);
        },
        error : (err : any) => {

          if (err) {
            this.hasError = true
            this.errorMessage = err.error.message
            setTimeout(() => {
              this.hasError = false
            },5000)
          }

        }
      })


    }
    this.isAdd = false
    this.errorMessage = ''
    this.resetForm()
    
  }

  deleteChapter() : void {
    const confirm = window.confirm("Are you sure to delete this chapter");
    if (confirm) {
      if (this.subchapterId) {
        this.service.deleteChapter(this.subchapterId).subscribe({
          next : (res : any) => {
            console.log(res.data);
            this.deleteChapterList(this.edition.chapters , res.data.chapterId)
            this.subchapterId = ''
          },
          error : (err : any) => {
            if (err) {
              this.hasError = true
              this.errorMessage = err.error.message
              setTimeout(() => {
                this.hasError = false
              },5000)
            }
  
          }
        })
      }
    }
    
  }
  resetForm() : void {
      this.newChapter = {title : ''}
  }

  private findSubchapter(id: string): Chapter | undefined {
    return this.pluckChapter(id, this.edition.chapters);
  }

  deleteChapterList(chapters : Chapter[] , id : string) : void {
    for(let i = 0 ; i < chapters.length ; i++ ) {

      if (chapters[i].id == id) {
        chapters.splice(i , 1)
        console.log("Deleted")
        return
      }

      if (chapters[i].subchapters && chapters[i].subchapters.length > 0) {
         this.deleteChapterList(chapters[i].subchapters , id)
      }

    }
    console.log("No Deleted")

  }

  private pluckChapter(id: string, chapters: Chapter[]): Chapter | undefined {
  
    for (const chapter of chapters) {
  
      if (chapter.id == id) {
        return chapter;
      }
  
      if (chapter.subchapters && chapter.subchapters.length > 0) {
        const found = this.pluckChapter(id, chapter.subchapters);
        if (found) {
          return found; 
        }
      }
    }
    return undefined;
  }

}
