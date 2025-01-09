import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  imports: [HeaderComponent , RouterModule],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.css'
})
export class ContentLayoutComponent {
  navLinks = [
    {
      label : 'Home',
      path : ''
    },
    {
      label : 'Participate',
      path : 'participate'
    },
    {
      label : 'Results',
      path : 'results'
    }

  ]
}
