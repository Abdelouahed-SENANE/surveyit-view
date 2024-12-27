import { Component, Input } from '@angular/core';
import { Survey } from '../../../../core/models';

@Component({
  selector: 'app-survey-item',
  imports: [],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey!: Survey
  
}
