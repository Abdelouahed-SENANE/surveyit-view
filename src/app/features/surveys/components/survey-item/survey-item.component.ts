import { Component, Input } from '@angular/core';
import { Survey } from '../../../../core/models';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../../core/services/app.service';

@Component({
  selector: 'app-survey-item',
  imports: [RouterModule],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey 
  isActive! : boolean 
  constructor(private service : AppService){}
  
  deleteSurvey(id : string) {
    const confirm = window.confirm("Are you sure to delete this survey.")
    if(confirm){
      this.service.deleteSurvey(id).subscribe({
        next : (res) => {
          
          window.location.href = "/admin/surveys/all"
        },
        error : (err) => {
          console.error(err)
        }
      })
    }
  }
}
