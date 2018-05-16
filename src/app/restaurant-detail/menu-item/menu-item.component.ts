import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuItem: MenuItem

  @Output()
  add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  //Método que notifica o objeto que foi clicado
  emiteEventoAdd() {
    this.add.emit(this.menuItem)
  }

}
