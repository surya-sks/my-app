import { Component, ElementRef, ViewChild } from '@angular/core';
import { timer, interval, Subject, takeUntil } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, 
           ReactiveFormsModule, MatGridListModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timerFormControl = new FormControl('', [Validators.required]);
  // private intervalId: any;
  // public elapsedTime: number = 0;
  public isRunning: boolean = false;
  alarmAudio = new Audio();

  counter: number = 0;
  stopTimer = new Subject<void>();
  ngOnInit(){
    this.alarmAudio.src = "alarm-clock.mp3";
  }
  public start() {
    console.log('stoptimer',this.stopTimer);
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

  playAlarm(){
    this.alarmAudio.load();
    this.alarmAudio.play();
  }
  stopAlarm(){
    this.alarmAudio.pause();
  }
  // @ViewChild('audioPlayer') audioPlayer: any = ElementRef<HTMLAudioElement>;

  // playAudio(): void {
  //   this.audioPlayer.nativeElement.play();
  // }

  // pauseAudio(): void {
  //   this.audioPlayer.nativeElement.pause();
  // }

  menuContent: any[] = [
    {title: 'Timer', cols: 1, rows: 1},
    {title: 'Interval', cols: 1, rows: 1},
  ];

  //countdown timer begin
  public timerInterval: any;
  display: any;
  startCountDown() {
    this.timer(2);
  }
  stopCountDown() {
    clearInterval(this.timerInterval);
  }

  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
  //countdown timer end

}
