var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var MeuItemComponent = (function () {
    function MeuItemComponent() {
        this.add = new EventEmitter();
    }
    MeuItemComponent.prototype.ngOnInit = function () {
    };
    //Método que notifica o objeto que foi clicado
    MeuItemComponent.prototype.emiteEventoAdd = function () {
        this.add.emit(this.menuItem);
    };
    return MeuItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], MeuItemComponent.prototype, "menuItem", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MeuItemComponent.prototype, "add", void 0);
MeuItemComponent = __decorate([
    Component({
        selector: 'mt-meu-item',
        templateUrl: './meu-item.component.html'
    }),
    __metadata("design:paramtypes", [])
], MeuItemComponent);
export { MeuItemComponent };
//# sourceMappingURL=meu-item.component.js.map