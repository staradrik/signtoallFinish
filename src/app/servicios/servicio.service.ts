<<<<<<< HEAD
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
=======
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
>>>>>>> a0dbfb2ae0aada0ba69e54a4874e632ce24381ba
