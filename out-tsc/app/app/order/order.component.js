var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { OrderService } from './order.service';
import { Component } from '@angular/core';
var OrderComponent = (function () {
    function OrderComponent(ordens) {
        this.ordens = ordens;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de débito', value: 'DEB' },
            { label: 'Cartão de refeição', value: 'REF' }
        ];
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.cartItems = function () {
        return this.ordens.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.ordens.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.ordens.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.ordens.remove(item);
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    Component({
        selector: 'mt-order',
        templateUrl: './order.component.html'
    }),
    __metadata("design:paramtypes", [OrderService])
], OrderComponent);
export { OrderComponent };
//# sourceMappingURL=order.component.js.map