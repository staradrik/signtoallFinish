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
          routerLink: ['/actividades/sobreNosotros']
        },
        {
          label: 'Cerrar sesión',
          routerLink: ['/actividades/logout']
        }
      ]
    },
    {
      label: 'Actividades de español', 
      items: [
        {
          label: 'Memorama',
          routerLink: ['/actividades/Español/memoLetras']
        },
        {
          label: 'Abecedario',
          routerLink: ['/actividades/Español/abecedario']
        },
        {
          label: 'Vocabulario',
          routerLink: ['/actividades/Español/vocabulario']
        },
        {
          label: 'Rompecabezas',
          routerLink: ['/actividades/Español/rompecabezas']
        },
        {
          label: 'Ahorcado',
          routerLink: ['/actividades/Español/ahorcado']
        }
      ]
    },
    {
      label: 'Actividades de matemáticas',
      items: [
        {
          label: 'Snake',
          routerLink: ['/actividades/Matematicas/snake']
        },
        {
          label: 'Memorama',
          routerLink: ['/actividades/Matematicas/memoMate']
        },
        {
          label: 'Rompecabezas',
          routerLink: ['/actividades/Matematicas/rompeMate']
        },
        {
          label: 'Sudoku',
          routerLink: ['/actividades/Matematicas/sudoku']
        },
        {
          label: 'Rompecabezas deslizantes',
          routerLink: ['/actividades/Matematicas/slidin']
        },
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
