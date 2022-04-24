import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { RutaBreadcrumService } from '../../../../services/ruta-breadcrum.service';

@Component({
  selector: 'app-rompecabezas',
  templateUrl: './rompecabezas.component.html',
  styleUrls: ['./rompecabezas.component.css']
})
export class RompecabezasComponent implements OnInit {

  constructor(private messageService: MessageService,
              private router: Router,
              private breadcrumbService: RutaBreadcrumService) { 
              }

  data = []=[
    "numeros","uno","dos","tres", "cuatro", "cinco", "seis", "siete", "ocho","nueve"  
  ]
  total: number= this.data.length
  
  imageUrl: string = `../assets/images/ActMatematicas/rompecabezas/${[Math.floor(Math.random() * this.data.length)] }.jpg`;
  imageSize: number = 500;
  gridsize: number = 2;
  boxSize: number = 100 / (this.gridsize - 1);
  index: number = 0;
  totalBoxes: number = this.gridsize * this.gridsize;
  Image: any[] = [];
  imageName: string = this.imageUrl.substr(this.imageUrl.lastIndexOf('/') + 1).split('.')[0];
  difficulty: string = '2';
  steps: number = 0;
  
  numImg: number =  Math.floor(Math.random() * this.total);
  nameImg: string = this.data[this.numImg + 1];

  gameComplete: Boolean = false;

  indexes: number[] = [];
  position: number[] = [];
  ngOnInit() {
    this.startGame();
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'Rompecabezas' }
    ]);
  }

  isSorted(indexes:any): Boolean {
    let i: number = 0;
    for (i = 0; i < indexes.length; i++) {
      if (indexes[i] !== i) {
        return false;
      }
    }
    return true;
  }

  randomize(imageParts: any[]): any[] {
    let i = 0, img: any[] = [], ran = 0;
    for (i = 0; i < imageParts.length; i++) {
      ran = Math.floor(Math.random() * imageParts.length);
      while (imageParts[ran] == null) {
        ran = Math.floor(Math.random() * imageParts.length);
      }
      img.push(imageParts[ran]);
      this.position.push(imageParts[ran].index);
      imageParts[ran] = null;
    }
    this.printIndexes(this.indexes);
    this.printIndexes(this.position);
    return img;
  }

  onDragStart(event: any): void {
    event.dataTransfer.setData('data', event.target.id);
  }
  onDrop(event: any): void {
    let origin = event.dataTransfer.getData('data');
    let dest = event.target.id;


    let originEl:any = document.getElementById(origin);
    let destEl:any = document.getElementById(dest);

    let origincss:any = originEl.style.cssText;
    let destcss = event.target.style.cssText;

    destEl.style.cssText = origincss;
    originEl.style.cssText = destcss;
    originEl.id = dest;
    destEl.id = origin;


    for (let i = 0; i < this.position.length; i++) {
      if (this.position[i].toString() === originEl.id) {
        this.position[i] = Number(destEl.id);
      } else if (this.position[i].toString() === destEl.id) {
        this.position[i] = Number(originEl.id);
      }

    }

    this.printIndexes(this.position);
    this.steps++;
    this.gameComplete = this.isSorted(this.position);
    if (this.gameComplete) {
      this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
      setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
     
    }

   
  }

  allowDrop(event:any): void {
    event.preventDefault();
    event.target.style.opacity = 1;
  }

  printIndexes(sorts: number[]): void {
    let i: number = 0, ind: string = '';
    for (i = 0; i < sorts.length; i++) {
      ind += sorts[i].toString() + ' , ';
    }
    console.log(ind);
  }

  reRandomize(): void {
    this.gameComplete = false;
    this.Image = this.randomize(this.Image);
  }
  newGame(): void {
    this.numImg = Math.floor(Math.random() * this.total);
    this.imageUrl = `../assets/images/ActMatematicas/rompecabezas/${this.numImg}.jpg`;
    this.nameImg = this.data[this.numImg + 1];
    this.steps = 0;
  }

  startGame(): void {
    this.reset();
    this.initializeGame();
    this.breakImageParts();
    this.reRandomize(); 
  }

  
  breakImageParts(): void {
    for (this.index = 0; this.index < this.totalBoxes; this.index++) {
      const x: string = (this.boxSize * (this.index % this.gridsize)) + '%';
      const y: string = (this.boxSize * Math.floor(this.index / this.gridsize)) + '%';
      let img: ImageBox = new ImageBox();
      img.x_pos = x;
      img.y_pos = y;
      img.index = this.index;
      this.indexes.push(this.index);
      this.Image.push(img);
    }
    this.boxSize = this.imageSize / this.gridsize;
  }

  initializeGame(): void {

    this.gridsize = Number(this.difficulty);  
    this.boxSize = 100 / (this.gridsize - 1);
    this.index = 0;
    this.totalBoxes = this.gridsize * this.gridsize;
  }

  reset(): void {
    this.Image = [];
    this.indexes = [];
    this.position = [];
  }

  cambio(){
    
  }
}

class ImageBox {
  x_pos: string ="";
  y_pos: string="";
  index: number=0;
}

