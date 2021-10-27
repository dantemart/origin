import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-highlight',
  templateUrl: './card-highlight.component.html',
  styleUrls: ['./card-highlight.component.scss']
})
export class CardHighlightComponent implements OnInit {

  @Input() moneyValue: number = 2000
  @Input() dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth())

  constructor() { }

  ngOnInit(): void {
  }

  getNumberOfMonths(): number {
    const now = new Date()
    return this.dateValue.getMonth() - now.getMonth() +
   (12 * (this.dateValue.getFullYear() - now.getFullYear())) + 1
  }

}
