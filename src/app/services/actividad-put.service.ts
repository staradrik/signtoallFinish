import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { actividadEstudiante } from '../models/Actividades';

@Injectable({
  providedIn: 'root'
})
export class ActividadPutService {

  private APi_URI: string = environment.API;

  actRealizada :boolean = false;
  actNota :number=0;

  constructor(private http: HttpClient, private router: Router) { }

  editActivity(idEs:string, idA:string, actividad:actividadEstudiante){
    return this.http.put(`${this.APi_URI}/actualizarActividad/${idEs}/${idA}`, actividad) 
}

}
