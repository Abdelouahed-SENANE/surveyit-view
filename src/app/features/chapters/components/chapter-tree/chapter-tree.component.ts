import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chapter } from '../../../../core/models';

@Component({
  selector: 'app-chapter-tree',
  imports: [],
  templateUrl: './chapter-tree.component.html',
  styleUrl: './chapter-tree.component.css'
})
export class ChapterNodeComponent {
  @Input() chapter! : Chapter
  @Output() sendSubchapterId  = new EventEmitter<string>() // to add new Chapter 
  @Output() sendSelectedId  = new EventEmitter<string>() // to add new Chapter 
  @Output() sendSubchapter = new EventEmitter<Chapter>() // send subchapter to questions table
  @Output() sendActions = new EventEmitter<boolean>()
  @Input() selectedId : string | null = null
  
  emitSubchapterId(subchapterId : string ) : void{            
      this.sendSubchapterId.emit(subchapterId);
  }

  emitFromCheckbox(e : Event ) : void{    
    const input =  (e.target as HTMLInputElement)
    const id = input.checked ? input.value : ''
    this.selectedId = id
    this.sendSelectedId.emit(id);
}

  emitSubchapter(chapter : Chapter) : void{       
    this.sendSubchapter.emit(chapter)
  }





}
