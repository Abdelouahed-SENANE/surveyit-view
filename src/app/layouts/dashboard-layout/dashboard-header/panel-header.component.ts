import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'panel-header',
  imports: [],
  templateUrl: './panel-header.component.html',
})
export class PanelHeaderComponent {
  private readonly authService : AuthService = inject(AuthService)
  private readonly router : Router = inject(Router)

  logout() : void {
    this.authService.logout()
    this.router.navigate(['auth/login'])
  }
}
