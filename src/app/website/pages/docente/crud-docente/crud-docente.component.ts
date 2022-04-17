import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-docente',
  templateUrl: './crud-docente.component.html',
  styleUrls: ['./crud-docente.component.css']
})
export class CrudDocenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hola')
  }

}
