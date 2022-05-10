import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DocenteServiceService } from '../docente-service.service';
import { AuthService } from 'src/app/services/auth.service';
import * as XLSX from 'xlsx';
import { RegistroEstudiante } from 'src/app/models/auth';
@Component({
  selector: 'app-crud-docente',
  templateUrl: './crud-docente.component.html',
  styleUrls: ['./crud-docente.component.scss']
})
export class CrudDocenteComponent implements OnInit {
 

  estudiantes: RegistroEstudiante [] = [];
  estudiante: RegistroEstudiante [] = []; //tabla
  selectedEstudiante: RegistroEstudiante [] = [];

  estudiante1: RegistroEstudiante = {} as RegistroEstudiante;
 
  idE : any;
  clonedStudents: { [s: string]: RegistroEstudiante; } = {};
  estudianteC: RegistroEstudiante [] = [];

  estudianteDialog: boolean = false;

 
  registroEstudiante: RegistroEstudiante = {
    id_estudiante: "",
    nombres: "",
    apellidos:"",
    password:"",
    id_curso:""
  }
  
  constructor(private crud: DocenteServiceService ,private  messageService: MessageService,
              private confirmationService: ConfirmationService, 
              private registroService: AuthService, public authService:AuthService) {
               }

  ngOnInit(): void {

    this.crud.getListStudents().subscribe(filtro =>{
      this.estudiante = filtro //traer estudiante
      this.selectedEstudiante = filtro
      this.estudiantes = filtro      
    })
  }


  registrarEstudiante(){
    this.registroService.registroEstudiante(this.registroEstudiante).subscribe(
      res => {           
        this.messageService.add({severity:'success', summary: 'Nuevo estudiante', detail: 'Estudiante agregado', life: 1500});
        window.location.reload();
        
      }
    );
  }
  
  openNew() {
    this.estudianteDialog = true;
  }

  hideDialog() {
    this.estudianteDialog = false;
  }
  
  deleteStudent(nino: RegistroEstudiante) {
    this.idE = nino.id_estudiante
    parseInt(this.idE)
      this.confirmationService.confirm({
          message: '¿Está segur@ de eliminar a ' + nino.nombres + '?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          acceptLabel: 'Si',
          accept: () => {
            this.crud.deleteStudent(this.idE).subscribe(() =>{           
              this.messageService.add({severity:'success', summary: 'Eliminación', detail: 'Estudiante borrado', life: 3000});
              window.location.reload();
              
            });         
          }
      });
  }

  onRowEditInit(listaE: RegistroEstudiante) {
    this.idE = listaE.id_estudiante
    parseInt(this.idE)
    this.clonedStudents[this.idE] = {...listaE};
  }
  
  onRowEditSave(regis: RegistroEstudiante) {
    this.idE = regis.id_estudiante
    parseInt(this.idE)
    let registro: RegistroEstudiante = {
     
      nombres: regis.nombres,
      apellidos: regis.apellidos,
      id_curso: regis.id_curso
    }
    this.crud.editStudent( this.idE, registro).subscribe(edit =>{

        registro = edit
        delete this.clonedStudents[this.idE];
        this.messageService.add({severity:'success', summary: 'Actualización', detail:'Información actualizada', life: 3000});
        window.location.reload();
    })
   
  }

  onRowEditCancel(listaE: RegistroEstudiante, index: number) {
    this.idE = listaE.id_estudiante
    parseInt(this.idE)
    this.estudianteC[index] = this.clonedStudents[this.idE];
    delete this.clonedStudents[this.idE];
  }

  exportToExcel(){
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja');

    XLSX.writeFile(wb, 'Estudiantes.xlsx');
}


}
