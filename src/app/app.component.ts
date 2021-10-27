import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  moneyValue: number
  dateValue: Date

  constructor() {
    this.moneyValue = 2000
    this.dateValue = new Date(new Date().getFullYear(), new Date().getMonth() + 1)
  }
}
