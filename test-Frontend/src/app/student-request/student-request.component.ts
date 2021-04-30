import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-request',
  templateUrl: './student-request.component.html',
  styleUrls: ['./student-request.component.css']
})
export class StudentRequestComponent implements OnInit {

  public imagePath;
  public imgURL: any;
  public message: string;
  

  constructor(private formBuilder:FormBuilder){}


  StudentForm = this.formBuilder.group({

    name : new FormControl(null, Validators.compose([ Validators.minLength(3), Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    species: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    gender: new FormControl(null, Validators.required),
    house: new FormControl(null, Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    yearOfBirth:new FormControl(null,Validators.compose([ Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")])),
    ancestry:new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')]) ),
    eyeColour: new FormControl(null, Validators.required),
    hairColour: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    wood: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    core: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    hogwartsStudent: [false],
    length: new FormControl(null, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])),
    patronus: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    actor: new FormControl(null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])),
    alive: [true],
    image: new FormControl(null, Validators.required),
    
  })

  SaveForm(){

    //console.log(' La informacion del FormBuilder es: ', this.StudentForm.value);
    
      sessionStorage.setItem( "", JSON.stringify(this.StudentForm.value));

  }


  




 //permite la previsualizacion de la imagen  
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
  


createStudent(){


        var newStudent = new Object();        
        newStudent =  this.StudentForm.value
        console.log(this.imgURL)
        let student = []


        if(sessionStorage.student)
        {
         student= JSON.parse(sessionStorage.getItem('student'));
        }else{
         student=[];
        }
        student.push(newStudent)   
        sessionStorage.setItem('student', JSON.stringify(student));

        var retrievedObject = sessionStorage.getItem('student');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        this.StudentForm.reset();

}




 ngOnInit(){


  }

}
