import { Component } from '@angular/core';
import { data } from '../array'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-structure';
  total = data.total
  base
  income: number = 0
  outcome: number = 0
  loan: number = 0
  investment: number = 0

  constructor() {
    this.base = data.data
    this.income
    this.outcome
    this.loan
    this.investment
  }

  getIncome(): void {
    this.base.filter((el) => {
      if (el.type === 'investment') {
        this.investment ++
      } else if (el.type === 'outcome') {
        this.outcome ++
      } else if (el.type === 'income') {
        this.income ++
      } else if (el.type === 'loan') {
        this.loan ++
      }
    })
  }

  ngOnInit(): void {
    this.getIncome();
  }
}
