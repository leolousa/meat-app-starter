import { SharedModule } from './../shared/shared.module';
import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { RouterModule, Routes } from '@angular/router';

const ROTAS: Routes = [
    {path: '', component: OrderComponent}
]
@NgModule({
    declarations: [OrderComponent, OrderItensComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROTAS), ]
})
export class OrderModule{}