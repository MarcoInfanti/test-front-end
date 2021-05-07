import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DateSlashPipe } from '../pipes/date-slash.pipe';

import { RequestViewComponent } from './request-view.component';

describe('RequestViewComponent', () => {
  let component: RequestViewComponent;
  let fixture: ComponentFixture<RequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatPaginatorModule, MatTableModule, BrowserAnimationsModule, NoopAnimationsModule,],
      declarations: [ RequestViewComponent, DateSlashPipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestViewComponent);
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


  it('session storage is empty return []',() => {

    sessionStorage.clear()
    let array = new Array()
    let value =component.metodo()
    expect(value).toEqual(array)


  })


 /*it('session storage isnot  empty return []',() => {

   })*/




});


 