import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from '../../../../services/ruta-breadcrum.service';
import { EspannolService } from '../../../../services/espannol.service';
import { actividadEstudiante, ImgVocavulario } from 'src/app/models/Actividades';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ActividadPutService } from 'src/app/services/actividad-put.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  video: string = "https://www.youtube.com/embed/x_mDIDo0CV0";
  indicaciones: string[]= ["Ver el vídeo tutorial", "Poner atención","Intenta adivinar la palabra"];
  constructor(
    private messageService: MessageService,
    private router: Router,private actividadPut: ActividadPutService,
    private breadcrumbService: RutaBreadcrumService,
    private frutaService: EspannolService
    ) {
   }
  res: number = 0;
  palabra:string = '';
  palabraOculta:string = '';
  intentos:number = 0;
  gano:boolean = false;
  perdio:boolean = false;
  letra:string = "";
  frutaSrc:string = "";
  frutaArray: ImgVocavulario[] = [];

  letras: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
           'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
           'V', 'W', 'X', 'Y', 'Z'];

  ngOnInit(): void {
    this.frutaArray = this.frutaService.getFrutas;
    this.generarFruta();
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'ahorcado' }
    ]);
  }

  generarFruta(){
    let tempRes = this.randomInt(6,-1);
    while (tempRes === this.res){
      tempRes = this.randomInt(6,-1);
    }
    this.perdio = false;
    this.gano = false;
    this.intentos = 0;
    this.res = tempRes;
    this.frutaSrc = this.frutaArray[this.res].src;
    this.palabra = this.frutaArray[this.res].name;
    this.palabraOculta = '___ '.repeat(this.palabra.length);
  }

  existeLetra( letra:string ) {
    if ((!(this.palabra.indexOf( letra ) >= 0))) {
      this.intentos++;
    }
  }

  verificaGanar() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if ( palabraEvaluar === this.palabra ) {
      this.gano = true;
      this.messageService.clear();
      let existeCurso: any = localStorage.getItem("idCurso");
      if(existeCurso != null || undefined){
        let idE: any = localStorage.getItem("idEst");
        let idA : string ="3";
        let actividadHecha: actividadEstudiante = {
          actividad_realizada:1,
          nota:5
        }
        this.actividadPut.editActivity(idE, idA ,actividadHecha ).subscribe(edit =>{
          actividadHecha = edit
          this.actividadPut.actRealizada = true;
          this.actividadPut.actNota = 5;
          this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
          setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
        });
      }else if (existeCurso == null || undefined){
        this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
      }
    }
    if ( this.intentos >= 9 ){
      this.perdio = true;
      this.messageService.clear();
      this.messageService.add({severity:'error', summary:'0 Intentos :(', detail:`Intentalo de nuevo :)`});
      setTimeout( ()=> { this.generarFruta(); }, 2100);
    }
  }

  comprobar( letra:string ) {
    if (!this.gano && !this.perdio){
      this.existeLetra(letra);
      const palabraOcultaArr = this.palabraOculta.split(' ');
      for (let i = 0; i < this.palabra.length; i++) {
        if ( this.palabra[i] === letra ) {
          palabraOcultaArr[i] = letra;
        }
        this.palabraOculta = palabraOcultaArr.join(' ');
        this.verificaGanar();
      }
    }
  }

  randomInt(min: number, max: number) { // seleccionar un numero aleatorio
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
