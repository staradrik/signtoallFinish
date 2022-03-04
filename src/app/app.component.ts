import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 title = 'sign';

 constructor(private router: Router) { }

 IrActividad(){
  this.router.navigate(['/actividades/vistaAct']);
}

}
