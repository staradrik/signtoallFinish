import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private curso:number = 4;

  constructor() { }

  obtenerCurso(){
      return this.curso;
  }
}
