import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  keyApi: string = "55bd1745742df656dab7ddeaf2fb1a1f";
  uri: string = "https://api.openweathermap.org/data/2.5/weather?q=";

  constructor(private http: HttpClient) {

   }

   get(city:String){
     return this.http.get(`${this.uri}${city}&units=metric&appid=${this.keyApi}`)
   }
}
