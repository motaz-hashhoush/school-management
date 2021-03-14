import { Component, OnInit } from '@angular/core';
import { StudentServes, Student } from 'src/app/student.serves';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  students:Student[];
  constructor(private studentsserves:StudentServes) { 
    this.students = []; 
  }

  ngOnInit(): void {
    this.getalldata();
    console.log("hi");
  }
  getalldata(){
    this.studentsserves.getAllStudents()
    .subscribe(x=> this.students = x);
  }
  
 startClick(){
  
  let nameInputEl = (<HTMLInputElement>document.getElementById("name")).value;
  let idInputEl =  (<HTMLInputElement>document.getElementById("idNumber")).value;
  let gdpaInputEl = (<HTMLInputElement>document.getElementById("gdpa")).value 
  let stuInputDate= (<HTMLInputElement>document.getElementById("stuDate")).value;
  let dateTime = new Date();

   if(!this.inputValidation(nameInputEl,idInputEl,gdpaInputEl,stuInputDate)){
       this.insertStudent(nameInputEl,Number(idInputEl),Number(gdpaInputEl),new Date(stuInputDate),dateTime);
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
 
insertStudent(Name:string, Id:number, Gdpa:number,stuDate:Date,dateTime:Date) {
  let student : Student;
  student = {
    name: Name,
    id:Id,
    gpa :Gdpa,
    date : stuDate,
    regester:new Date()
  }
  this.studentsserves.insertStudent(student)
  .subscribe();
  window.location.reload();
  //this.students.push(student);
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
