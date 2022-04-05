import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Registro, InicioSesion } from "../models/auth"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APi_URI = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  
    registro(registro: Registro): Observable<Registro>{
       return this.http.post(`${this.APi_URI}/registrar`, registro)
    }

    inicioSesion(inicioSesion: InicioSesion): Observable<InicioSesion>{
      return this.http.post(`${this.APi_URI}/iniciarSesion`, inicioSesion)
   }

   
  
}
