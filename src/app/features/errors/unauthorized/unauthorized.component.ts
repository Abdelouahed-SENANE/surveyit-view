import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  imports: [RouterModule],
  template: `
    <div class="text-rose-500 ">
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <a routerLink="/auth/login">Go to Login</a>
    </div>
  `,
})
export class UnauthorizedComponent {}
