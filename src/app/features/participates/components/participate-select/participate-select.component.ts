import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { SelectComponent } from '../../../../common/components/select/select.component';
import { Edition } from '../../../../core/models';
import { RouterModule } from '@angular/router';
import { ParticipateService } from '../../services/participates.service';

@Component({
  selector: 'app-participate-select',
  imports: [SelectComponent , RouterModule],
  templateUrl: './participate-select.component.html',
  styleUrl: './participate-select.component.css'
})
export class ParticipateSelectComponent implements OnInit {
  private readonly service : ParticipateService = inject(ParticipateService)
  editions! : Edition[] 
  selectId! : string 
  ngOnInit(): void {
    this.loadEditions()
  }

  recieveEditionId(newId : string) : void{
    this.selectId = newId;
  } 

  loadEditions() {
    this.service.readAllEditions().subscribe({
      next : (res) => {
        this.editions = this.findValidEditions(res.data.editions)
        console.log(res.data.editions[0].year);
        
      },
      error : (err) => {
        console.error(err)
      }
    })
  }

  private findValidEditions (editions : Edition[]) : Edition[]  {
    const currentYear = new Date().getFullYear()    
    const  validEditions = editions.filter(edition => {
      return edition.year >= currentYear && new Date(edition.startDate).getTime() <= Date.now() 

    })
    return validEditions.length > 0 ? validEditions : []
  }



  // private findSelectedEdition(id : string ) : Edition | undefined{
  //   return this.editions.find(edition => edition.id = id)
  // }

}
