import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, MatTooltipModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  constructor(public commonService : CommonServiceService, private router: Router, private route: ActivatedRoute){}
  loggedInUser: any;
  ngOnInit(){
    this.commonService.loggedInUser.subscribe(loggedInUser =>{
      this.loggedInUser = loggedInUser;
    }
      )
  }
  updateUserName(loggedInUser: any){
    this.commonService.loggedInUser.next(loggedInUser);
  }
  onLogout(){
   this.updateUserName('');
   this.router.navigate([``], { relativeTo: this.route });
  }
}
