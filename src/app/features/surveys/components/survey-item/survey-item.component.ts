import { Component, Input } from '@angular/core';
import { Survey } from '../../../../core/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-survey-item',
  imports: [RouterModule],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey
  
}
