import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CasasComponent } from './casas/casas.component';
import { characterReport } from './characterReport';
import {} from './casas/casas.component'

@Injectable({
  providedIn: 'root'
})
export class GetListCharacterService {

  constructor(private http:HttpClient) { }
  
  url :string = "http://hp-api.herokuapp.com/api/characters/house/{{selected}}"

  

  public getCharacters(){

    return this.http.get<characterReport[]>(this.url)

  }

}


