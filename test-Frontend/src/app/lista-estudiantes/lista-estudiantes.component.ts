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

  selectedValue ='';
  age=0;
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSourceStudents = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)


  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSourceStudents.filter = filterValue.trim().toLowerCase();
    

  }

  getPatronus(patronus){

    if (patronus == "") {

    return "-"
  } else {


    return patronus
  }

  }



  constructor(private service: GetListStudentsService) { }

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
