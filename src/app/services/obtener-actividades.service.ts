import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Actividades } from '../models/Actividades';
import { EstudianteService } from './estudiante.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerActividadesService {

  //español
  actEspannol: MenuItem[] = [
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
      label: 'Actividades', 
      icon: 'pi pi-search',
      items: [
        {
          label: 'Memorama',
          routerLink: ['actividades/memoLetras']
        },
        {
          label: 'Sopa de letras'
        },
        {
          label: 'Vocabulario'
        },
        {
          label: 'Rompecabezas'
        },
        {
          label: 'Ahorcado',
          routerLink: ['actividades/ahorcado']
        }
      ]
    }
  ];
  //matematicas
  actMatematicas: MenuItem[] = [
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
      label: 'Actividades', 
      icon: 'pi pi-search',
      items: [
        {
          label: 'Snake',
          routerLink: ['Matematicas/snake']
        },
        {
          label: 'Memorama',
          routerLink: ['Matematicas/memoMate']
        },
        {
          label: 'Rompecabezas',
          routerLink: ['Matematicas/rompeMate']
        },
        {
          label: 'Sudoku',
          routerLink: ['Matematicas/sudoku']
        },
        {
          label: 'Rompecabezas deslizantes',
          routerLink: ['Matematicas/slidin']
        },
      ]
    }
  ];
  curso = 0;
  cursoList: 'ActEspannol' | 'ActMatematicas' = 'ActEspannol';

  constructor(private http: HttpClient,
    private Estudiante:EstudianteService) {
    this.curso = this.Estudiante.obtenerCurso();
   }

  getActivity(){
    if (this.curso > 3){
      this.cursoList = 'ActMatematicas';
    }else{
      this.cursoList = 'ActEspannol';
    }
    return this.http.get<any>(`assets/${this.cursoList}.json`)
    .toPromise().then(res => <Actividades[]>res.data)
    .then(data => {return data;});
  }

  

  getPanelMenu():any{
    if (this.curso < 3){
      return this.actEspannol
    }else{
      return this.actMatematicas
    }
  }
}
