import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { actividadEstudiante } from 'src/app/models/Actividades';
import { ActividadPutService } from 'src/app/services/actividad-put.service';
import { BoardServiceService } from 'src/app/services/board.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent  {

  constructor(
    public boardServiceService: BoardServiceService,private actividadPut: ActividadPutService,
    private messageService: MessageService, private router: Router
    ) { }
 
  ganar(){
    let existeCurso: any = localStorage.getItem("idCurso");
      if(existeCurso != null || undefined){
        let idE: any = localStorage.getItem("idEst");
        let idA : string ="10";
        let actividadHecha: actividadEstudiante = {
          actividad_realizada:1,
          nota:5
        }
        this.actividadPut.editActivity(idE, idA ,actividadHecha ).subscribe(edit =>{
          console.log(edit)
          actividadHecha = edit
          this.actividadPut.actRealizada = true;
          this.actividadPut.actNota = 5;
          this.messageService.add({severity:'success', summary:'Felicitaciones!', detail:`Felicitaciones! Lo lograste en ${this.boardServiceService.movesCount} movimientos y ${this.boardServiceService.elapsedSeconds}  segundos!`});
          setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
        });
      }else if (existeCurso == null || undefined){
        this.messageService.add({severity:'success', summary:'Felicitaciones!', detail:`Felicitaciones! Lo lograste en ${this.boardServiceService.movesCount} movimientos y ${this.boardServiceService.elapsedSeconds}  segundos!`});
      }

  
      this.clear();
  }
  clear() {
    this.messageService.clear();
}
  

}
