var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RestaurantService } from './../../restaurants/restaurants.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var MenuComponent = (function () {
    function MenuComponent(restaurantes, rota) {
        this.restaurantes = restaurantes;
        this.rota = rota;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menu = this.restaurantes
            .menuOfRestaurant(this.rota.parent.snapshot.params['id']);
    };
    MenuComponent.prototype.adicionaItem = function (item) {
        console.log(item);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Component({
        selector: 'mt-menu',
        templateUrl: './menu.component.html'
    }),
    __metadata("design:paramtypes", [RestaurantService,
        ActivatedRoute])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map