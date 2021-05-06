import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CasasComponent } from '../casas/casas.component';
import { ListaEstudiantesComponent } from '../lista-estudiantes/lista-estudiantes.component';
import { ListaProfesoresComponent } from '../lista-profesores/lista-profesores.component';
import { DateSlashPipe } from '../pipes/date-slash.pipe';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { RequestViewComponent } from '../request-view/request-view.component';
import { StudentRequestComponent } from '../student-request/student-request.component';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NoopAnimationsModule, MatDividerModule, MatFormFieldModule, AppRoutingModule, MatSidenavModule, MatSelectModule, MatTableModule, MatPaginatorModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule  ],
      declarations: [ NavBarComponent, CasasComponent, ListaEstudiantesComponent, ListaProfesoresComponent, StudentRequestComponent, RequestViewComponent, DatepipePipe, DateSlashPipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
