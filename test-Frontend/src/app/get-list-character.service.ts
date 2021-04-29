import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { characterReport } from './characterReport';

@Injectable({
  providedIn: 'root'
})

//Servicio API 
export class GetListService {

  constructor(private http:HttpClient) { }
  
  url :string = "http://hp-api.herokuapp.com/api/characters"

  
  //metodo que recibe como parametro la casa "House" para realizar la consulta 

  public getCharacters(house){

    return this.http.get<characterReport[]>(this.url+house)

  }

}


