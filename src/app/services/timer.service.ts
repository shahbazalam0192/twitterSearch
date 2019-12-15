import { Injectable } from "@angular/core";
import { timer, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class TimerService {
  
  searchResult: any;
  countDown;
  counter = 30;
  tick = 1000;

  constructor() { }

  startTimer(){
    return interval(300000).pipe(
        take(this.counter),
        map(() => --this.counter)
      )
  }
  
}