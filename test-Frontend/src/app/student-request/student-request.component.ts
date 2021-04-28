import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){

    
  }


  StudentForm = this.formBuilder.group({

    Name: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    species: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    gender: [''],
    house: [''],
    dateOfBirth: ['',Validators.required],
    yearOfBirth:['', Validators.required],
    ancestry: ['',Validators.required, Validators.pattern('[a-zA-Z ]*')],
    eyeColour: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    hairColour: ['',Validators.required, Validators.pattern('[a-zA-Z ]*')],
    wood: ['',Validators.required, Validators.pattern('[a-zA-Z ]*')],
    core: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    length: [''],
    patronus: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    hogwartsStudent: [''],
    hogwartsStaff: [''],
    actor: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    alive: [''],
    image: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')]
    
  })

  SaveForm(){

    console.log(' La informacion del FormBuilder es: ', this.StudentForm.value);

  }

  ngOnInit(){


  }

}
