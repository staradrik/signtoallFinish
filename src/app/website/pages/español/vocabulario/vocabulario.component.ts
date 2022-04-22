import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from 'src/app/services/ruta-breadcrum.service';
import { EspannolService } from '../../../../services/espannol.service';
import { ImgVocavulario } from '../../../../models/Actividades';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulario',
  templateUrl: './vocabulario.component.html',
  styleUrls: ['./vocabulario.component.scss']
})
export class VocabularioComponent implements OnInit {
  imagen: ImgVocavulario = {
    id: 0,
    name: "",
    src: ""
  }
  ImagenesVistas: number[] = [];
  n1: string = "";
  n2: string = "";
  n3: string = "";
  n4: string = "";
  option:string = "";
  imagenArray: ImgVocavulario[] = [this.imagen];
  intento: number = 0;
  puntaje: number = 0;

  constructor(
    private messageService: MessageService,
    private router: Router,
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
    let res = this.randomInt(15,-1);
    if (this.ImagenesVistas.length > 0){ // Verificar que la imagen no se repita
      for (let i = 0; i < this.ImagenesVistas.length; i++){
        if (res === this.ImagenesVistas[i]){
          while(res === this.ImagenesVistas[i]){
            res = this.randomInt(15,-1);
          }
        }
      }
    }
    this.imagen = this.imagenArray[res];
    this.ImagenesVistas.push(res); //agregar a lista de imagenes vistas
    this.selectBotones(res); // Crear varios botones con diferentes opciones (exceptuando respuesta)
    let resBoton = this.randomInt(5,0); //seleccionar donde estara la respuesta
    switch(resBoton) {
      case 1:
        this.n1 = this.imagenArray[res].name;
        break;
      case 2:
        this.n2 = this.imagenArray[res].name;
        break;
      case 3:
        this.n3 = this.imagenArray[res].name;
        break;
      case 4:
        this.n4 = this.imagenArray[res].name;
        break;
      default:
        console.log("algo salio mal :(")
    }
  }

  selectBotones(res: number){ //Crear varios botones con diferentes opciones (exceptuando respuesta)
    let i : number = 0;
    while(
      this.n1 === this.n2 ||
      this.n1 === this.n3 ||
      this.n1 === this.n4 ||
      this.n2 === this.n3 ||
      this.n2 === this.n4 ||
      this.n3 === this.n4 ||
      i === 0)
      {
      this.n1 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
      this.n2 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
      this.n3 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
      this.n4 = this.imagenArray[this.difRandomInt(this.randomInt(15,-1),res)].name;
      i++;
      //console.log("loop:", i);
    }
  }
  randomInt(min: number, max: number) { // seleccionar un numero aleatorio
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  difRandomInt(random:number, res:number):number{ //seleccionar numero aleatorio evitando la respuesta
    while( random === res ){
      random = this.randomInt(14,1);
    }
    return random;
  }

  seleccion(){ // Comprobar respuestas y ganar
    if (this.intento < 4){ //mientras no haya finalizado
      if (this.option === this.imagen.name){ //respuesta correcta
        this.puntaje += 1
        this.messageService.add({severity:'success', summary:'Respuesta correcta :)', detail:`Puntaje: ${this.puntaje}`});
        console.log("puntaje: ", this.puntaje);
        this.generate();
      }else{
        this.messageService.add({severity:'error', summary:'Respuesta incorrecta :(', detail:`Puntaje: ${this.puntaje}`});
        this.generate();
      }
      this.intento += 1;
    }else{ //en caso de ganar
      this.intento += 1;
      this.messageService.add({severity:'success', summary:'Terminaste :)', detail:`Puntaje final: ${this.puntaje}`});
      setTimeout( ()=> { this.router.navigate(['/actividades'])}, 2100);
    }
    this.option = "";
  }
}
