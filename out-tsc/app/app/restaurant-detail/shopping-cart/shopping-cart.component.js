var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(carrinho) {
        this.carrinho = carrinho;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.items = function () {
        return this.carrinho.items;
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.carrinho.clear();
    };
    ShoppingCartComponent.prototype.removeItem = function (item) {
        this.carrinho.removeItem(item);
    };
    ShoppingCartComponent.prototype.addItem = function (item) {
        this.carrinho.addItem(item);
    };
    ShoppingCartComponent.prototype.total = function () {
        return this.carrinho.total();
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    Component({
        selector: 'mt-shopping-cart',
        templateUrl: './shopping-cart.component.html'
    }),
    __metadata("design:paramtypes", [ShoppingCartService])
], ShoppingCartComponent);
export { ShoppingCartComponent };
//# sourceMappingURL=shopping-cart.component.js.map