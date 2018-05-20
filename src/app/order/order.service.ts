import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';

@Injectable()
export class OrderService {

    constructor(private carrinho: ShoppingCartService, private http: Http) {}

    itemsValue(): number {
        return this.carrinho.total()
    }

    cartItems(): CartItem[] {
        return this.carrinho.items
    }

    increaseQty(item: CartItem) {
        this.carrinho.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.carrinho.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.carrinho.removeItem(item)
    }

    clear() {
        this.carrinho.clear()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({headers: headers}))
            .map(response => response.json())
    }
}