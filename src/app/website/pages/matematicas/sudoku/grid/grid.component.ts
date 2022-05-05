import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { actividadEstudiante } from 'src/app/models/Actividades';
import { MatematicasService } from 'src/app/services/matematicas.service';
import { ActividadPutService } from 'src/app/services/actividad-put.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges  {

  data:any;

  name = "Sudoku";
  x = "";
  y = "";
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('init') numberOfCellsDisabled:any;
 // @Input() numberOfCellsDisabled:any;
  @Output() difficulty = new EventEmitter();

  isFinished: boolean = false;
  sudokuSubmitted: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
      this.randomizeDisableCells(this.numberOfCellsDisabled);
  }

 



  constructor(private modalService: NgbModal,
      private sudokuService:MatematicasService,
      private messageService: MessageService, private router: Router,
      private actividadPut: ActividadPutService) {

  }
  ngOnInit() {

  console.log('f')
  }

  checkSolution() {

     
      if (this.isSolved() == true) {
          this.isFinished = true

          let existeCurso: any = localStorage.getItem("idCurso");
      if(existeCurso != null || undefined){
        let idE: any = localStorage.getItem("idEst");
        let idA : string ="9";
        let actividadHecha: actividadEstudiante = {
          actividad_realizada:1,
          nota:5
        }
        this.actividadPut.editActivity(idE, idA ,actividadHecha ).subscribe(edit =>{
          console.log(edit)
          actividadHecha = edit
          this.actividadPut.actRealizada = true;
          this.actividadPut.actNota = 5;
          this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
          setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
        });
      }else if (existeCurso == null || undefined){
        this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
      }
      


      } else {
          this.isFinished = false
      }
      this.sudokuSubmitted = true

  }

  changeDifficulty(difficultyType: any) {
      this.sudokuSubmitted = false
     // this.isFinished = null

      
      this.difficulty.emit(difficultyType)
  }

  isSolved() {
      for (var j = 0; j < 9; j++) {
          for (var i = 0; i < 9; i++) {
              if (this.data[j][i].v == this.SolData[j][i].v) {
                  // this.isFinished = true
                  continue;
              }
              else {
                  // this.isFinished = false
                  
                  return false;
              }
          }
      }
      return true;
  }

  // START || functions to disable random cells 
  // Randomly disable cell as per input parameter 
  randomizeDisableCells(noOfCells: number) {
      var xRan, yRan, counter = 0;
      this.data = null;

      this.sudokuService.getSudoku()
          .subscribe((returnedData: any) => this.data = returnedData);

      // const solutionData = this.data;
      for (var j = 0; j < 9; j++) {
          for (var i = 0; i < 9; i++) {
              this.SolData[j][i].v = this.data[j][i].v
          }
      }
     
      for (var j = 0; j < 9; j++) {
          for (var i = 0; i < 9; i++) {
              this.data[j][i].s = true
          }
      }

      while (counter < noOfCells) {
          xRan = this.getRandomInt(9);
          yRan = this.getRandomInt(9);
          if (this.data[xRan][yRan].s) {
              this.data[xRan][yRan].s = false;
              counter++;
          }
      }


      for (var j = 0; j < 9; j++) {
          for (var i = 0; i < 9; i++) {
              if (this.data[j][i].s == true)
                  this.data[j][i].v = 0
          }
      }

  }

  // get Random number between 0 and 'max'
  getRandomInt(max: number) {
      return Math.floor(Math.random() * Math.floor(max));
  }

  // END || functions to disable random cells 

  recieveValue($event: any): void {
      this.data[this.x][this.y].v = $event;
  }

  open(x: any, y: any, comp: any, cssClass: any) {
      this.x = x;
      this.y = y;
      this.modalService.open(comp, { centered: true, size: "sm", windowClass: cssClass });
  }

  SolData = [
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ],
      [
          { v: 1, s: true }, { v: 2, s: true }, { v: 3, s: true },
          { v: 4, s: true }, { v: 5, s: true }, { v: 6, s: true },
          { v: 7, s: true }, { v: 8, s: true }, { v: 9, s: true }
      ]
  ];
}
