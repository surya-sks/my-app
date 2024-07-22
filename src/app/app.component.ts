import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CommonServiceService } from './services/common-service.service';
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,HeaderBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  loggedInUser: any;
  constructor(public commonService : CommonServiceService, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(){
    this.commonService.loggedInUser.subscribe(loggedInUser =>{
      this.loggedInUser = loggedInUser;
      if(!this.loggedInUser){
        this.router.navigate([``], { relativeTo: this.route });
      }
    }
      )
  }
}
