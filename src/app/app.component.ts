import { Component,  ElementRef,  ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD-With_Local-Storage';
  // @ViewChild('myModle') modle : ElementRef | undefined;
  @ViewChild("myModle") modles :ElementRef | undefined;
  studentobj: student = new student();

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
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display = 'none';
    }
    //  if(this.modles != null){
    //   this.modles.nativeElement.style.display = "none"
    //  }
  }

  saveModle(){
    console.log(student)
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