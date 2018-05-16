import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

/*
* Classe de Serviço de acesso aos dados dos Restaurantes
*/

@Injectable()
export class RestaurantService {
    
    constructor(private http: Http){}

    //Método que traz os restaurantes
    restaurants(): Observable<Restaurant[]> {
        //Chamada REST: Mapeamos para json pois recebemos um objeto do tipo Response
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    //Método que traz um restaurante
    restaurantsById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    //Método que tráz os Reviews dos restaurantes
    reviewsOfRestaurants(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    //Método que traz o menu do restaurante
    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}