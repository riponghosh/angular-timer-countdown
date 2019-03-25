import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-timer-countdown';
  date = new Date('2019-04-26T00:00:00');
  countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  custom='test';
  x=null;

  ngOnInit() {
  	this.x=setInterval(()=> {
      this.customTimer(); 
    },1000); 	
  }

  finish(){
  	alert('finish');
  }

  customTimer(){

	  // Get todays date and time
	  var now = new Date().getTime();
	    
	  // Find the distance between now and the count down date
	  var distance = this.countDownDate - now;
	    
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	  var sec='';
	    if(seconds>1) {sec='s'}
	    else{sec=''}
	  // Output the result in an element with id="demo"
	  this.custom = days + "day " + hours + "hour "
	  + minutes + "minute " + seconds + "second"+sec;
	    
	  // If the count down is over, write some text 
	  if (distance < 0) {
	    clearInterval(this.x);
	    this.custom = "EXPIRED";
	  }
  }
}
