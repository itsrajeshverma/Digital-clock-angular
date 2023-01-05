import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'digital-clock';
  public hour : string ="00"
  public minute : string = "00"
  public seconds : string = "00"
  public am : string = ''
  public day : string = ''
  public date = new Date()

ngOnInit(){
  setInterval(()=>{
    this.clock()
  } ,1000)
  this.clockWithpipe()
}
///with angular pipe
clockWithpipe(){
  setInterval(()=>{
    this.date = new Date()
  },1000)
}

//without pipe
clock(){
  const date = new Date()
  this.hour = date.getHours().toString()
  this.minute = date.getMinutes().toString()
  this.seconds = date.getSeconds().toString()
  this.am = this.hour >= "12" ? "PM" : "AM";
  this.day = date.toDateString()
  console.log(this.day)
}

}

