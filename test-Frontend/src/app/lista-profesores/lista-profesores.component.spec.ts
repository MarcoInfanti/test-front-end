import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { GetListService } from '../services/get-list-character.service';

import { ListaProfesoresComponent } from './lista-profesores.component';

describe('ListaProfesoresComponent', () => {
  let component: ListaProfesoresComponent;
  let fixture: ComponentFixture<ListaProfesoresComponent>;
  let http : HttpClient;
  let getlist : GetListService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, BrowserAnimationsModule, NoopAnimationsModule, HttpClientTestingModule],
      declarations: [ ListaProfesoresComponent, DatepipePipe ],
      
    })
    .compileComponents();
    getlist = new GetListService(http);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
