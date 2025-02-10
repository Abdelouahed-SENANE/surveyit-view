import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastComponent } from '../../../common/components/toast/toast.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, ToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  isToast = false;
  error: { hasError: boolean; message: string } = {
    hasError: false,
    message: '',
  };
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(isAuth => {
      if (isAuth) {
        this.router.navigate(['/'])
      }
    })
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(email, password).subscribe({
        next: (res) => {
          if (res.data.roles.includes('ROLE_OWNER')) {
            this.router.navigate(['owner/surveys/all']);
          } else {
            this.router.navigate(['owner/surveys/all']);
          }
        },
        error: (err) => {
          this.error = { hasError: true, message: err.error.message };
          this.isToast = true;
          setTimeout(() => {
            this.isToast = false;
            this.error = { hasError: false, message: '' };
          }, 3000);
        },
      });
    }
  }
}
