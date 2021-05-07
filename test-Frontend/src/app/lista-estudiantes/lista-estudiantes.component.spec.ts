import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { ListaEstudiantesComponent } from './lista-estudiantes.component';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { GetListService } from '../services/get-list-character.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ListaEstudiantesComponent', () => {
  let component: ListaEstudiantesComponent;
  let fixture: ComponentFixture<ListaEstudiantesComponent>;
  let http : HttpClient;
  let getlist :  GetListService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, HttpClientTestingModule, BrowserAnimationsModule, NoopAnimationsModule],
      declarations: [ ListaEstudiantesComponent, DatepipePipe ],
    })
    .compileComponents();
    getlist = new GetListService(http);
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('empty patronus changes to -',() => {

    let value = component.getPatronus('')
    expect(value).toEqual('-')


  })

  it('value of patronus returns',() => {

    let value = component.getPatronus('wolf')
    expect(value).toEqual('wolf')


  })
  
});
