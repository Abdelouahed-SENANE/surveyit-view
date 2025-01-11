import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Edition} from '../../../../core/models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-result-card',
  imports: [
    RouterLink
  ],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  @Input() edition! : Edition

}
