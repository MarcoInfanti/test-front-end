import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort,  MatTableDataSource } from '@angular/material';
import {GetListTeachersService} from '../get-list-teachers.service';
import {characterReport} from '../characterReport';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {
  //inicialización de variables

  selectedValue ='';
  age=0;
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSourceTeacher = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)

  //filtro y paginación
  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSourceTeacher.filter = filterValue.trim().toLowerCase();
    

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

  constructor(private service: GetListTeachersService) { }

    //metodo que llama al API, recibe como parametro (value) la casa y trae a los actores que pertenecen a ella

  public getAllTeachers(){
    
    
    let response = this.service.getTeachers();
    response.subscribe(report=>this.dataSourceTeacher.data=report as characterReport[])
    console.log(this.dataSourceTeacher)
  }

 
  
  ngOnInit() {
    
    this.getAllTeachers();

  }

  
  ngAfterViewInit() {

    this.dataSourceTeacher.paginator = this.paginator;
    this.dataSourceTeacher.sort = this.sort;

  }

}
