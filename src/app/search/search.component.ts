import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { TimerService } from '../services/timer.service';
import { timer, interval, Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private http: HttpClient, private elementRef: ElementRef,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.onLoadCall();
    console.log(this.searchText)
  }

  startTimer(display) {
    try {
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
          this.spinner.show();
          this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=${this.searchText}`).subscribe((res: any) => {
            console.log(res);
            this.searchResult = res.statuses;
            this.spinner.hide();
            timer = 30;
          })

        }
      })
    } catch (e) {
      this.spinner.hide();
      this.snackbar.open(e.message, 'close', 'red-snackbar');
    }

  }


  onLoadCall() {
    try {
      this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=adobe`).subscribe((res: any) => {
        console.log(res);
        this.searchResult = res.statuses;
        this.spinner.hide();
        var callDuration = this.elementRef.nativeElement.querySelector('#time');
        this.startTimer(callDuration);
      })
    } catch (e) {
      this.spinner.hide();
      this.snackbar.open(e.message, 'close', 'red-snackbar');
    }
  }

  searchValue(searchValue) {
    try {
      this.spinner.show();
      this.subscribe.unsubscribe();
      this.searchText = searchValue;
      this.http.get(`https://aravindtwitter.herokuapp.com/twittersearch?key=${searchValue}`).subscribe((res: any) => {
        console.log(res);
        this.searchResult = res.statuses;
        this.spinner.hide();
        var callDuration = this.elementRef.nativeElement.querySelector('#time');
        this.startTimer(callDuration);
      })
    } catch (e) {
      this.spinner.hide();
      this.snackbar.open(e.message, 'close', 'red-snackbar');
    }
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
