import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chapter } from '../../../../core/models';
import { StatisBarComponent } from "../statis-bar/statis-bar.component";

@Component({
  selector: 'app-statis-card',
  imports: [StatisBarComponent],
  templateUrl: './statis-card.component.html',
  styleUrl: './statis-card.component.css'
})
export class StatisCardComponent  {
  @Input() chapter! : Chapter

}
