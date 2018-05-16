import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  constructor(private restaurantes: RestaurantService,
              private rota: ActivatedRoute) { }

  //Método executado em primeiro lugar - assim que o componente é chamado
  ngOnInit() {

    this.restaurantes.restaurantsById(this.rota.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
