import { Component, Input } from '@angular/core';
import { Question } from '../../../../core/models';
import { StatisBarComponent } from "../statis-bar/statis-bar.component";

@Component({
  selector: 'app-statis-card',
  imports: [StatisBarComponent],
  templateUrl: './statis-card.component.html',
  styleUrl: './statis-card.component.css'
})
export class StatisCardComponent {
  @Input() question! : Question

}
