import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSort, MatTable, MatTableDataSource, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasasComponent } from './casas/casas.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DateSlashPipe } from './pipes/date-slash.pipe';
import { DatepipePipe } from './pipes/datepipe.pipe';
import { RequestViewComponent } from './request-view/request-view.component';
import { StudentRequestComponent } from './student-request/student-request.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, NoopAnimationsModule,
        RouterTestingModule,
        AppRoutingModule,
        MatDividerModule,
        MatTableModule, MatSelectModule, MatPaginatorModule, MatSidenavModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule
      ],
      declarations: [
        AppComponent,
        NavBarComponent,
        CasasComponent, ListaEstudiantesComponent, ListaProfesoresComponent, StudentRequestComponent, RequestViewComponent, DatepipePipe, DateSlashPipe 
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

 /* it(`should have as title 'test-Frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test-Frontend');
  });

   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('test-Frontend app is running!');
  });*/
});
