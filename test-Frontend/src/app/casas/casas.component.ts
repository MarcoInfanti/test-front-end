import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort,  MatTableDataSource } from '@angular/material';
import {GetListService} from '../services/get-list-character.service';
import {characterReport} from '../characterReport';


@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css'],
  providers: [GetListService]

})


export class CasasComponent implements OnInit {
  //inicialización de variables

  selectedValue ='';
  age=0;
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSource = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)
  

  //filtro y paginación
  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  public getAllCharacter(value){
     
    
    let response = this.service.getCharacters(value);
    response.subscribe(report=>this.dataSource.data=report as characterReport[])
   
  }

  //Evento que toma el valor de la etiqueta select del html
    getChangeHouse(event: MatSelectChange) {

    this.selectedValue = event.value;
    this.getAllCharacter(this.selectedValue);

  }
  
  ngOnInit() {

    //define como valor inicial a la casa de slytherin
    this.getAllCharacter('/house/slytherin');

  }

  
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  
}
