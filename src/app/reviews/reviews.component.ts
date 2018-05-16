import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantes: RestaurantService, private rota: ActivatedRoute) { }

  // Feito de maneira diferente - sem 'subscribe' e com o 'reviews' sendo setado antes 
  ngOnInit() {
    this.reviews = this.restaurantes
      .reviewsOfRestaurants(this.rota.parent.snapshot.params['id'])//Pega a rota do parente - Componente pai
  }

}
