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

  getLog() {
    console.log(data)
  }
}
