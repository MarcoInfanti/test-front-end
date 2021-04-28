import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { characterReport } from './characterReport';


@Injectable({
  providedIn: 'root'
})
export class GetListTeachersService {

  constructor(private http:HttpClient) { }
  
  url :string = "http://hp-api.herokuapp.com/api/characters/staff"

  

  public getTeachers(){

    return this.http.get<characterReport[]>(this.url)

  }


}
