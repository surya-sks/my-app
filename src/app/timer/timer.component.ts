import { Component } from '@angular/core';
import { timer, interval, Subject, takeUntil } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  // private intervalId: any;
  // public elapsedTime: number = 0;
  public isRunning: boolean = false;
  
  counter: number = 0;
  stopTimer = new Subject<void>();

  public start() {
    if (!this.isRunning) {
      this.isRunning = true;
      // this.intervalId = setInterval(() => {
      //   this.elapsedTime += 1000;
      // }, 1000);

      interval(1000)
        .pipe(takeUntil(this.stopTimer))
        .subscribe((time) => {
          this.counter = this.counter + 1000;
        });
    }
  }

  public stop() {
    if (this.isRunning) {
      // clearInterval(this.intervalId);
      this.isRunning = false;
      this.stopTimer.next();
    }
  }

  public reset() {
    this.stop();
    // this.elapsedTime = 0;
    this.counter = 0;
  }
  
  public formatTime(milliseconds: number): string {
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);

    const paddedHours = this.padNumber(hours);
    const paddedMinutes = this.padNumber(minutes);
    const paddedSeconds = this.padNumber(seconds);

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  private padNumber(number: number): string {
    return number.toString().padStart(2, '0');
  }

  // ngOnDestroy() {
  //   this.reset();
  // }
}
