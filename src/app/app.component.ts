import { Component } from '@angular/core';
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

  openModel(){
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display = 'block'
    }
  }
}
