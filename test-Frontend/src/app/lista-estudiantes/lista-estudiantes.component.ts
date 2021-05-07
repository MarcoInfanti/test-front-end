import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort,  MatTableDataSource } from '@angular/material';
import {GetListService} from '../services/get-list-character.service';
import {characterReport} from '../characterReport';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css'],
  providers: [GetListService]

})
export class ListaEstudiantesComponent implements OnInit {
    //inicialización de variables
  selectedValue ='';
  age=0;
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSourceStudents = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)

  //filtro y paginación
  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSourceStudents.filter = filterValue.trim().toLowerCase();
    

  }
    //Setea con un "-" en la tabla los campos que no tienen valor en la columna patronus

  getPatronus(patronus){

    if (patronus == "") {

    return "-"
  } else {


    return patronus
  }

  }


  //Servicio
  constructor(private service: GetListService) { }

  //metodo que llama al API, recibe como parametro (value) la casa y trae a los actores que pertenecen a ella
  public getAllStudents(value){
    
    
    let response = this.service.getCharacters(value);
    response.subscribe(report=>this.dataSourceStudents.data=report as characterReport[])
    
  }

 

  ngOnInit() {

    this.getAllStudents("/students");

  }

  
  ngAfterViewInit() {

    this.dataSourceStudents.paginator = this.paginator;
    this.dataSourceStudents.sort = this.sort;

  }

}
