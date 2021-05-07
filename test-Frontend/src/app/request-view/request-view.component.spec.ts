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
});


 