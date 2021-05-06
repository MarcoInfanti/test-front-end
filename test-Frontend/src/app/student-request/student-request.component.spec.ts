import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DateSlashPipe } from '../pipes/date-slash.pipe';
import { DatepipePipe } from '../pipes/datepipe.pipe';


import { StudentRequestComponent } from './student-request.component';

describe('StudentRequestComponent', () => {
  let component: StudentRequestComponent;
  let fixture: ComponentFixture<StudentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NoopAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatSidenavModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule ],
      declarations: [ StudentRequestComponent, DateSlashPipe,DatepipePipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
