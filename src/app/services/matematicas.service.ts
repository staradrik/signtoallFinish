import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image, RootObject } from '../models/Actividades';

@Injectable({
  providedIn: 'root'
})
export class MatematicasService {

  
  constructor(private http: HttpClient) { 
    this.getImaMemo();
  }

  //ACTIVIDAD MEMORAMA MATEMATICAS
  public _index = -1;
  public rootObject: RootObject = new RootObject();
  public _firstImages:string[] = [];
  public images:Image[] = [];

  public getImaMemo() {
    this.images = [];
      this.http.get<RootObject>('assets/memoMate.json').subscribe(res => {
        this.rootObject.data = res.data;
        for(let j = 0; j < 2; j++){
          for(let i = 0; i < res.data.length; i++){   
              let currImage:Image = {};
              this._firstImages.push(res.data[i].avatar);
              currImage.avatar = res.data[i].avatar;
              currImage.id = res.data[i].id;
              currImage.clicked = false;
              currImage.paired = false;
              currImage.serialNumber = (j+1) * (i+1);
              this.images.push(currImage);
          }
        }
      },err=>{console.log(err)})                      
  }

  public get firstImages():Image[]{
    return this.images;
  }

  //ACTIVIDAD SUDOKU MATEMATICAS
  getSudoku(): Observable<any> {
    this.generateSudoku()
    return of(this.data);
  }

  generateSudoku(){ 
    var data = [1,2,3,4,5,6,7,8,9];  
    var r1,r2,temp ; 
    for(var i = 0; i < 6; i++) {
      r1 = this.getRandomInt(9); 
      r2 = this.getRandomInt(9)
      temp = data[r1]; 
      data[r1] = data[r2]; 
      data[r2] = temp;
    }

    this.fillRow(data, 0)    
    this.fillRow(this.shiftArrayByPlaces(data, 3), 1)
    this.fillRow(this.shiftArrayByPlaces(data, 3), 2)    
    this.fillRow(this.shiftArrayByPlaces(data, 1), 3)    
    this.fillRow(this.shiftArrayByPlaces(data, 3), 4)    
    this.fillRow(this.shiftArrayByPlaces(data, 3), 5)    
    this.fillRow(this.shiftArrayByPlaces(data, 1), 6)
    this.fillRow(this.shiftArrayByPlaces(data, 3), 7)
    this.fillRow(this.shiftArrayByPlaces(data, 3), 8)    
  }

  //esto completa los datos en la fila N con los datos pasados
  fillRow(rowData: number[], rowNum: number){
    for(var j = 0; j < 9; j++)
      this.data[rowNum][j].v = rowData[j]
  }

  //obtener un número aleatorio entre 0 y 'max'
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //Desplazar matriz a la izquierda por Nth lugares
  shiftArrayByPlaces(data: number[],numOfPlaces: number){
    for(let i=0; i<numOfPlaces; i++)
      data = this.shiftArray(data);
    return data;     // alert(JSON.stringify(data));
  }

  //Shift Array por un lugar a la izquierda
  shiftArray(data:any){
    let temp = data[0];
    for(var i = 0; i < data.length-1; i++) 
      data[i] = data[i+1]  
    data[data.length-1] = temp 
    return data
  }

  data = [
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ],
    [
      { v: 1, s: true },{ v: 2, s: true },{ v: 3, s: true },
      { v: 4, s: true },{ v: 5, s: true },{ v: 6, s: true },
      { v: 7, s: true },{ v: 8, s: true },{ v: 9, s: true }
    ]
  ];
}
