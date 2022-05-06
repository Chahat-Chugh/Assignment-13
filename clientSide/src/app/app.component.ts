import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 13';
  showTable:boolean = false;

  onClick()
  {
    this.showTable = true;
  }
}
