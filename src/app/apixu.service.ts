import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
    getWeather(location:any){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=80c28e3b722bc8856f1eee7c4c43a9ac&query=' + location);
  }
}