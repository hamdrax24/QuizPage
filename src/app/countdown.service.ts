import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CountdownService {
  private timeLeft = 60;
  private intervalPromise : any;

  constructor() { };

  startCountdown(time : any) {
    var service = this;
    service.timeLeft = time;
    
    service.intervalPromise = service.intervalPromise(function()
    {
      if(service.timeLeft > 0) {
        service.timeLeft--;
      };
    }, 1000);
  };

  getTimeLeft() {
    return this.timeLeft;
  };
};
