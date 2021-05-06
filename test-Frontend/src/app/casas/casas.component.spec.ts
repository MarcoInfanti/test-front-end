import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatSelectModule, MatTableDataSource, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DatepipePipe } from '../pipes/datepipe.pipe';
import { GetListService } from '../services/get-list-character.service';
import { CasasComponent } from './casas.component';


describe('CasasComponent', () => {
  let component: CasasComponent;
  let fixture: ComponentFixture<CasasComponent>;
  let http : HttpClient;
  let getlist = new  GetListService(http);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NoopAnimationsModule, MatTableModule, MatSelectModule, MatPaginatorModule, HttpClientTestingModule],
      declarations: [ CasasComponent, DatepipePipe, ],
      providers:[GetListService]
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
