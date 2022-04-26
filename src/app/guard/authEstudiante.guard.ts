import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from "../services/auth.service"
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthEstudianteGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean{
    if (this.authService.loggedInEstudiante()) {
      return true;
    }

    this.router.navigate(["/login"])
    return false;
  }

  
}
  

