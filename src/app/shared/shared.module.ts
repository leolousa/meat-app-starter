import { RestaurantService } from './../restaurants/restaurants.service';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';



@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
              CommonModule, FormsModule, ReactiveFormsModule,
              SnackbarComponent]
})
export class SharedModule {
    static forRoute(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantService, OrderService, NotificationService]
        }
    }
}