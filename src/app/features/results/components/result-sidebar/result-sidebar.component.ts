import {Component, Input} from '@angular/core';
import {Edition} from '../../../../core/models';

@Component({
  selector: 'app-result-sidebar',
  imports: [],
  templateUrl: './result-sidebar.component.html',
  styleUrl: './result-sidebar.component.css'
})
export class ResultSidebarComponent {
  @Input() edition! : Edition

}
