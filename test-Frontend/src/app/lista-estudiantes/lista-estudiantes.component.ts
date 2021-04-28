import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort,  MatTableDataSource } from '@angular/material';
import {GetListStudentsService} from '../get-list-students.service';
import {characterReport} from '../characterReport';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
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
  constructor(private service: GetListStudentsService) { }

  //metodo que llama al API, recibe como parametro (value) la casa y trae a los actores que pertenecen a ella
  public getAllStudents(){
    
    
    let response = this.service.getStudents();
    response.subscribe(report=>this.dataSourceStudents.data=report as characterReport[])
    console.log(this.dataSourceStudents)
  }

 

  ngOnInit() {

    this.getAllStudents();

  }

  
  ngAfterViewInit() {

    this.dataSourceStudents.paginator = this.paginator;
    this.dataSourceStudents.sort = this.sort;

  }

}
