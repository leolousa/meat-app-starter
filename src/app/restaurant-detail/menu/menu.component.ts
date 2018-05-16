import { MenuItem } from './../menu-item/menu-item.model';
import { RestaurantService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantes: RestaurantService,
              private rota: ActivatedRoute ) { }

  ngOnInit() {
    this.menu = this.restaurantes
      .menuOfRestaurant(this.rota.parent.snapshot.params['id'])
  }

  adicionaItem(item: MenuItem) {
    console.log(item)
  }

}
