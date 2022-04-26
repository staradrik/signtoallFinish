import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { RegistroProfesor, InicioSesionProfesor, RegistroEstudiante, InicioSesionEstudiante } from "../models/auth"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private APi_URI: string = environment.API;

  constructor(private http: HttpClient) { }
  
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
  
}
