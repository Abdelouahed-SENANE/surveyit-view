import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service'; 
@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {
  private storage: StorageService = inject(StorageService);

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storage.getToken();

    if (token) {
       req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials : true
      });
      return next.handle(req);
    } 
    return next.handle(req);
  }
}
