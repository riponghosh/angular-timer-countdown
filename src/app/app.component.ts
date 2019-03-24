import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-timer-countdown';
  date = new Date('2019-04-26T00:00:00');


  finish(){
  	alert('finish');
  }
}
