var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
var OrderService = (function () {
    function OrderService(carrinho) {
        this.carrinho = carrinho;
    }
    OrderService.prototype.cartItems = function () {
        return this.carrinho.items;
    };
    OrderService.prototype.increaseQty = function (item) {
        this.carrinho.increaseQty(item);
    };
    OrderService.prototype.decreaseQty = function (item) {
        this.carrinho.decreaseQty(item);
    };
    OrderService.prototype.remove = function (item) {
        this.carrinho.removeItem(item);
    };
    return OrderService;
}());
OrderService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ShoppingCartService])
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map