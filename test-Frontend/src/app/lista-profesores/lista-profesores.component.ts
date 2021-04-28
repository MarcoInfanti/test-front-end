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

  public calculateAge(date, year){

     if (date) {


      var newdate = date.split("-").reverse().join("-");
      newdate = new Date(newdate)

      console.log(newdate)
      var timeDiff = Math.abs(Date.now() - newdate);
    
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      return this.age

        } else if (year) {

         var currentYear = new Date().getFullYear()
         console.log(currentYear - year)
         return currentYear - year


        } else {

          return "-"

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
