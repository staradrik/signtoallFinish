import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { RutaBreadcrumService } from '../../../services/ruta-breadcrum.service';
import { EstudianteService } from '../../../services/estudiante.service';
import { ObtenerActividadesService } from '../../../services/obtener-actividades.service';
import { Actividades, actividadEstudiante } from 'src/app/models/Actividades';
import { ActividadPutService } from 'src/app/services/actividad-put.service';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-vista-actividades',
  templateUrl: './vista-actividades.component.html',
  styleUrls: ['./vista-actividades.component.scss']
})
export class VistaActividadesComponent implements OnInit {

  esPro: string = "";

  activity: Actividades[]=[];
  activity2: Actividades={} as Actividades;
  actividadE: actividadEstudiante[] =[];
  actividadE1: actividadEstudiante = {}  as actividadEstudiante;
  sortOptions: SelectItem[] =[];
  sortOrder: number = 0;
  sortField: string = "";
  curso:number = 0;

  val: number = 0;

  variable  =localStorage.getItem("token_estudiante");
  decodedToken!: { [key: string]: string; };
  
  constructor(private Estudiante: EstudianteService,
      private breadcrumbService: RutaBreadcrumService,
      private primengConfig: PrimeNGConfig,
      private actividadesService: ObtenerActividadesService,  public actividadPut: ActividadPutService,
      private authService: AuthService) {
    this.primengConfig.ripple = true;
    
  }

  ngOnInit(): void {

    this.curso = this.Estudiante.obtenerCurso();

   
    

    this.actividadPut.actRealizada;
    this.actividadPut.actNota;
    
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}
    ]);
    
    this.getIdStudent();

    this.obtenerActividades();
    
    //this.actividadesService.getActivity().then(data => this.activity = data);
  }


  obtenerActividades(){
    let to: any = localStorage.getItem('idEst');
    let idE =  to;

   this.actividadPut.getActivity(idE).subscribe( actividades =>{
     this.activity = actividades
     this.activity2 
     console.log(actividades)

   })
  }

  decodeToken() {
    if (this.variable != undefined) {
    this.decodedToken = jwt_decode(this.variable);
    }
  }

  getIdStudent(){
    let to: any = localStorage.getItem("token_estudiante");
    let token = to;
    let decoded: any = jwt_decode(token); 
    let decoV = decoded['id'];
    localStorage.setItem('idEst', decoV)
  }
 
  
  evalueAct( status: number): string{
    if(this.activity2.actividad_realizada == 0){
        return 'danger';
    }
    return 'success';
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
