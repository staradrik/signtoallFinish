import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image, RootObject, ImgVocavulario } from '../models/Actividades';
import { DIRECTION_DOWN,DIRECTION_UP,DIRECTION_LEFT,DIRECTION_RIGHT } from '../website/pages/matematicas/sliding-puzzle/defs';
import { timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EspannolService {
  
  constructor(private http: HttpClient) {
    this.getImaMemo();
    //this.getImaVoca();
   }

  //Actividades
  //Memorama
  public _index = -1;
  public rootObject: RootObject = new RootObject();
  public _firstImages:string[] = [];
  public images:Image[] = [];

  public getImaMemo() {
    this.images = [];
      this.http.get<RootObject>('assets/images/ActEspañol/memorama/memorama.json').subscribe(res => {
        this.rootObject.data = res.data;
         for(let j = 0; j < 2; j++){
          for(let i = 0; i < res.data.length; i++){   
              let currImage:Image = {};
              this._firstImages.push(res.data[i].avatar);
              if (j < 1){
                currImage.avatar = res.data[i].avatar;
              }else{
                currImage.avatar = res.data[i].name;
              }
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

  //Actividades
  //Abecedario
  public content: any[] = [];
  private completed: any[] = [
    'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H',
    'I', 'J', 'K', null
  ] ;
  private started = false;
  private initialContent: any [] = [];
  finished = false;
  elapsedSeconds:any = null;
  private timerSrc: any = null;
  private timerSub: any = null;
  movesCount = 0;
  private movesStack: any [] = [];

  initGame() {
    this.started = false;
    this.finished = false;
    this.elapsedSeconds = null;
    this.movesCount = 0;
    this.movesStack = [];
    this.setCompleted();
  }
  startGame(initial: any[] | null = null) {
    this.started = true;
    this.finished = false;
    this.elapsedSeconds = 0;
    this.movesCount = 0;

    if (initial) {
      // we can cheat if we want
      this.content = initial.slice();
    } else {
      this.content = this.shuffle(this.completed);
    }
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }

    this.initialContent = this.content.slice();

    this.timerSrc = timer(1000, 1000);
    this.timerSub = this.timerSrc.subscribe(() => {
      this.elapsedSeconds++;
    });
  }

  setCompleted() {
    this.content = this.completed.slice();
  }

  isInProgress() {
    return this.started && !this.finished;
  }

  private shuffle(arr: number[]) {
    const result = arr.slice();
    return result.sort(() => Math.random() - 0.5);
  }

  private getNullIndex() {
    return this.content.findIndex(i => i === null);
  }

  private moveNullToIndex(sourceIndex: number, nullIndex: number) {
    const sourceValue = this.content[sourceIndex];
    this.content[sourceIndex] = null;
    this.content[nullIndex] = sourceValue;
  }

  isCompleted() {
    return JSON.stringify(this.content) === JSON.stringify(this.completed);
  }

  move(direction: string) {
    let successful: any = false;

    if (this.isInProgress()) {
      switch (direction) {
        case 'up':
          successful = this.moveUp();
          break;
        case 'down':
          successful = this.moveDown();
          break;
        case 'left':
          successful = this.moveLeft();
          break;
        case 'right':
          successful = this.moveRight();
          break;
      }
    }

    if (successful) {
      this.movesStack.push(direction);
      this.movesCount++;
      this.finished = this.isCompleted();
    }
  }

  moveUp(): boolean {
    const nullIndex = this.getNullIndex();
    if (nullIndex <= 12) {
      const sourceIndex = nullIndex + 4;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    } return false;
  }

  moveDown(): boolean {
    const nullIndex = this.getNullIndex();
    if (nullIndex >= 3) {
      const sourceIndex = nullIndex - 4;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    }return false;
  }

  moveLeft(): boolean {
    const nullIndex = this.getNullIndex();
    if (nullIndex % 4 !== 3) {
      const sourceIndex = nullIndex + 1;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    }return false;
  }

  moveRight(): boolean {
    const nullIndex = this.getNullIndex();
    if (nullIndex % 4 !== 0) {
      const sourceIndex = nullIndex - 1;
      this.moveNullToIndex(sourceIndex, nullIndex);
      return true;
    } return false;
  }

  moveTile(index: number) {
    const nullIndex = this.getNullIndex();
    switch (nullIndex) {
      case index - 4:
        this.move(DIRECTION_UP);
        break;
      case index + 4:
        this.move(DIRECTION_DOWN);
        break;
      case index - 1:
        this.move(DIRECTION_LEFT);
        break;
      case index + 1:
        this.move(DIRECTION_RIGHT);
        break;
    }
  }

  //Actividades
  //Vocavulario
  imagenes: ImgVocavulario[] = [
    {
      "id":0,
      "name": "borrador",
      "src":"/assets/images/ActEspañol/vocabulario/borrador.png",
      "select": false 
    },
    {
      "id":1,
      "name": "cinta",
      "src":"/assets/images/ActEspañol/vocabulario/cinta.jpg",
      "select": false 
    },
    {
      "id":2,
      "name": "colbon",
      "src":"/assets/images/ActEspañol/vocabulario/colbon.jpg",
      "select": false 
    },
    {
      "id":3,
      "name": "colores",
      "src":"/assets/images/ActEspañol/vocabulario/colores.jpg",
      "select": false 
    },
    {
      "id":4,
      "name": "cuaderno",
      "src":"/assets/images/ActEspañol/vocabulario/cuaderno.png",
      "select": false 
    },
    {
      "id":5,
      "name": "engrapadora",
      "src":"/assets/images/ActEspañol/vocabulario/engrapadora.png",
      "select": false 
    },
    {
      "id":6,
      "name": "escuadra",
      "src":"/assets/images/ActEspañol/vocabulario/escuadra.png",
      "select": false 
    },
    {
      "id":7,
      "name": "esfero",
      "src":"/assets/images/ActEspañol/vocabulario/esfero.jpg",
      "select": false 
    },
    {
      "id":8,
      "name": "lapiz",
      "src":"/assets/images/ActEspañol/vocabulario/lapiz.png",
      "select": false 
    },
    {
      "id":9,
      "name": "pegante",
      "src":"/assets/images/ActEspañol/vocabulario/pegante.jpg",
      "select": false 
    },
    {
      "id":10,
      "name": "plastilina",
      "src":"/assets/images/ActEspañol/vocabulario/plastilina.jpg",
      "select": false 
    },
    {
      "id":11,
      "name": "regla",
      "src":"/assets/images/ActEspañol/vocabulario/regla.png",
      "select": false 
    },
    {
      "id":12,
      "name": "tajalapiz",
      "src":"/assets/images/ActEspañol/vocabulario/tajalapiz.jpg",
      "select": false 
    },
    {
      "id":13,
      "name": "temperas",
      "src":"/assets/images/ActEspañol/vocabulario/temperas.jpg",
      "select": false 
    },
    {
      "id":14,
      "name": "tijeras",
      "src":"/assets/images/ActEspañol/vocabulario/tijeras.jpg",
      "select": false 
    },
  ];
  public get getImageArray():ImgVocavulario[]{
    return this.imagenes;
  }
}
