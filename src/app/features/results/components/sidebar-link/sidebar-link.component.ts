import { Component, Input } from '@angular/core';
import { Chapter } from '../../../../core/models';

@Component({
  selector: 'app-sidebar-link',
  imports: [],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css'
})
export class SidebarLinkComponent {
  @Input() chapter!: Chapter
}
