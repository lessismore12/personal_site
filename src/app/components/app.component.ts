import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '../../partials/main.partial.html',
})
export class AppComponent  { 
  name: string; 

  constructor() {
    this.name = "Angular";
  }
}
