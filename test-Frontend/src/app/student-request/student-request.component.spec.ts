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
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty'), () =>{

    expect(component.StudentForm.valid).toBeFalsy

  }

  it('name field validity', () => {
    let name = component.StudentForm.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue("");
    expect(name.hasError('required')).toBeTruthy();

    name.setValue("A");
    expect(name.hasError('minlength', ['minlength'])).toEqual(false);
  });

  it('Created studen equals to saved student',()=>{

    sessionStorage.clear()

    let name = component.StudentForm.controls['name'];
    let species = component.StudentForm.controls['species'];
    let gender = component.StudentForm.controls['gender'];
    let house = component.StudentForm.controls['house'];
    let dateOfBirth = component.StudentForm.controls['dateOfBirth'];
    let yearOfBirth = component.StudentForm.controls['yearOfBirth'];
    let ancestry = component.StudentForm.controls['ancestry'];
    let eyeColour = component.StudentForm.controls['eyeColour'];
    let hairColour = component.StudentForm.controls['hairColour'];
    let wood = component.StudentForm.controls['wood'];
    let core = component.StudentForm.controls['core'];
    let hogwartsStudent = component.StudentForm.controls['hogwartsStudent'];
    let length = component.StudentForm.controls['length'];
    let patronus = component.StudentForm.controls['patronus'];
    let actor = component.StudentForm.controls['actor'];
    let alive = component.StudentForm.controls['alive'];
    let image = component.StudentForm.controls['image'];

    name.setValue('Marco')
    species.setValue('Human')
    gender.setValue("hombre")
    house.setValue("gryffindor")
    dateOfBirth.setValue("22-10-1994")
    yearOfBirth.setValue("1994")
    ancestry.setValue('Maria')
    eyeColour.setValue('brown')
    hairColour.setValue('brown')
    wood.setValue('arce')
    core.setValue('phoenix')
    hogwartsStudent.setValue(true)
    length.setValue(1)
    patronus.setValue("wolf")
    actor.setValue("Marco")
    alive.setValue(true)
    image.setValue("")
    component.imgURL=""

    let values = component.StudentForm.value
    component.createStudent();

    name.setValue('ina');
    values = component.StudentForm.value
    component.createStudent();

    let saved = sessionStorage.getItem('student')

    console.log(saved)

    console.log(saved)
    expect(values).toEqual(JSON.parse(saved)[1])

  });


  it('preview file not empty' ,() => {

    let image = component.imgURL


  
  });

});
