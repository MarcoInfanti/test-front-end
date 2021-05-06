import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantesComponent } from './lista-estudiantes.component';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

describe('ListaEstudiantesComponent', () => {
  let component: ListaEstudiantesComponent;
  let fixture: ComponentFixture<ListaEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, ],
      declarations: [ ListaEstudiantesComponent, DatepipePipe ],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
