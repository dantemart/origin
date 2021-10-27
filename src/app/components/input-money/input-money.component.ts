import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-money',
  templateUrl: './input-money.component.html',
  styleUrls: ['./input-money.component.scss']
})
export class InputMoneyComponent implements OnInit {

  @Input() value: number = 2000
  @Output() valueChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: number) {
    this.valueChange.emit(event)
  }

}
