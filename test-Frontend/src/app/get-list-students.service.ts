import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { characterReport } from './characterReport';

@Injectable({
  providedIn: 'root'
})
export class GetListStudentsService {


  constructor(private http:HttpClient) { }

  //metodo que consulta los estudiantes

  url :string = "http://hp-api.herokuapp.com/api/characters/students"

  //Metodo que realiza la consulta

  public getStudents(){

    return this.http.get<characterReport[]>(this.url)

  }

}
