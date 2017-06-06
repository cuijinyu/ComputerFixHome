import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }
  time:number=0;
  interval:any;
  ngOnInit() {
  };
  mustReady()
  {
    if(this.interval)
    {
      clearInterval(this.interval);
    }
    this.time=30;
    this.interval=setInterval(()=>{
      this.time-=1;
      if(this.time==0)
      {
        clearInterval(this.interval);
      }
    },1000)
  }
  mustReadyStop()
  {
    clearInterval(this.interval);
  }
  quickReady()
  {
    if(this.interval)
    {
      clearInterval(this.interval);
    }

    this.time=10;
    this.interval=setInterval(()=>{
      this.time-=1;
      if(this.time==0)
      {
        clearInterval(this.interval)
      }
    },1000)
  }

  reset()
  {
    clearInterval(this.interval);
    this.time=0;
  }
}
