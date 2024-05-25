import { CommonModule } from '@angular/common';
import { Component,  ElementRef,  ViewChild, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CRUD-With_Local-Storage';
  // @ViewChild('myModle') modle : ElementRef | undefined;
  @ViewChild("myModle") modles :ElementRef | undefined;
  studentobj: student = new student();
  studentList:student[]=[];

  ngOnInit(): void {
    const localData = localStorage.getItem("angular17crud");
    if(localData != null){
      this.studentList = JSON.parse(localData)
    } 
  }

  openModel(){
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display = 'block'
    }
    // if(this.modles != null){
    //   this.modles.nativeElement.style.display = 'block'
    // }
  }

  closeModle(){
    this.studentobj = new student();
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display = 'none';
    }
    //  if(this.modles != null){
    //   this.modles.nativeElement.style.display = "none"
    //  }
  }

  saveStudents(){
    // console.log(this.studentobj);
    const isLocalPresent = localStorage.getItem("angular17crud");
    if(isLocalPresent != null){
      const oldArray = JSON.parse(isLocalPresent);
      oldArray.push(this.studentobj);
      this.studentList = oldArray
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));

    }else{
      const newArray = [];
      newArray.push(this.studentobj);
      this.studentList = newArray
      localStorage.setItem('angular17crud', JSON.stringify(newArray));
    }
    this.closeModle();
  }
}

export class student {
  name:string;
  email:string;
  mobilenumber:string;
  city:string;
  state:string;
  adders:string;
  pincode:string;

  constructor(){
    this.name ="";
    this.email ="";
    this.mobilenumber="";
    this.city ="";
    this.state ="";
    this.adders ="";
    this.pincode ="";
  }
}