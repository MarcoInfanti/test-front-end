import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort,  MatTableDataSource } from '@angular/material';
import { $ } from 'protractor';
import {characterReport} from '../characterReport';
import { StudentRequestComponent } from '../student-request/student-request.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  student=JSON.parse(sessionStorage.getItem("student"));
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSourceRequest = new MatTableDataSource<characterReport>(this.student);

  
  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor() { }

  getPatronus(patronus){

    if (patronus == "") {

    return "-"
  } else {


    return patronus
  }

  }

  applyFilter(filterValue: string) {
    if(this.dataSourceRequest != null){

      this.dataSourceRequest.filter = filterValue.trim().toLowerCase();

    }

  }


  //metodo que llama al API, recibe como parametro (value) la casa y trae a los actores que pertenecen a ella

  metodo(){

    if (sessionStorage.getItem("student") !== null) {
    let student = JSON.parse(sessionStorage.getItem("student"));   
    }
            
  }

  
  ngOnInit() {

    this.metodo()
  }
  

  ngAfterViewInit() {

    this.dataSourceRequest.paginator = this.paginator;
    this.dataSourceRequest.sort = this.sort;

  }

}
