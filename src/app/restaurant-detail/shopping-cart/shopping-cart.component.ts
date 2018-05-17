import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

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
