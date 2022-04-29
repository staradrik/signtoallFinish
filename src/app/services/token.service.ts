import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: any, next: any) {
    const tokenEstudiante = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getTokenEstudiante()}`,
      },
    });

    return next.handle(tokenEstudiante);
  }
}
