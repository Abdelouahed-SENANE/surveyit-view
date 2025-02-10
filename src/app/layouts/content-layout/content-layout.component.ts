import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../common/components/header/header.component';
import { RouterModule } from '@angular/router';
import { StorageService } from '../../core/services/auth/storage.service';

@Component({
  selector: 'app-content-layout',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.css',
})
export class ContentLayoutComponent implements OnInit {
  private readonly storage: StorageService = inject(StorageService);
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
  ];

  ngOnInit(): void {
    if (this.storage.getToken()) {
      this.navLinks;
    } else {
      this.navLinks.push(
        {
          label: 'Login',
          path: '/auth/login',
        },
        {
          label: 'Register',
          path: '/auth/register',
        }
      );
    }
  }
}
