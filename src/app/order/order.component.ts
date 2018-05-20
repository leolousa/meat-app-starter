import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de débito', value:'DEB'},
    {label:'Cartão de refeição', value:'REF'}
  ]

  constructor(private ordens: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return  this.ordens.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.ordens.cartItems()
  }

  increaseQty(item: CartItem) {
    this.ordens.increaseQty(item)
  }
  
  decreaseQty(item: CartItem) {
    this.ordens.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.ordens.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.ordens.checkOrder(order)
      .subscribe( (orderId: string) => {
      console.log(`Compra concluída: ${orderId}`)
      this.ordens.clear()
    })

    
    console.log(order)
  }
}
