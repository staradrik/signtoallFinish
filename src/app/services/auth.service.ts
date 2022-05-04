import { Injectable } from '@angular/core';
import { RegistroProfesor, InicioSesionProfesor, RegistroEstudiante, InicioSesionEstudiante } from "../models/auth"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APi_URI: string = environment.API;

  private _usuario!: RegistroEstudiante;

  constructor(private http: HttpClient, private router: Router) { }

  get usuario() {
    return { ...this._usuario };
  }
  
    registroProfesor(registroProfesor: RegistroProfesor): Observable<RegistroProfesor>{
       return this.http.post(`${this.APi_URI}/registrarP`, registroProfesor)
    }

    inicioSesionProfesor(inicioSesionProfesor: InicioSesionProfesor): Observable<InicioSesionProfesor>{
      return this.http.post(`${this.APi_URI}/iniciarSesionP`, inicioSesionProfesor)
   }

   registroEstudiante(registroEstudiante: RegistroEstudiante): Observable<RegistroEstudiante>{
    return this.http.post(`${this.APi_URI}/registrarE`, registroEstudiante)
   }

   inicioSesionEstudiante(inicioSesionEstudiante: InicioSesionEstudiante): Observable<InicioSesionEstudiante>{
    return this.http.post(`${this.APi_URI}/iniciarSesionE`, inicioSesionEstudiante)
   } 

   loggedInProfesor(){
     return !!localStorage.getItem("token_profesor")
   }

   loggedInEstudiante(){
    return !!localStorage.getItem("token_estudiante")
  }

  getTokenProfesor(){
    return localStorage.getItem("token_profesor")
  }

  getTokenEstudiante(){
    return localStorage.getItem("token_estudiante")
  }

 
  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  
}
