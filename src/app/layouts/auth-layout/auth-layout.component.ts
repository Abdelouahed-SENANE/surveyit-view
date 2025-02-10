import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  navLinks = [
    {
      label: 'Home',
      path: '',
    },
    {
      label: 'Participate',
      path: '/participate',
    },
    {
      label: 'Results',
      path: '/results',
    },
    {
      label: 'Login',
      path: '/auth/login',
    },
    {
      label: 'Register',
      path: '/auth/register',
    },
  ];
}
