import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BoardServiceService } from 'src/app/services/board.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(
    public boardServiceService: BoardServiceService,
    private messageService: MessageService, private router: Router
    ) { }
  ngOnInit(): void {
    this.final();
  }
  final(){
    if(this.boardServiceService.finished){
      this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
      setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
    }
    
  }
  

}
