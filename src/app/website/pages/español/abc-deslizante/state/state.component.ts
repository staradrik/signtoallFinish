import { Component } from '@angular/core';
import { EspannolService } from '../../../../../services/espannol.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ActividadPutService } from 'src/app/services/actividad-put.service';
import { actividadEstudiante } from 'src/app/models/Actividades';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent{

  constructor(
    public boardGame: EspannolService,
    private messageService: MessageService,private actividadPut: ActividadPutService,
    private router: Router
  ) { }

  ganar(){
    let existeCurso: any = localStorage.getItem("idCurso");
      if(existeCurso != null || undefined){
        let idE: any = localStorage.getItem("idEst");
        let idA : string ="5";
        let actividadHecha: actividadEstudiante = {
          actividad_realizada:1,
          nota:5
        }
        this.actividadPut.editActivity(idE, idA ,actividadHecha ).subscribe(edit =>{
          actividadHecha = edit
          this.actividadPut.actRealizada = true;
          this.actividadPut.actNota = 5;
          this.messageService.add({severity:'success', summary:'Felicitaciones!', detail:`Felicitaciones! Lo lograste en ${this.boardGame.movesCount} movimientos y ${this.boardGame.elapsedSeconds}  segundos!`});
          setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
        });
      }else if (existeCurso == null || undefined){
        this.messageService.add({severity:'success', summary:'Felicitaciones!', detail:`Felicitaciones! Lo lograste en ${this.boardGame.movesCount} movimientos y ${this.boardGame.elapsedSeconds}  segundos!`});
      }
      this.clear();
  }

  clear() {
    this.messageService.clear();
}
}
