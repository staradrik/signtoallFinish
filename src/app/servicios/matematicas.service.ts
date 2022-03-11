import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actividades } from '../interfaces/Actividades';

@Injectable({
  providedIn: 'root'
})
export class MatematicasService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  ActNames: string[] = [
    "Bamboo Watch", 
    "Black Watch", 
    "Blue Band", 
    "Blue T-Shirt", 
    "Bracelet", 
    "Brown Purse"
  ];
  constructor(private http: HttpClient) { }
  getActivity(){
    return this.http.get<any>('assets/ActMatematicas.json')
    .toPromise().then(res => <Actividades[]>res.data)
    .then(data => {return data;});
  }
}
