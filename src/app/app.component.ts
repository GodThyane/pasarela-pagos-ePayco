import {Component} from '@angular/core';

declare let ePayco: any; // declare moment
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Productos angular';
  public headerColor: string;
  handler: any;

  constructor() {

  }

}
