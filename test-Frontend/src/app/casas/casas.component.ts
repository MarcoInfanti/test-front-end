import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSelectChange, MatSort,  MatTableDataSource } from '@angular/material';
import {GetListCharacterService} from '../get-list-character.service';
import {characterReport} from '../characterReport';
import { getActiveOffset } from '@angular/material/datepicker/typings/multi-year-view';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})

export class CasasComponent implements OnInit {

  selectedValue ='';
  age=0;
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'dateOfBirth' , 'image'];
  dataSource = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)


  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

  }

  getPatronus(patronus){

    if (patronus == "") {

    return "-"
  } else {


    return patronus
  }

  }

 
  constructor(private service: GetListCharacterService) { }

  public getAllCharacter(value){
    
    
    let response = this.service.getCharacters(value);
    response.subscribe(report=>this.dataSource.data=report as characterReport[])
    console.log(this.dataSource)
  }

    getChangeHouse(event: MatSelectChange) {

    this.selectedValue = event.value;
    console.log(this.selectedValue);
    this.getAllCharacter(this.selectedValue);

  }
  
  ngOnInit() {

    this.getAllCharacter('slytherin');

  }

  
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  
}
