import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { DatepipePipe } from '../pipes/datepipe.pipe';

import { ListaProfesoresComponent } from './lista-profesores.component';

describe('ListaProfesoresComponent', () => {
  let component: ListaProfesoresComponent;
  let fixture: ComponentFixture<ListaProfesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule],
      declarations: [ ListaProfesoresComponent, DatepipePipe ],
    })
    .compileComponents();
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
