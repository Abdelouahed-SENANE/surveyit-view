import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Answer } from '../../../../core/models';

@Component({
  selector: 'app-statis-bar',
  imports: [],
  templateUrl: './statis-bar.component.html',
  styleUrl: './statis-bar.component.css'
})
export class StatisBarComponent implements OnChanges{
  @Input() answer : Answer | undefined

ngOnChanges(changes: SimpleChanges): void {
  if (changes['answer']) {
    console.log(changes['answer'].currentValue);

  }
  
}

  calculatePercentageOfAnswer(selectionCount: number | undefined, totalAnswers: number | undefined): number {
    if (selectionCount === undefined || totalAnswers === undefined || totalAnswers === 0) {
        return 0;
    }    
    const percentage: number = (selectionCount / totalAnswers) * 100;    
    return parseFloat(percentage.toFixed(2));
}
}
