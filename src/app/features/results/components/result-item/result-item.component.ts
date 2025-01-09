import { Component } from '@angular/core';
import {HeaderComponent} from '../../../../common/components/header/header.component';
import {ResultSidebarComponent} from '../result-sidebar/result-sidebar.component';

@Component({
  selector: 'app-result-item',
  imports: [
    ResultSidebarComponent
  ],
  templateUrl: './result-item.component.html',
  styleUrl: './result-item.component.css'
})
export class ResultItemComponent {

}
