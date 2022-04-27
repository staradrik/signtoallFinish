import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private cursoS: any = (localStorage.getItem("idCurso"));
  private curso: number = parseInt(this.cursoS)

  constructor() { }

  obtenerCurso(){
      return this.curso;
  }
}
