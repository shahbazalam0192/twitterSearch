import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { TimerService } from '../services/timer.service';
import { timer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchResult;
  searchText = 'adobe';
  subscribe = new Subscription();

  constructor(private router: Router,
    private snackbar: SnackbarService,
    private http: HttpClient, private elementRef: ElementRef) { }

  ngOnInit() {
    this.onLoadCall();
    console.log(this.searchText)
  }

  startTimer(display) {
    var timer = 30;
    var minutes;
    var seconds;

    this.subscribe = interval(1000).subscribe(x => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = seconds + "seconds";

      --timer;
      if (timer == 0) {
        this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=${this.searchText}`).subscribe((res: any) => {
          console.log(res);
          this.searchResult = res.statuses;
          timer = 30;
        })

      }
    })
  }


  onLoadCall() {
    try {
      this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=adobe`).subscribe((res: any) => {
        console.log(res);
        this.searchResult = res.statuses;
        var callDuration = this.elementRef.nativeElement.querySelector('#time');
        this.startTimer(callDuration);
      })
    } catch (e) {
      this.snackbar.open(e.message, 'close', 'red-snackbar');
    }
  }

  searchValue(searchValue) {
    try {
      this.subscribe.unsubscribe();
      this.searchText = searchValue;
      this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=${searchValue}`).subscribe((res: any) => {
        console.log(res);
        this.searchResult = res.statuses;
        
        var callDuration = this.elementRef.nativeElement.querySelector('#time');
        this.startTimer(callDuration);
      })
    } catch (e) {
      this.snackbar.open(e.message, 'close', 'red-snackbar');
    }
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
