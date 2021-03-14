import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  students:Array<object>; 
  //x = require()

  constructor() { 
    this.students = []; 
  }

  ngOnInit(): void {
  }

  
 startClick(){
  
  let nameInputEl = (<HTMLInputElement>document.getElementById("name")).value;
  let idInputEl =  (<HTMLInputElement>document.getElementById("idNumber")).value;
  let gdpaInputEl = (<HTMLInputElement>document.getElementById("gdpa")).value 
  let stuInputDate= (<HTMLInputElement>document.getElementById("stuDate")).value;
  let dateTime = new Date();

   if(!this.inputValidation(nameInputEl,idInputEl,gdpaInputEl,stuInputDate)){
       this.insertStudent(nameInputEl,idInputEl,gdpaInputEl,stuInputDate,dateTime);
       alert("Studnet added!");
   }
  

 }
    
 inputValidation(name:string, id:string, gdpa:string,stuDate:string) {
  
  // check for the value of each element
  let isEmpty = false; 

  if (name == "") {
    alert("Please insert the student name");
    isEmpty = true;
  }

  else if (id == "") {
    alert("Please insert the student id number");
    isEmpty = true;
  }

  else if (gdpa == "") {
    alert("Please insert the student gdpa");
    isEmpty = true;
  }
  else if (stuDate == "") {
    alert("Please insert the student date of birth");
    isEmpty = true;
  }
  return isEmpty;
}
 
insertStudent(Name:any, Id:any, Gdpa:any,stuDate:any,dateTime:Date) {
  let student = {
    name: Name,
    id: Id,
    gdpa: Gdpa,
    date: stuDate,
    registration :dateTime
  };
  this.students.push(student);
  console.log("students array: ",  this.students);
}
 print() {
  let output = "";
  for (let i in  this.students) {
    let student = [];

    for (let Propertie in  this.students[i]) {
      student.push(Propertie + ": " +  this.students[i][Propertie]);
    }

    output += "<li>" + student.join("<br>") + "</li> <br>";
  }

  document.getElementById("print").style.display = "block";
  document.getElementById("print").innerHTML = "<ol>" + output + "</ol>";
}
}
