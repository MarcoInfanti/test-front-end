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

  selectedValue ='';
  age=0;
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSourceTeacher = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)


  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSourceTeacher.filter = filterValue.trim().toLowerCase();
    

  }

  getPatronus(patronus){

    if (patronus == "") {

    return "-"
  } else {


    return patronus
  }

  }


  constructor(private service: GetListTeachersService) { }

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
