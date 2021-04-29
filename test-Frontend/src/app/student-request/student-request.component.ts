import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private formBuilder:FormBuilder){}


  StudentForm = this.formBuilder.group({

    name: ['', Validators.required],
    species: ['', Validators.required],
    gender: ['', Validators.required],
    house: [''],
    dateOfBirth: ['',Validators.required],
    yearOfBirth:['', Validators.required],
    ancestry: ['',Validators.required],
    eyeColour: ['', Validators.required],
    hairColour: ['',Validators.required],
    wood: ['',Validators.required],
    core: ['', Validators.required],
    length: [''],
    patronus: ['', Validators.required],
    actor: ['', Validators.required],
    alive: [''],
    image: ['', Validators.required],
    
  })

  SaveForm(){

    console.log(' La informacion del FormBuilder es: ', this.StudentForm.value);

  }


 //
 public preview(files) {
  if (files.length === 0)
    return;
  
  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
  

  ngOnInit(){


  }

}
