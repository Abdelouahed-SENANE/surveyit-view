import { inject, Injectable } from '@angular/core';
import { env } from '../../../../env/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  BehaviorSubject, Observable, take, tap } from 'rxjs';
import { StorageService } from './storage.service';
import { LoginResponseDTO, UserResponseDTO } from '../../../common/response/api-response.module';

const AUTH_API = env.API_URL + '/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly storage: StorageService = inject(StorageService);
  private isAuthenticationSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    if (this.storage.hasCredentiels()) {
      this.isAuthenticationSubject.next(true)
    }
  }
  login(email: string, password: string): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(AUTH_API + 'login', { email, password }, httpOptions).pipe(
      tap((res) => {
        this.storage.setToken(res.data.token)
        this.storage.setRoles(res.data.roles)
        this.isAuthenticationSubject.next(true)
      })
    )
  }
  loadUser() : Observable<UserResponseDTO> {
    return this.http.get<UserResponseDTO>(env.API_URL+"/user/me")
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      { name, email, password },
      httpOptions
    );
  }

  hasRole(role: string): boolean {
    return this.storage.getRoles().includes(role);
  }

  isAuthenticated() : Observable<boolean> {
    return this.isAuthenticationSubject.asObservable()
  }

  logout(): void {
    this.storage.clear()
    this.isAuthenticationSubject.next(false)
  }
}
