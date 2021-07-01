import { Component } from '@angular/core';

function log(name:any, lastname:any, test:any) {
  console.log(name, lastname, test);
  

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-angular';

  @log

  match(){
    console.log("hi there");
    
  }

}
