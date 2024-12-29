import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../core/services/app.service';
import { Edition, Subchater } from '../../../../core/models';
import { EditionResponse } from '../../../../commons/response/api-response.module';

@Component({
  selector: 'app-edition-item',
  standalone:false,
  templateUrl: './edition-item.component.html',
  styleUrl: './edition-item.component.css'
})
export class EditionItemComponent implements OnInit {
  edition!: Edition
  currentSubchapter! : Subchater | undefined
  columns : string[] = [
    "id",
    "text",
    "type",
    "answerCount"
  ]
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
            console.log(this.edition);
            
          },
          error : (err) => {
            console.error(err)
          }
        })
      }      
    })
  }

  
  
  toggle(id : string) : void{
   
    this.currentSubchapter = this.edition.chapters
    .find(ch => ch.subchapters.some(sub => sub.id === id))
    ?.subchapters.find(sub => sub.id === id);

    console.log(this.currentSubchapter);
    
    
  
  }

  

}
