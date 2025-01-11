import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Chapter, Edition} from '../../../../core/models';
import { SidebarLinkComponent } from "../sidebar-link/sidebar-link.component";

@Component({
  selector: 'app-result-sidebar',
  imports: [SidebarLinkComponent],
  templateUrl: './result-sidebar.component.html',
  styleUrl: './result-sidebar.component.css'
})
export class ResultSidebarComponent {
  @Input() chapters! : Chapter[]



}
