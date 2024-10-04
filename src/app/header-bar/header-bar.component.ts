import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { CommonServiceService } from '../services/common.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, MatTooltipModule, CommonModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  constructor(public commonService : CommonServiceService, private router: Router, private route: ActivatedRoute){}
  loggedInUser: any;
  currentTime = new Date();
  subscription: any = Subscription;
  ngOnInit(){
    this.commonService.loggedInUser.subscribe(loggedInUser =>{
      this.loggedInUser = loggedInUser;
    });
    // Using RxJS Timer
    this.subscription = timer(0, 1000).pipe(map(() => new Date()),share())
      .subscribe(time => {
      //   let hour = this.currentTime.getHours();
      //   let minuts = this.currentTime.getMinutes();
      //   let seconds = this.currentTime.getSeconds();
        // let NewTime = hour + ":" + minuts + ":" + seconds
        this.currentTime = time;
      });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateUserName(loggedInUser: any){
    this.commonService.loggedInUser.next(loggedInUser);
  }
  onLogout(){
   this.updateUserName('');
   this.router.navigate([``], { relativeTo: this.route });
  }
}
