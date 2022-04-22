import { Component } from '@angular/core';
import { EspannolService } from '../../../../../services/espannol.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor(public boardGame: EspannolService) { }

}
