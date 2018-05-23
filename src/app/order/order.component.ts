import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //Criando o grupo de formulário - Nova maneira de tratar formulários
  orderForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de débito', value:'DEB'},
    {label:'Cartão de refeição', value:'REF'}
  ]

  constructor(private ordens: OrderService,
              private rota: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    //Campos do formulário com suas validações
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  /*Função que checa o valor dos campos de email e emailConfirmation.
  * Recebemos o Control e retornamos uma chave qualquer (emailNoMatch)
  *  associada ao grupo para dar um feedback visual*/ 
  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation) {
      return undefined
    }
    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch:true}
    }
    return undefined
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
        this.rota.navigate(['/order-summary']) 
        this.ordens.clear()
    })

    
    //console.log(order)
  }
}
