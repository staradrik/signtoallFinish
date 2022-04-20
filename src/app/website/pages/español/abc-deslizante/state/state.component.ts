import { Component } from '@angular/core';
import { BoardServiceService } from 'src/app/services/board.service';
import { EspannolService } from '../../../../../services/espannol.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent{

  constructor(
    public boardGame: EspannolService
  ) { }

}
