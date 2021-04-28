import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { characterReport } from './characterReport';

@Injectable({
  providedIn: 'root'
})
export class GetListCharacterService {

  constructor(private http:HttpClient) { }
  
  url :string = "http://hp-api.herokuapp.com/api/characters/house/"

  

  public getCharacters(house){

    return this.http.get<characterReport[]>(this.url+house)

  }

}


