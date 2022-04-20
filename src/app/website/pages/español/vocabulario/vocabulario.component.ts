import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from 'src/app/services/ruta-breadcrum.service';
import { EspannolService } from '../../../../services/espannol.service';
import { ImgVocavulario } from '../../../../models/Actividades';

@Component({
  selector: 'app-vocabulario',
  templateUrl: './vocabulario.component.html',
  styleUrls: ['./vocabulario.component.scss']
})
export class VocabularioComponent implements OnInit {

  imagen: ImgVocavulario = {
    id: 0,
    name: "",
    src: "",
    select: false
  }
  n1: string = "";
  n2: string = "";
  n3: string = "";
  n4: string = "";
  option:string = "";
  imagenArray: ImgVocavulario[] = [this.imagen];

  constructor(
    public boardGame: EspannolService,
    private breadcrumbService: RutaBreadcrumService,
    private españolService: EspannolService
  ) {  }

  ngOnInit() {
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'vocabulario' }
    ]);
    this.imagenArray = this.españolService.getImageArray;
    this.generate();
  }
  
  generate(){
    let resBoton = this.randomInt(5,0);
    let res = this.randomInt(15,-1);
    this.imagen = this.imagenArray[res];
    for(let i = 0; i < 5; i++ ){
      switch(resBoton) {
        case 1:
          this.n1 = this.imagenArray[res].name;
          this.n2 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n3 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n4 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          break;
        case 2:
          this.n1 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n2 = this.imagenArray[res].name;
          this.n3 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n4 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          break;
        case 3:
          this.n1 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n2 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n3 = this.imagenArray[res].name;
          this.n4 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          break;
        case 4:
          this.n1 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n2 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n3 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
          this.n4 = this.imagenArray[res].name;
          break;
        default:
          console.log("algo salio mal :(")
      }
    }
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  difRandomInt(random:number, res:number):number{
    while( random === res ){
      random = this.randomInt(14,1);
    }
    return random;
  }
}
