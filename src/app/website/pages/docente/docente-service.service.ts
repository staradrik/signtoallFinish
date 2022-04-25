import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {  RegistroEstudiante } from 'src/app/models/auth';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DocenteServiceService {
  private APi_URI: string = environment.API;

   //español
   vistaDocente: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home', 
      items: [
        {
          label: 'Sobre Nosotros',
          routerLink: ['actividades/sobreNosotros']
        },
        {
          label: 'Salir'
        }
      ]
    },
    {
      label: 'Estudiantes', 
      icon: 'pi pi-search',
      items: [
        {
          label: 'Memorama',
          routerLink: ['actividades/memoLetras']
        }      
      ]
    }
  ];
  

  constructor(private http: HttpClient) { }

  getListStudents(): Observable<RegistroEstudiante[]>{
    return this.http.get<RegistroEstudiante[]>(`${this.APi_URI}/lista`)
  }

  deleteStudent(id:number){
    return this.http.delete(`${this.APi_URI}/eliminar/${id}`)
  }

  editStudent(id:string, nino:RegistroEstudiante){
      return this.http.put(`${this.APi_URI}/actualizar/${id}`, nino) 
  }

  getPanelMenu():any{
    return this.vistaDocente
  }
 

}
