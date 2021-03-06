import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('pronto', style({opacity: 1})),
      transition('void => pronto', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('pronto => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'pronto'

  constructor(private carrinho: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any {
    return this.carrinho.items
  }

  clear() {
    this.carrinho.clear()
  }

  removeItem(item: any) {
    this.carrinho.removeItem(item)
  }

  addItem(item: any) {
    this.carrinho.addItem(item)
  }

  total(): number {
    return this.carrinho.total()
  }
}
