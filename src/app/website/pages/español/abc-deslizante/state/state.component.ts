import { Component } from '@angular/core';
import { EspannolService } from '../../../../../services/espannol.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent{

  constructor(
    public boardGame: EspannolService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ganar(){
    this.messageService.add({severity:'success', summary:'Felicitaciones!', detail:`Felicitaciones! Lo lograste en ${this.boardGame.movesCount} movimientos y ${this.boardGame.elapsedSeconds}  segundos!`});
      setTimeout( ()=> { this.router.navigate(['/actividades'])}, 2100);
      this.clear();
  }

  clear() {
    this.messageService.clear();
}
}
