import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {GetListCharacterService} from '../get-list-character.service'
import {characterReport} from '../characterReport'

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.css']
})

export class CasasComponent implements OnInit {
  
  ELEMENT_DATA : any[] = [];
  displayedColumns: string[] = ['name','patronus', 'age' , 'image'];
  dataSource = new MatTableDataSource<characterReport>(this.ELEMENT_DATA)
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private service: GetListCharacterService) { }

  public getAllCharacter(){
    let response = this.service.getCharacters();
    response.subscribe(report=>this.dataSource.data=report as characterReport[])
    console.log(this.dataSource)
  }

  ngOnInit() {

    this.getAllCharacter();

  }

  
}
