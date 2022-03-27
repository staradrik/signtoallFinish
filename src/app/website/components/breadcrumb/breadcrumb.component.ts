import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { RutaBreadcrumService } from '../../../services/ruta-breadcrum.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})

export class BreadcrumbComponent implements OnInit {

  subscription: Subscription | undefined;

  items: MenuItem[] = [];

  home: MenuItem = {};

  search: string = "";
  
  constructor(public rutaS:RutaBreadcrumService) { }

  ngOnInit(): void {
    this.subscription = this.rutaS.itemsHandler.subscribe(response => {
      this.items = response;
    });
    this.home = { icon: 'pi pi-home', routerLink: '/actividades' };
  }
  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }
}
