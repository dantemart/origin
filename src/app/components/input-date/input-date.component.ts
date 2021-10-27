import { Component, Input, OnInit } from '@angular/core';

enum Months {
  'January' = 0,
  'February' = 1,
  'March' = 2,
  'April' = 3,
  'May' = 4,
  'June' = 5,
  'July' = 6,
  'August' = 7,
  'September' = 8,
  'October' = 9,
  'November' = 10,
  'December' = 11
}
@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  @Input() value: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1)
  minValue: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1)
  month: string
  year: number

  constructor() {
    this.month = Months[this.value.getMonth()]
    this.year = this.value.getFullYear()
  }

  ngOnInit(): void {
  }

  onKeydownEvent(event: KeyboardEvent) {
    if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') this.updateDate(event.key)
  }

  isEqualToMinDate(): boolean {
    return this.value.getTime() === this.minValue.getTime()
  }

  updateDate(key: 'ArrowRight' | 'ArrowLeft') {
    if(key === 'ArrowLeft') {
      if (this.isEqualToMinDate()) return
      this.value.setMonth( this.value.getMonth() - 1)
      this.month = Months[this.value.getMonth()]
      this.year = this.value.getFullYear()
    } else {
      this.value.setMonth( this.value.getMonth() + 1)
      this.month = Months[this.value.getMonth()]
      this.year = this.value.getFullYear()
    }
  }

}
