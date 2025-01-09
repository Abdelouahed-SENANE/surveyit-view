import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="flex justify-center items-center">
      <h4 class="mx-2 cursor-pointer" routerLink="/"> < SurveyIT /></h4>
    </div>
  `,
  styles: []
})
export class LogoComponent {
}
