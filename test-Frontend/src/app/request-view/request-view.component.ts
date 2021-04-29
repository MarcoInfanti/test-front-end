import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort,  MatTableDataSource } from '@angular/material';
import { $ } from 'protractor';
import {characterReport} from '../characterReport';
import { StudentRequestComponent } from '../student-request/student-request.component';


@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSource = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)

  
  //Servicio
  constructor() { }

  //metodo que llama al API, recibe como parametro (value) la casa y trae a los actores que pertenecen a ella

  metodo(){

    if (sessionStorage.getItem("student") !== null) {
    let student = JSON.parse(sessionStorage.getItem("student"));
    console.log((student[6])) 
    
    }
            
  }

  
  ngOnInit() {

    this.metodo()
  }
  
}
