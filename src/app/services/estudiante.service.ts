import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private curso:number = 2;

  constructor() { }

  obtenerCurso(){
      return this.curso;
  }
}
