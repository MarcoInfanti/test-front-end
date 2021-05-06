import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatSelectModule, MatTableDataSource, MatTableModule } from '@angular/material';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { CasasComponent } from './casas.component';
import { MatTable } from '@angular/material'
describe('CasasComponent', () => {
  let component: CasasComponent;
  let fixture: ComponentFixture<CasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatSelectModule, MatPaginatorModule],
      declarations: [ CasasComponent, DatepipePipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
