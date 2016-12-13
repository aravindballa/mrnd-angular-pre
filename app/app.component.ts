import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <lboard></lboard>
  `,
})
export class AppComponent  { 
  name = 'Aravind'; 

}
