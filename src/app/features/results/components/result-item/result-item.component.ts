import { Component , Input } from '@angular/core';
import {ResultSidebarComponent} from '../result-sidebar/result-sidebar.component';
import { Edition } from '../../../../core/models';
import { StatisCardComponent } from "../statis-card/statis-card.component";

@Component({
  selector: 'app-result-item',
  imports: [
    ResultSidebarComponent,
    StatisCardComponent
],
  templateUrl: './result-item.component.html',
  styleUrl: './result-item.component.css'
})
export class ResultItemComponent {
  @Input() edition! : Edition
  
}
